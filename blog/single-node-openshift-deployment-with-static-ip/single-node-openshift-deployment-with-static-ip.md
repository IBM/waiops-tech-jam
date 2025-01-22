---
title: Single Node Openshift deployment with Static IP
description:
  This article explains to you how to deploy the Single Node Openshift with
  Static IP, since there is no detailed introduction in openshift official
  documentation. An automatic deployment tool also included for vmware
  provisioning.
tags: [openshift, ocp, sno]
slug: single-node-openshift-deployment-with-static-ip
---

Starting from openshift v4.9, RedHat announced the support for single node
cluster deployment. OpenShift Container Platform on a single node is a
specialized installation that requires the creation of a special ignition
configuration ISO. The primary use case is for edge computing workloads,
including intermittent connectivity, portable clouds, and 5G radio access
networks (RAN) close to a base station. The major tradeoff with an installation
on a single node is the lack of high availability.

<!-- truncate -->

Furthermore Single Node Openshift (SNO) can also be used in many other scenarios
such as:

- Get full functionality of openshift cluster (except high availability) through
  one node deployment.

- Run an openshift cluster with few resources and run openshift-based demo apps
  on top of it.

- Easy to build demo scenarios for product-only features.

- Quickly backup and restore a demo/poc environment, by building a single VM
  image, it's easily migrated to new environments and will launch and start
  without product deployment & configuration.

- Convenient state recovery by using the snapshot, you can revert to the
  previous state at any time, which greatly facilitates functional testing and
  development, while the multi-nodes cluster snapshot recovery is almost
  impossible.

- When the resources of a single node are sufficient enough, you can run IBM
  Cloud Paks (non-production deployment). Currently, the deployment of AIOps
  AIManager with xsmall sizing has been verified.

