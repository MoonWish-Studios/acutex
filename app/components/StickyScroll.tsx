"use client"
import React, { useState, useEffect, useRef } from "react"
import Button from "./Button"
import Image from "next/image"

export default function StickyScroll() {
  const myRef = React.useRef<any>(null)

  const [textVisible, setTextVisibile] = useState<any>()
  console.log("element visible", textVisible)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setTextVisibile(entry.isIntersecting)
      console.log("entry", entry)
    })
    observer.observe(myRef.current)
  }, [])

  const myRef2 = React.useRef<any>(null)

  const [text2Visible, setText2Visibile] = useState<any>()
  console.log("element visible", textVisible)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setText2Visibile(entry.isIntersecting)
      console.log("entry", entry)
    })
    observer.observe(myRef2.current)
  }, [])

  let currImage = ""
  if (textVisible) {
    currImage = "/sticky1.png"
  } else if (text2Visible) {
    currImage = "/sticky2.png"
  } else {
    currImage = "/sticky3.png"
  }

  return (
    <div className="md:grid md:grid-cols-1 lg:mx-20 md:mx-12 mx-6 xl:max-w-screen-2xl   mb-64">
      <section className="flex flex-col gap-10 md:grid md:grid-cols-2  md:grid-rows-5 md:h-[145rem] items-start  justify-center">
        <div
          className={`md:block hidden self-start sticky lg:top-56 md:top-64 `}
        >
          <Image
            className="rounded-xl"
            src={`/assets${currImage}`}
            alt={""}
            height={450}
            width={600}
          />
        </div>

        <div
          ref={myRef}
          className={`textSection row-span-2 pt-10 w-12/12 lg:w-12/12 lg:pl-8 md:pl-6  tracking-wider`}
        >
          <div
            className={`flex flex-col  items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Poop1
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-[1.6rem] lg:leading-9 font-light
            tracking-wide md:text-[1rem] text-black1 "
            >
              ACUTEX seeks to establish itself as a market leader in providing
              the Most Outstanding customer service possible. Our goal is to
              establish a long-term relationship with raving fans of our service
              and commitment. Meeting and satisfying the needs of our valued
              customers is paramount.
            </p>
            <Button className="mt-4">Get In Touch</Button>
          </div>
        </div>
        <Image
          className="md:hidden block"
          src={`/assets/building.png`}
          alt={""}
          height={450}
          width={600}
        />
        <div className="placeholder w-full">
          <></>
        </div>

        <div
          ref={myRef2}
          className={`textSection row-span-2 col-start-2 w-12/12 lg:w-12/12 lg:pl-8 md:pl-6 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Poop2
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-[1.6rem] lg:leading-9 font-light
            tracking-wide md:text-[1rem] text-black1 "
            >
              ACUTEX seeks to establish itself as a market leader in providing
              the Most Outstanding customer service possible. Our goal is to
              establish a long-term relationship with raving fans of our service
              and commitment. Meeting and satisfying the needs of our valued
              customers is paramount.
            </p>
            <Button className="mt-4">Get In Touch</Button>
          </div>
        </div>
        <Image
          className="md:hidden block"
          src={`/assets/building.png`}
          alt={""}
          height={450}
          width={600}
        />
        <div className="placeholder w-full">
          <></>
        </div>

        <div
          className={`textSection pt-20 col-start-2 w-12/12 lg:w-12/12 lg:pl-8 md:pl-6 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4  text-3xl font-medium lg:text-3xl text-highlight">
              Poop3
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-[1.6rem] lg:leading-9 font-light
            tracking-wide md:text-[1rem] text-black1 "
            >
              ACUTEX seeks to establish itself as a market leader in providing
              the Most Outstanding customer service possible. Our goal is to
              establish a long-term relationship with raving fans of our service
              and commitment. Meeting and satisfying the needs of our valued
              customers is paramount.
            </p>
            <Button className="mt-4">Get In Touch</Button>
          </div>
        </div>
        <Image
          className="md:hidden block"
          src={`/assets/building.png`}
          alt={""}
          height={450}
          width={600}
        />
      </section>
    </div>
  )
}
