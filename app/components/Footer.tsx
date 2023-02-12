import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-blue1 bg-blue2 text-gray3">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:justify-around md:flex-row md:space-y-0">
        {/* Logo and Social */}
        <div className="flex flex-col-reverse items-center space-y-12 md:mr-10 lg:mr-52 md:flex-col md:space-y-4 md:items-start">
          <div>
            <Link href="/">
              <Image
                className=""
                src="/assets/logo.png"
                width={225}
                height={200}
                alt={""}
              />
            </Link>
          </div>
          <div className="flex justify-center pb-3 space-x-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/farwestuniforms/"
            ></Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.yelp.com/biz/farwest-uniforms-and-embroidery-garden-grove-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
            ></Link>
          </div>
        </div>
        {/* Contact List */}
        <div className="flex flex-col justify-start text-sm sm:flex-row gap-y-10 sm:justify-evenly sm:space-x-20 md:space-x-40 ">
          <div className="flex flex-col md:w-2/5 w-4/5 space-y-4">
            <p className="font-semibold">INFO</p>
            <div className="flex flex-row items-center flex-shrink-0 space-x-2 w-fit text-base tracking-wide  text-black1">
              <Image
                className=""
                src={"/assets/icons/mail.svg"}
                alt={""}
                height={10}
                width={20}
              />
              <p>contact@acutexusa.com</p>
            </div>
            <div className="flex flex-row items-center flex-shrink-0 space-x-2 w-fit text-base tracking-wide  text-black1">
              <Image
                src={"/assets/icons/phone.svg"}
                alt={""}
                height={18}
                width={20}
              />
              <p>(310) 982-2677</p>
            </div>
            <div className="flex items-start space-x-2 w-fit text-base tracking-wide  text-black1">
              <Image
                src={"/assets/icons/home.svg"}
                alt={""}
                height={20}
                width={20}
              />
              <div className="w-full md:w-11/12">
                7050 Village Drive, Unit I, Buena Park, CA 90621, USA
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className="font-semibold">COMPANY</p>
            <Link
              className="hover:text-gray3 text-black1 text-base tracking-wide"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-gray3 text-black1 text-base tracking-wide"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-gray3 text-black1 text-base tracking-wide"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="hover:text-gray3 text-black1 text-base tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-slate-500/50  w-full flex items-center justify-center text-gray3 text-sm pt-5 pb-5">
        {new Date().getFullYear()} UFG, Inc. dba ACUTEX – ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
