import React from "react"
import { Landing } from "../contact/page"
import Button from "../components/Button"
import { WhiteButton } from "../components/Button"
import Image from "next/image"
import { BigBullet } from "../products/page"

export default function Payment() {
  return (
    <div>
      <Landing
        title="How Can We Serve You?"
        background="/assets/gradient/lemon-gradient.png"
      >
        <WhiteButton href="https://request.plastiq.com/pay-acutexusa">
          <Image
            src="/assets/plastiq.svg"
            alt="Plastiq Logo"
            width="60"
            height="25"
          />
        </WhiteButton>
      </Landing>
      <div className="textSection mt-20 flex flex-row w-full mx-20 gap-24 items-center justify-between">
        <div className="leftSide flex  items-start flex-col w-6/12">
          <h1 className="text-5xl mb-6 font-[400]">Plastiq Pay</h1>
          <div className="text-[2.25rem] tracking-wide leading-[3.1rem] font-light">
            We partnered with Plastiq to securely handle payments for businesses
          </div>
          <div className="checkboxes">
            <BigBullet>Higher Transaction Amounts</BigBullet>
          </div>
        </div>
        <div className="rightSection w-1/2">
          <h1>Simple Payment Process</h1>
        </div>
      </div>
    </div>
  )
}
