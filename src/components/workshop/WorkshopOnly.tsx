import React, {ReactNode} from "react"
import {useWorkshop} from "@site/src/context/WorkshopContext"

interface WorkshopOnlyProps {
  children: ReactNode
}

/**
 * This component can be used to show workshop specific notes or instructions
 * that will only appear when running in workshop mode.
 *
 * @example
 * ```tsx
 * <WorkshopOnly>
 *   :::note
 *
 *   This note will only appear to students in workshop mode
 *
 *   :::
 * </WorkshopOnly>
 * ```
 */
export default function WorkshopOnly({children}: WorkshopOnlyProps) {
  const isWorkshop = useWorkshop()
  return isWorkshop ? <>{children}</> : null
}
