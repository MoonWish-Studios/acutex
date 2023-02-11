import React from "react"
import Button from "./Button"
import Image from "next/image"

export default function WhatWeDo() {
  return (
    <div className="flex flex-col justify-center items-center md:items-start md:space-y-7 md:px-20 px-5 space-y-6 mt-28 mb-64 ">
      <Image
        className="absolute right-0 top-200 -z-[999] w-80 md:w-[30rem]"
        src="/assets/rectangle.png"
        height={450}
        width={450}
        alt={""}
      />
      <h1 className="font-semibold lg:text-[2.75rem] text-[2.3rem]">
        What we do
      </h1>
      <div className="paragraphs text-lg flex items-center text-center md:text-start flex-col md:flex-row gap-6">
        <div
          className="md:w-6/12 w-full pl-2 lg:text-[1.7rem] md:text-[1.4rem] text-[1.3rem] leading-[2rem] md:tracking-wider
        tracking-normal lg:pr-6 md:pr-3 md:leading-[2.45rem]"
        >
          We solve problems that fashion brands or garment manufacturers have
          relating to their fabric needs. We offer high quality, made in USA
          knitted fabrics and ensure customer satisfaction.{" "}
        </div>
        <div
          className="miniParagraphs md:text-[1.1rem] text-[0.9rem] md:leading-8 leading-[1.5rem] flex 
        md:flex-col flex-row md:gap-6 gap-2 md:w-6/12 w-full"
        >
          <div className="p1">
            Acutex exists to find solutions for fabric sourcing. We are proud of
            our made in USA circular knit fabrics and go above and beyond to
            tackle any style, problem or question.{" "}
          </div>
          <div className="p2">
            Our goal is to establish a long-term relationship with raving fans
            of our service and commitment. Meeting and satisfying the needs of
            our valued customers is paramount.
          </div>
        </div>
      </div>
      <Button>Get In Touch</Button>
    </div>
  )
}
