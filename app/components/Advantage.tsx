"use client"
import React, { useState } from "react"
import Link from "next/link"
import Button from "./Button"
import determineContent from "./AdvantageContent"

export default function Advantage() {
  const categories = ["Mission", "Experience", "Efficient", "Future"]
  const [category, setCategory] = useState("Mission")

  const contentObj = determineContent(category)

  return (
    <div className="flex flex-col w-full justify-center items-center md:px-20 px-5 mb-20">
      <div
        className="flex flex-col justify-center items-center content bg-amber-200 w-full
      text-center h-[65vh] rounded-sm mb-8 gap-5"
      >
        <div className="ourMission font-semibold text-gray1">
          {contentObj.title}
        </div>
        <h1 className="text-[2.5rem] tracking-wider leading-[2.6rem] font-[450] w-6/12 mb-2">
          {contentObj.secTitle}
        </h1>
        <div className="w-6/12 text-lg tracking-wider mb-3">
          {contentObj.paragraph}
        </div>
        <Button
          className="border-white1 text-sm py-[13px] px-[48px] "
          reverse={true}
        >
          Learn More
        </Button>
      </div>
      <div className="navigation flex flex-row gap-6 text-lg text-gray1">
        {categories.map((category) => (
          <Link onClick={() => setCategory(category)} href={"/"}>
            {category}
          </Link>
        ))}
        {/* <Link href={"/"}>Mission</Link>
        <Link href={"/"}>Experience</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Capabilities</Link> */}
      </div>
    </div>
  )
}
