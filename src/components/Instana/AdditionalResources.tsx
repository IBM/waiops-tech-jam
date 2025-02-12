import React from "react"

const communityPages =
  "https://community.ibm.com/community/user/blogs/ciaran-darcy/2024/05/23/instana-essentials-series?CommunityKey=8d661410-d1fb-4067-ab9a-019475fc541e"

const accessEnablementDeck =
  "https://ibm.seismic.com/Link/Content/DCQfMjDgqWT2B87FWXPhGXQbJGDP"

/**
 * Reusable license information for Instana labs.
 */
export default function AdditionalResources() {
  return (
    <div>
      <h2>Additional Enablement Resources</h2>
      <ul>
        <li>
          <a
            href={accessEnablementDeck}
            target="_blank"
            rel="noopener noreferrer"
          >
            Partner access and enablement presentation
          </a>{" "}
          containing:
          <ul>
            <li>Demo and Sandbox environments.</li>
            <li>
              Instana 8-part technical essentials series:
              <ul>
                <li>
                  A good set of prerequisite overviews for Jam-in-a-Box hands-on
                  labs.
                </li>
              </ul>
            </li>
            <li>License keys for these labs and self-enablement.</li>
            <li>And more...</li>
          </ul>
        </li>
        <li>
          <a href={communityPages} target="_blank" rel="noopener noreferrer">
            Community blogs and forums.
          </a>
        </li>
      </ul>
    </div>
  )
}
