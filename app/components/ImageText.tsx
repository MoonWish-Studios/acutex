"use client"
import React from "react"
import Image from "next/image"
import Button from "./Button"

export default function ImageText({
  reverse,
  buttonText,
  title,
  children,
  img,
}: {
  reverse: boolean
  buttonText: string
  title: string
  children: any
  img: string
}) {
  let textState = reverse ? "md:flex-row-reverse" : "md:flex-row "
  let imgState = reverse ? "justify-start" : "justify-end"
  let justifyState = reverse ? "justify-end" : "justify-start"
  let alignState = reverse ? "items-center" : "items-center"

  return (
    <div className="flex justify-center w-full mb-16">
      <div
        className={`w-full flex flex-col ${textState} md:container items-center  
        justify-center lg:pr-5 md:pr-5 md:pl-5 lg:pl-5 gap-10 `}
      >
        <div
          className={`textSection w-11/12 lg:w-6/12 ${alignState} tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start 
          ${
            reverse
              ? "ml-0 xl:ml-14 lg:ml-8 xl:w-10/12"
              : "ml-0 lg:ml-12 xl:ml-32"
          }`}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              {title}
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-9 font-light  
            tracking-wide md:text-[1.2rem] text-black1 "
            >
              {children}{" "}
            </p>
            <Button
              href={buttonText == "Learn More" ? "/about" : "/contact"}
              className="mt-4"
            >
              {buttonText}
            </Button>
          </div>
        </div>

        <div className={`w-8/12v  md:w-96  flex ${justifyState}`}>
          <Image
            className={`imageSection rounded-lg ${
              reverse ? "lg:mr-8" : "lg:ml-8"
            } flex items-center   justify-center ${imgState}`}
            src={img}
            width={500}
            height={390}
            alt={""}
          />
        </div>
      </div>
    </div>
  )
}
