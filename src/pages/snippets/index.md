## Lab Snippets

### Manually update your clusters Global Pull Secret

Set the pull secret username and password:

:::caution

Get the `<pull-secret-user>` and `<pull-secret-pass>` from your lab proctors.

:::

```sh
export USER="<pull-secret-user>"
export PASS="<pull-secret-pass>"
```

Update the pull secret by running the following commands:

:::note

These commands use the above set variables. There is no need to edit them.

:::

```sh
oc get secret/pull-secret -n openshift-config --kubeconfig ~/kubeconfig-apps --template='{{index .data ".dockerconfigjson" | base64decode}}' > pullSecret

oc registry login --kubeconfig ~/kubeconfig-apps --registry="docker.io" --auth-basic="${USER}:${PASS}" --to=pullSecret

oc set data secret/pull-secret -n openshift-config --kubeconfig ~/kubeconfig-apps --from-file=.dockerconfigjson=pullSecret
```

### Manually install Quote of the Day

To install the QOTD application run the following commands from the bastion
host:

```sh
export KUBECONFIG=/home/admin/kubeconfig-apps
DOMAIN=apps.sno.techzone.lan

oc new-project qotd
oc adm policy add-scc-to-user anyuid -z default

oc new-project qotd-load
oc adm policy add-scc-to-user anyuid -z default

helm repo add qotd https://gitlab.com/api/v4/projects/26143345/packages/helm/stable
helm repo update

helm install qotd qotd/qotd \
  -n qotd \
  --set appNamespace=qotd \
  --set loadNamespace=qotd-load \
  --set host=${DOMAIN} \
  --set enableInstana=true \
  --set roksCluster=true
```

### Manually create the Robot Shop Redis PV/PVC

```sh
cat <<EOF | oc create --kubeconfig ~/kubeconfig-apps -f -
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: robot-shop-redis-pv-test
  labels:
    type: local
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: "/mnt/robotshop"
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: data-redis-0
  namespace: robot-shop
  labels:
    service: redis
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  volumeMode: Filesystem
EOF
```
