import { getCookie, setCookie } from "@site/src/lib/utils"
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  use
} from "react"

const DEFAULT_WORKSHOP_COOKIE_EXPIRATION_DAYS = 3

const WorkshopContext = createContext<boolean>(false)

function isWorkshopEnabled(value: string | null): boolean {
  if (!value) return false
  const lowerValue = value.toLowerCase()

  // Check for any truthy value
  if (["enabled", "true", "1", "yes", "on"].includes(lowerValue)) {
    return true
  }

  // Or a number > 0
  const numValue = parseFloat(value)
  return !isNaN(numValue) && numValue > 0
}


export function WorkshopProvider({children}: {
  children: ReactNode
}) {
  const [isWorkshop, setIsWorkshop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const workshopParamValue = params.get("workshop")

      if (isWorkshopEnabled(workshopParamValue)) {
        const workshopDays = parseFloat(workshopParamValue!)
        // Check if the workshop parameter is a number, if it is a number > 0 use it for custom expiration days
        // of the cookie, otherwise use the default value.
        const cookieExpirationDays = !isNaN(workshopDays) && workshopDays > 0
          ? workshopDays
          : DEFAULT_WORKSHOP_COOKIE_EXPIRATION_DAYS

        setCookie("workshop", "enabled", cookieExpirationDays)
        setIsWorkshop(true)
      } else if (getCookie("workshop") === "enabled") {
        setIsWorkshop(true)
      } else {
        setIsWorkshop(false)
      }

      // Check cookie on window focus to re-check if the workshop is still enabled (or the cookie has expired).
      // Required in case a user doesn't refresh the page
      const handleFocus = () => {
        setIsWorkshop(getCookie("workshop") === "enabled")
      }

      window.addEventListener('focus', handleFocus)
      return () => window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return (
    <WorkshopContext value={isWorkshop}>
      {children}
    </WorkshopContext>
  )
}

export function useWorkshop(): boolean {
  return use(WorkshopContext)
}
