import TechZoneStatus from "@site/src/components/techZoneStatus/techZoneStatus";
import Admonition from '@theme/Admonition';
import Heading from '@theme/Heading';

export default function RequestingLabEnvironment({
  environmentName,
  environmentUrl,
}: {
  environmentName: string;
  environmentUrl: string;
}) {
  return (
    // Dont wrap in a div or it will break the docusaurus header css formatting
    <>
      <p>
        Below is a live chart showing Tech Zone capacity in each available region. When
        requesting your environment it would be wise to select the region that has the
        most capacity available.
      </p>

      <TechZoneStatus />

      <Admonition type="info">
        <p>
          Follow{" "}
          <a href="/waiops-tech-jam/labs/jam-in-a-box/#requesting-a-lab-environment" target="_blank" rel="noopener noreferrer">
            these instructions
          </a>{" "}
          for step by step guidance on requesting and accessing a lab environment in IBM Tech Zone.
        </p>
      </Admonition>

      <div className="tech-zone-links">
        <p>Request Tech Zone environment:</p>
        <ul>
          <li>
            <a href={environmentUrl} target="_blank" rel="noopener noreferrer">
              {environmentName}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
