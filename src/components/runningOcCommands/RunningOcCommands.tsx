import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function RunningOcCommands({
  clusterUrl = "https://api.ocp.techzone.lan:6443",
  username = "kubeadmin",
  password = "<your password>"
}: {
  clusterUrl?: string,
  username?: string,
  password?: string
}) {
  return (
    <>
      <p>
        Connecting to the OpenShift cluster using the OpenShift CLI (oc commands) can be done by following the instructions below:
      </p>

      <ul>
        <li>
          From the bastion VM desktop, open a <strong>Terminal</strong> window (you may need to click
          on <strong>Activities</strong> in the top-left to remove the screen-saver)
        </li>
        <li>
          In the <strong>Terminal</strong> window, copy & paste the <strong>oc</strong> command below to login
          into the cluster. Get your <strong>kubeadmin</strong> password from your environment
          details page. This command will make a connection to your cluster and
          authenticate you, so you will be ready to start issuing oc commands during the
          Lab as needed.
        </li>
      </ul>

      <CodeBlock language="bash">
{`oc login --server=${clusterUrl} --username ${username} --password ${password}`}
      </CodeBlock>
    </>
  );
}
