import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import homePageImage from './images/home-page.png';
import loginImage from './images/login.png';

export default function LogInAiopsConsole({
  cp4aiopsNamespace = "cp4aiops"
}: {
  cp4aiopsNamespace?: string;
}) {
  return (
    <>
      <p>
        Locate the console URL and the admin login credentials from your deployed instance of the Cloud Pak for AIOps.
      </p>

      <p>
        Find the <strong>Cloud Pak for AIOps URL</strong> to access the console by running the
        following command from the <strong>Terminal</strong> window:
      </p>

      <CodeBlock language="bash">
        {`echo -e "https://$(oc get route -n ${cp4aiopsNamespace} cpd -o jsonpath='{.spec.host}')\\n"`}
      </CodeBlock>

      <p>
        Find the <strong>password</strong> for the <strong>admin</strong> username by running the following
        command from the <strong>Terminal</strong> window:
      </p>

      <CodeBlock language="bash">
        {`oc -n ${cp4aiopsNamespace} get secret platform-auth-idp-credentials -o jsonpath='{.data.admin_password}' | base64 -d ; echo -e "\\n"`}
      </CodeBlock>

      <p>
        Open a Firefox browser window and navigate to the AIOps dashboard using the url
        you discovered in the previous step.
      </p>

      <CodeBlock language="bash">
        https://cpd-cp4aiops.apps.ocp.techzone.lan
      </CodeBlock>

      <Admonition type="tip">
        <p>
          You will get one or more security <strong>Warning: Potential Security Risk Ahead</strong>.
          This is because we have used self-signed certificates for this Lab. Just accept
          the risk and continue.
        </p>
      </Admonition>

      <ul>
        <li>Username: <code>cpadmin</code></li>
        <li>Password: The password you found in the previous step.</li>
      </ul>

      <img src={loginImage} alt="Login" />

      <p>
        After you login, you will land into the Cloud Pak for AIOps home page as shown
        below:
      </p>

      <img src={homePageImage} alt="Home page" />
    </>
  );
}
