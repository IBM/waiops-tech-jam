import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function OpenTerminalOnBastion({
  hostname
}: {
  hostname: string;
}) {
  return (
    <>
      <Admonition type="tip">
        <p>
          If you are unsure how to get access to the Bastion host (Guacamole) see{' '}
          <Link to="/labs/jam-in-a-box/#accessing-a-lab-environment">
            Accessing a Lab Environment
          </Link>
        </p>
      </Admonition>

      <img src={useBaseUrl('/img/open-terminal-rhel9.png')} alt="open-terminal" />

      <p>
        Use the terminal to login to the <code>{hostname}</code> host:
      </p>

      <CodeBlock language="sh" title="Host: bastion-gym-lan">
        {`ssh jammer@${hostname}`}
      </CodeBlock>

      <p>
        When prompted if you want to continue connecting, type: <code>yes</code>
      </p>

      <p>Use sudo to become root.</p>

      <CodeBlock language="sh" title={`Host: ${hostname}`}>
        sudo -i
      </CodeBlock>

      <p>
        You are now operating as <b>root</b> on the <b>{hostname}</b> host.
      </p>
    </>
  );
}
