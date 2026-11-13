import React from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import untrustedCertImage from './images/untrusted-cert-advance.png';
import loginImage from './images/login-updated.png';

export default function OpenInstanaInFirefox({
  email = "admin@instana.local",
  password = "Passw0rd"
}: {
  email?: string;
  password?: string;
}) {
  return (
    <>
      <p>
        From the Bastion host open the Firefox browser and select the <strong>Instana</strong> bookmark.
      </p>

      <img src={useBaseUrl('/img/open-firefox-rhel9.png')} alt="open firefox" />

      <Admonition type="info">
        <p>
          You can safely ignore the warning about the certificate being untrusted.
        </p>
        <img src={untrustedCertImage} alt="untrusted-cert-advance" width="75%" />
      </Admonition>

      <p>
        When prompted, enter the username and password that you updated earlier.
      </p>

      <ul>
        <li>Email: <strong>{email}</strong></li>
        <li>Password: <strong>{password}</strong></li>
      </ul>

      <img src={loginImage} alt="login-updated" width="500" />
    </>
  );
}
