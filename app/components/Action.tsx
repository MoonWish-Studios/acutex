import Button from "./Button"
import React from "react"

export default function Action({}: {}) {
  return (
    <div>
      <div
        className="flex rounded-lg text-white1 flex-col bg-cloth-bg
       mx-20 pl-16 py-32 my-48"
      >
        <h1 className="lg:text-[2.75rem] text-[2.3rem] font-semibold tracking-wider">
          Ready To Work With Us?
        </h1>
        <div className="text-[1.09rem] w-4/12 leading-[1.65] mb-5">
          Lorem ipsum dolor sit amet consectetur. Orci faucibus faucibus blandit
          at ut vivamus eget. Nunc ipsum bibendum nisl id at. Sed fermentum
          montes{" "}
        </div>
        <Button reverse={true}>View More</Button>
      </div>
    </div>
  )
}
