import Heading from "@theme/Heading"

export default function CreateIbmId({
  ibmIdSignupUrl = "https://www.ibm.com/account/reg/us-en/signup?formid=urx-19776",
}: {
  ibmIdSignupUrl?: string
}) {
  return (
    // Dont wrap in a div or it will break the docusaurus header css formatting
    <>
      <Heading as="h3">Create an IBM ID</Heading>

      <p>
        You will need an IBM ID to request and access your lab environment in IBM TechZone. You can{" "} <a href={ibmIdSignupUrl} target="_blank" rel="noopener noreferrer">create an IBM ID here</a>
        .
      </p>
    </>
  )
}
