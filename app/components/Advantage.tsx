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
    <div className="flex flex-col w-full justify-center items-center md:px-20 px-5 mb-32">
      <div
        className="flex flex-col justify-center items-center content bg-yellow-gradient bg-cover w-full
      text-center h-[65vh] rounded-md mb-8 md:gap-5 gap-2"
      >
        <div className="ourMission font-semibold text-gray1">
          {contentObj.title}
        </div>
        <h1
          className="md:text-[2.5rem] text-[1.8rem] tracking-wider leading-[2.2rem] md:leading-[2.6rem]
         font-[450] w-10/12 md:w-7/12 mb-2"
        >
          {contentObj.secTitle}
        </h1>
        <div className="w-10/12 md:w-6/12 text-lg leading-[1.8rem] tracking-wider mb-3">
          {contentObj.paragraph}
        </div>
        <Button
          href={"/about"}
          className="border-white1 text-sm py-[13px] px-[48px] "
          reverse={true}
        >
          Learn More
        </Button>
      </div>

      <div className="navigation flex flex-row gap-6 text-base md:text-lg ">
        <Link
          onClick={() => setCategory("Mission")}
          href={"/"}
          className={`text-gray1 ${
            category == "Mission" ? "text-black font-semibold" : ""
          }`}
        >
          Mission
        </Link>
        <Link
          onClick={() => setCategory("Experience")}
          href={"/"}
          className={`text-gray1 ${
            category == "Experience" ? "text-black font-semibold" : ""
          }`}
        >
          Experience
        </Link>
        <Link
          onClick={() => setCategory("Efficient")}
          href={"/"}
          className={`text-gray1 ${
            category == "Efficient" ? "text-black font-semibold" : ""
          }`}
        >
          Efficient
        </Link>
        <Link
          onClick={() => setCategory("Future")}
          href={"/"}
          className={`text-gray1 ${
            category == "Future" ? "text-black font-semibold" : ""
          }`}
        >
          Future
        </Link>
        {/* {categories.map((mapCategory) => (
          <Link
            onClick={() => setCategory(mapCategory)}
            href={"/"}
            className={"text-gray1"}
          >
            {mapCategory}
          </Link>
        ))} */}
      </div>
    </div>
  )
}
