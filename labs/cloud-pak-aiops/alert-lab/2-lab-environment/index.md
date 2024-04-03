---
title: 2. Lab Environment
description: Lab Environment
sidebar_position: 2
---

In this Lab, you will have access to one OpenShift cluster via a bastion virtual
machine that has installed Red Hat Enterprise Linux (RHEL). Note that inside
OpenShift, the cluster has installed the Cloud Pak for AIOps. It also has
installed the Red Hat OpenShift Data Foundation (ODF) which is a
software-defined, container-native storage solution that provides storage
classes that will be used by the Cloud Pak for AIOps to dynamically request
storage.

The following diagram describes the infrastructure for the Lab:

![](images/intro.drawio.png)

## 2.1: Prerequisites

### Obtain your Entitlement key

You will need an IBM ID to request an entitlement key. You can create an IBM ID
from [here](https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776).

To complete this lab you will need an entitlement key. Navigate to
[**this link**](https://myibm.ibm.com/products-services/containerlibrary) to
obtain your **entitlement key** that is assigned to your IBM ID which will grant
you access to the IBM Entitled Registry. Copy this into a text editor as we will
need it later in the Lab.

You can check your entitlement for the Cloud Pak for AIOPs by clicking **View
Library**

![](images/entitlement_check.png)

:::info

If your entitlement key is not valid for the Cloud Pak for AIOPs, you can
register for a 60 day trial using the following link:
[Request trial](https://www.ibm.com/account/reg/us-en/login?formid=urx-51074).

:::

## 2.2: Requesting a Lab Environment

import TechZoneStatus from "../../../\_common/components/tech-zone-status.tsx"

Below is a live chart showing Tech Zone capacity in each available region. When
requesting your environment it would be wise to select the region that has the
most capacity available.

<TechZoneStatus />

:::info

Follow
[these instructions](/waiops-tech-jam/labs/jam-in-a-box/#requesting-a-lab-environment)
for step by step guidance on requesting a new lab environment in IBM Tech Zone.

:::

Request Tech Zone environment:

- [Jam-in-a-Box: CP4WAIOps - Explore](https://techzone.ibm.com/my/reservations/create/64c2a0166c515100179d63e2)

## 2.3: Accessing your Lab Environment

:::info

Once you have received an eMail confirming that your environment is ready,
follow
[these instructions](/waiops-tech-jam/labs/jam-in-a-box/#accessing-a-lab-environment)
for step by step guidance on accessing your lab environment in IBM Tech Zone.

:::

## 2.4: Running 'oc' Commands to Connect to the Cluster

In the previous section, we described how to access the bastion VM. Now we will
connect to the OpenShift cluster using the OpenShift CLI (oc commands).

- From the bastion VM desktop, open a **Terminal** window (you may need to click
  on **Activities** in the top-left to remove the screen-saver)
- In the **Terminal** window, copy & paste the **oc** command below to login
  into the cluster. Get your **kubeadmin** password from your environment
  details page. This command will make a connection to your cluster and
  authenticate you, so you will be ready to start issuing oc commands during the
  Lab as needed.

```
oc login --server=https://api.ocp.techzone.lan:6443 --username kubeadmin --password <your password>
```

## 2.5: Log in to the Cloud Pak for AIOps console

Now you are going to locate the console URL and the admin login credentials from
your deployed instance of the Cloud Pak for AIOps.

Find the **Cloud Pak for AIOps URL** to access the console by running the
following command from the **Terminal** window:

```
echo -e "https://$(oc get route -n cp4waiops cpd -o jsonpath='{.spec.host}')\n"
```

Find the **password** for the **admin** username by running the following
command from the **Terminal** window:

```
oc -n ibm-common-services get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 -d ; echo -e "\n"
```

Open a Firefox browser window and copy & paste the **Cloud Pak for AIOps URL**
that you got in the previous step. Note that you will get one or more security
**Warning: Potential Security Risk Ahead**. This is because we have used
self-signed certificates for this Lab. Just accept the risk and continue. Make
sure you can login as **admin**, as shown below, using the password from the
previous command.

![](images/login.png)

After you login, you will land into the Cloud Pak for AIOps home page as shown
below:

![](images/home-page.png)
