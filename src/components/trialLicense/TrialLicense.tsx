import Admonition from "@theme/Admonition"

export default function AiopsTrialLicenseAdmonition({
  trialUrl = "https://www.ibm.com/account/reg/us-en/login?formid=urx-51074",
}: {
  trialUrl?: string;
}) {
  return (
    <Admonition type="info">
      <p>
        If your entitlement key is not valid for the Cloud Pak for AIOPs, you can
        register for a 60 day trial using the following link:{" "}
        <a href={trialUrl} target="_blank" rel="noopener noreferrer">
          Request trial
        </a>.
      </p>
    </Admonition>
  );
}
