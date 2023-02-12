import React from "react"
import Button from "../components/Button"
import { WhiteButton } from "../components/Button"
import Image from "next/image"
import { Landing } from "../components/ContactForm"
import { BigBullet, Bold } from "../components/list"

export default function Payment() {
  return (
    <div>
      <Landing
        title="Process Deposits & Pay Invoices With Plastiq"
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
      <div className="textSection mb-32 mt-32 flex flex-col lg:flex-row mx-10  md:mx-32 gap-24 items-start justify-between">
        <div className="leftSide flex  items-start flex-col w-12/12 lg:w-6/12">
          <h1 className="text-5xl mb-6 font-[400]">Plastiq Pay</h1>
          <div
            className="text-3xl md:text-[2.25rem] tracking-normal md:tracking-wide
           leading-[2.9rem] md:leading-[3.1rem] font-light"
          >
            We partnered with Plastiq to securely handle payments for businesses
          </div>
          <div className="checkboxes flex flex-col mt-6 gap-5">
            <BigBullet>Higher Transaction Amounts</BigBullet>
            <BigBullet>No Back & Forth Authorization Forms</BigBullet>
            <BigBullet>No Account Setup Needed</BigBullet>
          </div>
        </div>
        <div className="rightSection w-12/12 lg:w-1/2">
          <h1 className="text-[1.5rem] tracking-wider font-semibold mb-5">
            Simple Payment Process
          </h1>
          <div className="1 mb-8">
            <div className="listTitle flex flex-row mb-5 ">
              <Image
                src={"/assets/icons/1.svg"}
                alt={""}
                height={25}
                width={25}
                className="mr-5"
              />
              <h1 className="text-[1.2rem]  font-medium tracking-widers">
                Click Button Below To Pay
              </h1>
            </div>
            <Button
              href="https://request.plastiq.com/pay-acutexusa"
              className="ml-12"
            >
              Make Payment
            </Button>
          </div>
          <div className="2 mb-8">
            <div className="listTitle flex flex-row mb-3 ">
              <Image
                src={"/assets/icons/2.svg"}
                alt={""}
                height={25}
                width={25}
                className="mr-5"
              />
              <h1 className="text-[1.2rem] font-medium tracking-widers">
                Enter Your Details
              </h1>
            </div>
            <p className="ml-12">
              Enter your info and choose your method of payment (credit card,
              debit card, or ACH)
            </p>
            <p className="ml-12">
              <Bold>
                AMEX customers, please contact us for special link and
                instructions
              </Bold>
            </p>
          </div>
          <div className="3">
            <div className="listTitle flex flex-row mb-3 ">
              <Image
                src={"/assets/icons/3.svg"}
                alt={""}
                height={25}
                width={25}
                className="mr-5"
              />
              <h1 className="text-[1.2rem] font-medium tracking-widers">
                Pay And Finish!
              </h1>
            </div>
            <p className="mb-2 font-semibold ml-12">
              Up to 2.9% Transaction Fee May Apply. Free with ACH
            </p>
            <p className="ml-12">
              That’s it. You’ll receive a confirmation via email. Thank you for
              partnering with ACUTEX!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
