import React, {ReactNode} from "react"
import {useWorkshop} from "@site/src/context/WorkshopContext"

interface WorkshopContentProps {
  children: ReactNode
}

export default function AdHocSetup({children}: WorkshopContentProps) {
  const isWorkshop = useWorkshop()
  return isWorkshop ? <>{children}</> : null
}
