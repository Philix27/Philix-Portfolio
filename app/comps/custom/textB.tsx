"use client"

import React, { ReactNode } from "react"
import { cn } from "@/lib"

type IVariants = "p1" | "p2" | "p3" | "p4" | "p5" | "p6"

const cNames: Record<IVariants, string> = {
  p1: "text-3xl font-extrabold leading-tight text-muted-foreground",
  p2: "text-2xl font-bold leading-tight text-muted-foreground",
  p3: "text-lg font-bold leading-tight  text-muted-foreground",
  p4: "text-md font-medium leading-tight text-muted-foreground",
  p5: "text-sm font-regular leading-tight text-muted-foreground",
  p6: "text-xs font-light leading-tight text-muted-foreground",
}

export function TextP(props: {
  children: ReactNode
  v?: IVariants
  className?: string
}) {
  return (
    <p className={cn(cNames[props.v || "p5"], props.className)}>
      {props.children}
    </p>
  )
}
