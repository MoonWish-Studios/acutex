import React from "react"
import Button from "./Button"

export default function HomeLanding() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 ">
      <h1
        className="md:text-[4rem] text-[2.35rem] text-center md:w-8/12 w-10/12 font-semibold text-neutral-900
       md:tracking-wider tracking-wide md:leading-[4.5rem] leading-[3.25rem]"
      >
        Made in USA knitted fabrics for brands and manufacturers
      </h1>
      <div className="buttonSection flex flex-row gap-5">
        <Button>Get In Touch </Button>
        <Button
          reverse={true}
          className="outline-white2  text-black1 px-[50px]"
        >
          Products
        </Button>
      </div>
    </div>
  )
}
