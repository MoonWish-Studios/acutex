"use client"
import React, { FormEvent } from "react"
import Image from "next/image"
import { nanoid } from "nanoid"
import { WhiteButton } from "../components/Button"

import { ContactForm, Landing, TextWithIcon } from "../components/ContactForm"
import { Bold } from "../components/list"
export default function Page() {
  return (
    <div className="w-full h-fit">
      <Landing
        title="How Can We Serve You?"
        background="/assets/gradient/lemon-gradient.png"
      >
        <WhiteButton href="tel:310-982-2677">Call Us</WhiteButton>
        {/* <WhiteButton href="https://request.plastiq.com/pay-acutexusa">
          <Image
            src="/assets/plastiq.svg"
            alt="Plastiq Logo"
            width="60"
            height="25"
          />
        </WhiteButton> */}
      </Landing>
      <ContactForm />

      <div className="flex flex-col items-center md:flex-row gap-32 justify-center bg-neutral-100 py-20">
        <div className="w-72 space-y-4 ">
          <Image
            src="/assets/logo.png"
            width="250"
            height="100"
            alt="acutex logo"
            className="mb-4"
          />
          <p className="font-medium text-lg">
            <Bold>Monday-Friday</Bold> 9am - 5pm
          </p>
          <p className="font-medium text-lg">
            <Bold>Saturday</Bold> By Appointment
          </p>
          <p className="font-medium text-lg">
            <Bold>Sunday</Bold> Closed
          </p>
        </div>
        <div className="ml-5 md:ml-0 w-72">
          <h1 className="text-3xl font-medium text-neutral-800">
            Our Information
          </h1>

          <TextWithIcon src="/assets/icons/phone.svg" alt="Phone Icon">
            (310) 982-2677
          </TextWithIcon>
          <TextWithIcon
            src="/assets/icons/home.svg"
            alt="Phone Icon"
            className=""
          >
            7050 Village Drive, Unit I, Buena Park, CA 90621, USA
          </TextWithIcon>
        </div>
      </div>

      <div></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7887734590117!2d-118.01097688449941!3d33.86933413479353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cac7404330bd%3A0xdf24354b53b945b9!2sUFG%2C%20Inc.%20dba%20ACUTEX!5e0!3m2!1sen!2sus!4v1676181860954!5m2!1sen!2sus"
        className="w-full h-[75vh]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