RedHat provided the steps
[here](https://docs.openshift.com/container-platform/4.10/installing/installing_sno/install-sno-installing-sno.html)
to provision SNO, however, this guide only support a DHCP enabled environment,
the SNO bootstrap & master node has to obtain the IP address via DHCP client,
this is often not possible as the SNO won't be deployed into a DHCP enabled
environment. You have to use a manual configured static IP address for this
all-in-one node.

On the other hand, RedHat's tutorial suggests to use the Assisted Installer to
perform the guided installation which is hard to automated and requires internet
access. This is not an option for an air-gapped deployment or you have to create
your own Assisted Installer service which is more complicated.

What we intend to do is make it simple without the Assisted Installer and ensure
everything is automated.

First, let's go through the manual Static IP deployment steps.

## Pre-requisites

- Minimum resource requirements

| vCPU         | Memory | Storage |
| ------------ | ------ | ------- |
| 8 vCPU cores | 32G    | 120G    |

## Manual Steps

Take the latest version of openshift version 4.10 as an example.

1. Prepare the oc client binary, openshift-install binary, CoreOS live ISO file
   and SSH key to login to CoreOS.

   ```sh
   curl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/openshift-client-linux.tar.gz > oc.tar.gz
   tar zxf oc.tar.gz
   chmod +x oc
   OCP_VERSION=latest-4.10
   curl -k https://mirror.openshift.com/pub/openshift-v4/clients/ocp/$OCP_VERSION/openshift-install-linux.tar.gz > openshift-install-linux.tar.gz
   tar zxvf openshift-install-linux.tar.gz
   chmod +x openshift-install
   ISO_URL=$(./openshift-install coreos print-stream-json | grep location | grep x86_64 | grep iso | cut -d\" -f4)
   curl -kLo rhcos-live.x86_64.iso $ISO_URL
   ssh-keygen -f snokey
   ```

1. Create the install config file. `vim install-config.yaml`

   ```yaml title="install-config.yaml"
   apiVersion: v1
   baseDomain: cn.ibm.com
   compute:
     - name: worker
       replicas: 0
   controlPlane:
     name: master
     replicas: 1
   metadata:
     name: sno-test
   networking:
     networkType: OpenShiftSDN
     clusterNetworks:
       - cidr: 10.128.0.0/14
         hostPrefix: 23
     serviceNetwork:
       - 172.30.0.0/16
   BootstrapInPlace:
     InstallationDisk: /dev/sda
   platform:
     none: {}
   pullSecret: "<your redhat pull secret>"
   sshKey: "<your ssh key (snokey content in above command)>"
   ```

1. Create single node ignition file

   ```sh
   mkdir ocp && cp install-config.yaml ocp
   ./openshift-install --dir=ocp create single-node-ignition-config
   ```

1. Prepare coreos-installer command

   ```sh
   alias coreos-installer='podman run --privileged --rm -v /dev:/dev -v /run/udev:/run/udev -v $PWD:/data -w /data quay.io/coreos/coreos-installer:release'
   ```

   > Or you can download the **coreos-installer** binary from
   > [here.](https://mirror.openshift.com/pub/openshift-v4/clients/coreos-installer)

1. Create a script which will be used to replace the bootstrap ignition content.

   `vim install-to-disk-customized.sh`

   ```shell title="install-to-disk-customized.sh"
   #!/usr/bin/env bash
   set -euoE pipefail ## -E option will cause functions to inherit trap

   # This script is executed by install-to-disk service when installing single node with bootstrap in place

   . /usr/local/bin/bootstrap-service-record.sh

   record_service_stage_start "wait-for-bootkube"
   echo "Waiting for /opt/openshift/.bootkube.done"
   until [ -f /opt/openshift/.bootkube.done ]; do
     sleep 5
   done
   record_service_stage_success

   if [ ! -f coreos-installer.done ]; then
     record_service_stage_start "coreos-installer"
     # Write image + ignition to disk
     echo "Executing coreos-installer with the following options: install -i /opt/openshift/master.ign /dev/sda"
     coreos-installer install -n -i /opt/openshift/master.ign /dev/sda
     touch coreos-installer.done
     record_service_stage_success
   fi

   record_service_stage_start "reboot"
   echo "Going to reboot"
   shutdown -r +1 "Bootstrap completed, server is going to reboot."
   touch /opt/openshift/.install-to-disk.done
   echo "Done"
   record_service_stage_success
   ```

   This could be tricky, SNO installation procedure will be:

   1. Launch the VM as the bootstrap node first with bootstrap ignition file,
      this ignition file include all the necessary actions to start bootstrap
      services which include generating the master ign file, then
   2. Bootstrap node will write the master.ign file into master node disk (here
      it is /dev/sda) through **install-to-disk** service, after that
   3. Bootstrap node will reboot and become a master node, however, the
      **master.ign** won't include any network configuration, hence after
      reboot, the master node won't have ip address and require to obtain ip via
      DHCP. So we need embed the network configuration include ip/gateway
      settings to the **master.ign**. **coreos-installer install** command
      provide the option **-n** to copy existing network configuration to ign
      file. Which make us be able to pass the bootstrap network setting to
      master node. The above content is the piece extracted and decoded from the
      **bootstrap-in-place-for-live-iso.ign** file, the original content include
      the command **coreos-installer install -i /opt/openshift/master.ign
      /dev/sda** , we replaced this into **coreos-installer install -n -i
      /opt/openshift/master.ign /dev/sda** as you can see in above script.

1. Encode the **install-to-disk** script and replace relevant content in
   bootstrap ign file.

   :::tip

   make a copy of original bootstrap ign file

   ```sh
   cp ocp/bootstrap-in-place-for-live-iso.ign iso.ign
   ```

   :::

   ```sh
   newb64=$(cat install-to-disk-customized.sh |base64 -w0)
   sed -i "s/IyEvdXNyL2Jpbi9lbnYgYmFzaApzZXQgLWV1b0UgcGlwZWZhaWwgIyMgLUUgb3B0aW9uIHdpbGwgY2F1c2UgZnVuY3Rpb25zIHRvIGluaGVyaXQgdHJhcAoKIyBUaGlzIHNjcmlwdCBpcyBleGVjdXRlZCBieSBpbnN0YWxsLXRvLWRpc2sgc2VydmljZSB3aGVuIGluc3RhbGxpbmcgc2luZ2xlIG5vZGUgd2l0aCBib290c3RyYXAgaW4gcGxhY2UKCi4gL3Vzci9sb2NhbC9iaW4vYm9vdHN0cmFwLXNlcnZpY2UtcmVjb3JkLnNoCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAid2FpdC1mb3ItYm9vdGt1YmUiCmVjaG8gIldhaXRpbmcgZm9yIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIgp1bnRpbCBbIC1mIC9vcHQvb3BlbnNoaWZ0Ly5ib290a3ViZS5kb25lIF07IGRvCiAgc2xlZXAgNQpkb25lCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MKCmlmIFsgISAtZiBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUgXTsgdGhlbgogIHJlY29yZF9zZXJ2aWNlX3N0YWdlX3N0YXJ0ICJjb3Jlb3MtaW5zdGFsbGVyIgogICMgV3JpdGUgaW1hZ2UgKyBpZ25pdGlvbiB0byBkaXNrCiAgZWNobyAiRXhlY3V0aW5nIGNvcmVvcy1pbnN0YWxsZXIgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6IGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYSIKICBjb3Jlb3MtaW5zdGFsbGVyIGluc3RhbGwgLWkgL29wdC9vcGVuc2hpZnQvbWFzdGVyLmlnbiAvZGV2L3NkYQoKICB0b3VjaCBjb3Jlb3MtaW5zdGFsbGVyLmRvbmUKICByZWNvcmRfc2VydmljZV9zdGFnZV9zdWNjZXNzCmZpCgpyZWNvcmRfc2VydmljZV9zdGFnZV9zdGFydCAicmVib290IgplY2hvICJHb2luZyB0byByZWJvb3QiCnNodXRkb3duIC1yICsxICJCb290c3RyYXAgY29tcGxldGVkLCBzZXJ2ZXIgaXMgZ29pbmcgdG8gcmVib290LiIKdG91Y2ggL29wdC9vcGVuc2hpZnQvLmluc3RhbGwtdG8tZGlzay5kb25lCmVjaG8gIkRvbmUiCnJlY29yZF9zZXJ2aWNlX3N0YWdlX3N1Y2Nlc3MK/${newb64}/g" iso.ign
   ```

   :::info

   The above base64 encoded string is the original **install-to-disk** script
   content, we replace it into the value of **${newb64}** which is the one with
   copy network action enabled.

   :::

1. Embed the bootstrap ign file to CoreOS live ISO file.

   ```sh
   coreos-installer iso ignition embed -fi iso.ign rhcos-live.x86_64.iso
   ```

   :::tip

   You can use **coreos-installer iso ignition show rhcos-live.x86_64.iso** to
   check the results.

   :::

1. Add static IP setting to ISO kernel arguments.

   ```sh
   coreos-installer iso kargs modify -a "ip=10.0.2.230::10.0.2.254:255.255.255.0:sno-test:ens192:off:9.9.9.9" rhcos-live.x86_64.iso"
   ```

   Alternatively you can create an network connection file(eg.
   **sno-static-ip.nmconnection**) and use **coreos-installer iso network embed
   rhcos-live.x86_64.iso -k sno-static-ip.nmconnection** to embed the network
   setting to iso. Here I just use the **kargs modify** to embed it with kernel
   setting which is easier. The kernel argument consisted with :
   `"ip=${ip}::${gateway}:${netmask}:${hostname}:${interface}:none:${nameserver}"`

1. Now it's time to launch you SNO vm with the customized ISO file.

1. Post boot actions After SNO vm boot via the customized ISO file, It will
   become a bootstrap node in the first time, no further action to take during
   this period, Once bootstrap process completed, the VM will automatically
   reboot and become a master node. This time the master node will have the
   static IP setting as we've already manipulated the master.ign file. but the
   hostname information won't be copied. Hence the master node will started with
   hostname **localhost**. We need correct it.

   If we don't want or don't have authority to add the DNS entry in public DNS
   server(in my example the public dns server is 9.9.9.9), we also need to
   configure the DNS resolution for SNO cluster.

   After the 2nd boot, take the following steps to correct hostname and DNS
   setting.

   ```shell
   cat << EOF > /etc/dnsmasq.d/single-node.conf
   address=/apps.sno-test.cn.ibm.com/10.0.2.230
   address=/api-int.sno-test.cn.ibm.com/10.0.2.230
   address=/api.sno-test.cn.ibm.com/10.0.2.230
   EOF
   ```

   ```sh
   systemctl enable dnsmasq
   systemctl restart dnsmasq
   ```

   :::info

   CoreOS default has dnsmasq installed but stopped and not enabled by default.
   we just add the DNS resolution and enable it. Here **sno-test** is the
   cluster name, **cn.ibm.com** is the cluster base domain, **10.0.2.230** is
   the SNO node static IP address.

   :::

   ```shell
   cat << EOF > /etc/NetworkManager/dispatcher.d/forcedns
   export IP="10.0.2.230"
   export BASE_RESOLV_CONF=/run/NetworkManager/resolv.conf
   if [ "$2" = "dhcp4-change" ] || [ "$2" = "dhcp6-change" ] || [ "$2" = "up" ] || [ "$2" = "connectivity-change" ]; then
       if ! grep -q "$IP" /etc/resolv.conf; then
         export TMP_FILE=$(mktemp /etc/forcedns_resolv.conf.XXXXXX)
         cp  $BASE_RESOLV_CONF $TMP_FILE
         chmod --reference=$BASE_RESOLV_CONF $TMP_FILE
         sed -i -e "s/sno-test.cn.ibm.com//" \
         -e "s/search /& sno-test.cn.ibm.com /" \
         -e "0,/nameserver/s/nameserver/& $IP\n&/" $TMP_FILE
         mv $TMP_FILE /etc/resolv.conf
       fi
   fi
   EOF
   ```

   ```shell
   chmod 755 /etc/NetworkManager/dispatcher.d/forcedns
   nmcli conn up ens192  # this command enable SNO ip been the nameserver and update the /etc/resolv.conf
   ```

   Check the **/etc/resolv.conf**, it will look like:

   ```conf
   # Generated by NetworkManager
   nameserver 10.0.XXX.XXX
   nameserver 9.9.9.9
   ```

1. Wait for SNO ready Now everything has been settled, Just wait for the SNO
   cluster to be ready and access. If you don't use public DNS to resolve fqdn
   entries about the SNO cluster, add the entry in **/etc/hosts** file:
   ```conf
   10.0.XXX.XXX api.sno-test.cn.ibm.com console-openshift-console.apps.sno-test.cn.ibm.com integrated-oauth-server-openshift-authentication.apps.sno-test.cn.ibm.com oauth-openshift.apps.sno-test.cn.ibm.com prometheus-k8s-openshift-monitoring.apps.sno-test.cn.ibm.com grafana-openshift-monitoring.apps.sno-test.cn.ibm.com
   ```
   Check the cluster operator status:
   ```sh
   export KUBECONFIG=<install_path>/ocp/auth/kubeconfig
   oc get co
   ```

## Automatic deployment

All the processes to automatic deploy a SNO cluster have been developed and
merged to the repo
[ocp4-vsphere-automation-airgap](https://github.com/lxin-git/ocp4-vsphere-automation-airgap).

This repo provide the one step configuration for all kinds of openshift
deployment on vmware via ansible playbook, include v4.3~v4.10 support, and
support air-gapped deployment, see detailed instruction about
[airgap configuration](https://github.ibm.com/llixinn/ocp4-vsphere-automation-airgap)

For SNO automatic deployment, the new extra parameters introduced in the one-off
configure file, example as following:

```yaml
sno:
  enabled: true
  network: DPortGroup
  name: "{{'{{'}}config.cluster_name{{'}}'}}-ocp"
  nic: ens192
  ip: 10.0.XXX.XXX
  netmask: 255.255.255.0
  gateway: 10.0.XXX.XXX
  public_dns1: 9.XXX.XXX.XXX
  public_dns2: 9.XXX.XXX.XXX
  cpu: 8
  ram: 32768
  disksize: 200
  installationdisk: /dev/sda
```
