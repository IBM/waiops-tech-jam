import React from "react"

const licenseInfoLink =
  "https://ibm.seismic.com/Link/Content/DCQfMjDgqWT2B87FWXPhGXQbJGDP"

/**
 * Reusable license information for Instana labs.
 */
export default function InstanaLicenseInfo({
  requiredWhen = "when requesting the lab environment",
}) {
  return (
    <div>
      <strong>Instana license keys (Required {requiredWhen}):</strong>
      <ul>
        <li>Agent / Download Key</li>
        <li>Sales Key</li>
      </ul>
      <br />
      <blockquote>
        <p>
          IBMers and IBM Business Partners can get license keys from the{" "}
          <a href={licenseInfoLink} target="_blank" rel="noopener noreferrer">
            Partner Access to Instana
          </a>{" "}
          presentation.
          <br />
          <strong>
            Note: Keys are rotated every 6 months so please check at time of
            requesting lab.
          </strong>
        </p>
      </blockquote>
    </div>
  )
}
