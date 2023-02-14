"use client"
import { redirect } from "next/navigation"
import React, { useEffect } from "react"
import { Bold } from "../components/list"

export default function Page() {
  useEffect(() => {
    redirect("/")
  }, [])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Bold>Not Found&nbsp;</Bold>| Redirecting To Home Page
    </div>
  )
}
