import React, {ReactNode} from "react"
import {WorkshopProvider} from "@site/src/context/WorkshopContext"

export default function Root({children}: {children: ReactNode}) {
  return <WorkshopProvider>{children}</WorkshopProvider>
}
