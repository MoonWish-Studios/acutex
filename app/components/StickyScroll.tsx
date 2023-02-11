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

  return (
    <div className="grid grid-cols-1 mx-20">
      <section className="grid grid-cols-2 h-[90rem] items-start  justify-center">
        <div className={`self-start sticky top-56 `}>
          <Image
            className=""
            src={`/assets/${textVisible ? "building.png" : "swatches.png"}`}
            alt={""}
            height={450}
            width={600}
          />
        </div>

        <div
          ref={myRef}
          className={`textSection w-12/12 lg:w-12/12 lg:pl-8 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Our Vision
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-9 font-light
            tracking-wide md:text-[1.2rem] text-black1 "
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
          className="invisible"
          src={`/assets/swatches.png`}
          alt={""}
          height={450}
          width={600}
        />
        <div
          className={`textSection w-12/12 lg:w-12/12 lg:pl-8 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Our Vision
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-9 font-light
            tracking-wide md:text-[1.2rem] text-black1 "
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
      </section>
      <section className="grid grid-cols-2 h-[68rem] items-start  justify-center">
        <Image
          className="self-start sticky -top-[10rem]"
          src={"/assets/swatches.png"}
          alt={""}
          height={450}
          width={600}
        />

        <div
          className={`textSection w-12/12 lg:w-12/12 lg:pl-8 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Our Vision
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-9 font-light
            tracking-wide md:text-[1.2rem] text-black1 "
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
      </section>
      <section className="grid grid-cols-2 h-[68rem] items-start justify-center">
        <Image
          className=""
          src={"/assets/building.png"}
          alt={""}
          height={450}
          width={600}
        />

        <div
          className={`textSection w-12/12 lg:w-12/12 lg:pl-8 tracking-wider`}
        >
          <div
            className={`flex flex-col items-center text-center md:text-start md:items-start
         `}
          >
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              Our Vision
            </h1>
            <p
              className=" text-[1rem] leading-7 md:leading-9 font-light
            tracking-wide md:text-[1.2rem] text-black1 "
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
      </section>
    </div>
  )
}
