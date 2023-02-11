import Button from "./Button"
import React from "react"

export default function Action({}: {}) {
  return (
    <div>
      <div
        className="flex rounded-lg text-white1 flex-col bg-cover gap-2 bg-[100%] bg-cloth-bg
       md:mx-20 mx-5 pl-0 md:pl-16 h-[30rem] my-48 justify-center md:items-start items-center"
      >
        <h1
          className="lg:text-[2.75rem] mb-2 md:mb-0 md:text-left text-center
        text-[1.9rem] md:text-[2.3rem] font-semibold tracking-wider"
        >
          Ready To Work With Us?
        </h1>
        <div
          className="text-[1.09rem] w-10/12 text-center md:text-left
        leading-[1.5] md:w-7/12 lg:w-5/12 md:leading-[1.65] mb-5"
        >
          Lorem ipsum dolor sit amet consectetur. Orci faucibus faucibus blandit
          at ut vivamus eget. Nunc ipsum bibendum nisl id at. Sed fermentum
          montes{" "}
        </div>
        <Button reverse={true}>View More</Button>
      </div>
    </div>
  )
}
