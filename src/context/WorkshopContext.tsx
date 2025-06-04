import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"

const WorkshopContext = createContext<boolean>(false)

export function useWorkshop(): boolean {
  return useContext(WorkshopContext)
}

interface WorkshopProviderProps {
  children: ReactNode
}

export function WorkshopProvider({children}: WorkshopProviderProps) {
  const [isWorkshop, setIsWorkshop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const flag = params.get("workshop")
      if (flag === "enabled") {
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
    <WorkshopContext.Provider value={isWorkshop}>
      {children}
    </WorkshopContext.Provider>
  )
}
