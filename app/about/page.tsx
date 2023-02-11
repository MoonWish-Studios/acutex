import React from "react"
import Button from "../components/Button"
import StickyScroll from "../components/StickyScroll"

export default function About() {
  return (
    <div className="mb-10">
      <div className="h-screen mb-2 flex flex-col items-center justify-center gap-10">
        <h1
          className=" md:text-[3.5rem] text-[2.35rem] text-center md:w-8/12 w-10/12 font-medium
       md:tracking-wider tracking-wide md:leading-[4.5rem] leading-[3.25rem]"
        >
          About Us
        </h1>
        <div className="buttonSection flex flex-row gap-5">
          <Button reverse={true} className="  text-black1 px-[50px]">
            Products
          </Button>
        </div>
      </div>
      <StickyScroll />
    </div>
  )
}
