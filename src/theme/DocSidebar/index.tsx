import React, {useEffect, useRef} from "react"
import DocSidebar from "@theme-original/DocSidebar"
import type DocSidebarType from "@theme/DocSidebar"
import type {WrapperProps} from "@docusaurus/types"
import useBaseUrl from "@docusaurus/useBaseUrl"

// Support a secret snippets page with 5 clicks in the sidebar.

export default function DocSidebarWrapper(
  props: WrapperProps<typeof DocSidebarType>,
) {
  const clickCountRef = useRef<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const snippetsUrl = useBaseUrl("/snippets")

  useEffect(() => {
    const handleSidebarClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Only count clicks on empty/whitespace
      if (target.tagName !== "A" && target.tagName !== "BUTTON") {
        clickCountRef.current += 1

        if (timerRef.current) {
          clearTimeout(timerRef.current)
        }

        if (clickCountRef.current >= 5) {
          // Open in new tab
          window.open(snippetsUrl, "_blank")
          clickCountRef.current = 0
        } else {
          // Counter resets after 1 second of no clicks
          timerRef.current = setTimeout(() => {
            clickCountRef.current = 0
          }, 1000)
        }
      }
    }

    const sidebar = document.querySelector(".theme-doc-sidebar-container")
    if (sidebar) {
      sidebar.addEventListener("click", handleSidebarClick)
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("click", handleSidebarClick)
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [snippetsUrl])

  return <DocSidebar {...props} />
}
