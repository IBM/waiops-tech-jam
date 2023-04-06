## Lab Snippets

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
