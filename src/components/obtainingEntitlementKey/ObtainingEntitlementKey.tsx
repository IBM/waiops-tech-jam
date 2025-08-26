import Heading from '@theme/Heading';
import entitlementCheckImage from './images/entitlement_check.png';

export default function ObtainingEntitlementKey({
  entitlementKeyUrl = "https://myibm.ibm.com/products-services/containerlibrary",
}: {
  entitlementKeyUrl?: string;
}) {
  return (
    // Dont wrap in a div or it will break the docusaurus header css formatting
    <>
      <Heading as="h3">Obtain your Entitlement key</Heading>

      <p>
        Navigate to the{" "}
        <a href={entitlementKeyUrl} target="_blank" rel="noopener noreferrer">
          IBM Container Software Library
        </a>{" "}
        to obtain your <strong>entitlement key</strong>. The entitlement key is assigned to your IBM ID which will grant
        you access to the IBM Container Registry.
      </p>

      <p>
        You can check your entitlement key by clicking <strong>View
        Library</strong>. Take note of this key as you will need it later in the Lab.
      </p>

      <img src={entitlementCheckImage} alt="Entitlement check" />

    </>
  );
}
