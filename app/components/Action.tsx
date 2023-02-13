import Button from "./Button"
import React from "react"

export default function Action({}: {}) {
  return (
    <div className="">
      <div
        className="flex relative rounded-lg text-white1 flex-col bg-cover gap-2 bg-[100%] bg-cloth-bg
       md:mx-20 mx-5 pl-0 md:pl-16 h-[30rem] my-48 justify-center md:items-start items-center"
      >
        <div className="w-full h-full absolute z-[2] bg-black opacity-30 md:opacity-[0] md:transform md:-translate-x-16"></div>

        <h1
          className="relative lg:text-[2.75rem] z-[50] mb-2 md:mb-0 md:text-left text-center
        text-[1.9rem] md:text-[2.3rem] font-semibold tracking-wider"
        >
          Ready To Work With Us?
        </h1>
        <div
          className="relative z-[50] text-[1.09rem] w-10/12 md:font-normal font-[420] text-center md:text-left
        leading-[1.5] md:w-7/12 lg:w-6/12 md:leading-[1.65] mb-5"
        >
          Whether you have a general textile question, want to develop a custom
          fabric, place a special order or want to see what we have in our
          current inventory we will be more than happy to be of assistance!
        </div>
        <Button className="relative z-[50]" href={"/contact"} reverse={true}>
          Contact Us
        </Button>
      </div>
    </div>
  )
}
