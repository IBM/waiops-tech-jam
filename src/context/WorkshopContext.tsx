import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  use
} from "react"

const WorkshopContext = createContext<boolean>(false)

function isWorkshopEnabled(value: string | null): boolean {
  if (!value) return false
  const lowerValue = value.toLowerCase()
  return ["enabled", "true", "1", "yes", "on"].includes(lowerValue)
}

export function WorkshopProvider({children}: {
  children: ReactNode
}) {
  const [isWorkshop, setIsWorkshop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const flag = params.get("workshop")

      if (isWorkshopEnabled(flag)) {
        sessionStorage.setItem("workshop", "enabled")
        setIsWorkshop(true)
      } else if (sessionStorage.getItem("workshop") === "enabled") {
        setIsWorkshop(true)
      } else {
        setIsWorkshop(false)
      }
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
