import Admonition from '@theme/Admonition';
import Heading from '@theme/Heading';
import entitlementCheckImage from './images/entitlement_check.png';

export default function ObtainingEntitlementKey({
  entitlementKeyUrl = "https://myibm.ibm.com/products-services/containerlibrary",
  trialUrl = "https://www.ibm.com/account/reg/us-en/login?formid=urx-51074",
  ibmIdSignupUrl = "https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776",
}: {
  entitlementKeyUrl?: string;
  trialUrl?: string;
  ibmIdSignupUrl?: string;
}) {
  return (
    // Dont wrap in a div or it will break the docusaurus header css formatting
    <>
      <Heading as="h3">Obtain your Entitlement key</Heading>


      <p>
        You will need an IBM ID to request an entitlement key. You can create an IBM ID
        from{" "}
        <a href={ibmIdSignupUrl} target="_blank" rel="noopener noreferrer">
          here
        </a>.
      </p>

      <p>
        To complete this lab you will need an entitlement key. Navigate to{" "}
        <a href={entitlementKeyUrl} target="_blank" rel="noopener noreferrer">
          <strong>this link</strong>
        </a>{" "}
        to obtain your <strong>entitlement key</strong> that is assigned to your IBM ID which will grant
        you access to the IBM Entitled Registry. Copy this into a text editor as we will
        need it later in the Lab.
      </p>

      <p>
        You can check your entitlement for the Cloud Pak for AIOPs by clicking <strong>View
        Library</strong>
      </p>

      <img src={entitlementCheckImage} alt="Entitlement check" />

      <Admonition type="info">
        <p>
          If your entitlement key is not valid for the Cloud Pak for AIOPs, you can
          register for a 60 day trial using the following link:{" "}
          <a href={trialUrl} target="_blank" rel="noopener noreferrer">
            Request trial
          </a>.
        </p>
      </Admonition>
    </>
  );
}
