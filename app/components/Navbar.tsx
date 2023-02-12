"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import NavLink from "./NavLink"

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const textColors = "text-black1 tracking-wide"
  const isHomePage = pathname === "/"
  // set menu state
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(open)
  })
  return (
    <div className={`absolute top-0 lg:mx-auto  w-full z-[999]  ${className} `}>
      <div className="flex items-center justify-between py-5 px-8 ">
        {/* Logo */}
        <Link className="my-2 ml-5" href="/">
          <Image
            src={"/assets/logo.png"}
            alt="company logo"
            width="200"
            height="125"
          />
        </Link>
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open && "bg-none"
          }  rounded-lg mx-3 p-2 transition-colors duration-200 md:hidden hover:cursor-pointer w-10 h-10`}
        >
          {open ? (
            <Image
              src="/assets/icons/menu-close.svg"
              alt="Menu Icon"
              width="20"
              height="20"
              className="py-0.5 mx-auto"
            />
          ) : (
            <Image
              src="/assets/icons/menu.svg"
              alt="Menu Icon"
              width="24"
              height="24"
            />
          )}
        </div>

        {/* Mobile Navbar */}
        <nav
          onClick={() => setOpen(!open)}
          className={`${
            !open && "hidden"
          } absolute left-1/2 top-40 transform -translate-x-1/2  -translate-y-1/2  flex flex-col gap-2 z-50 bg-white1 p-4 w-[90%] rounded-lg`}
        >
          <NavLink href="/about" text="About" currentPath={pathname} />
          <NavLink href="/products" text="Products" currentPath={pathname} />
          <NavLink href="/payment" text="Payment" currentPath={pathname} />
          <NavLink href="/contact" text="Contact" currentPath={pathname} />
        </nav>
        {/* Desktop Navbar */}
        <nav
          className={`items-center hidden md:flex md:flex-row md:gap-3 md:px-4 `}
        >
          <NavLink
            href="/about"
            text="About"
            currentPath={pathname}
            className={textColors}
          />
          <NavLink
            href="/products"
            text="Products"
            currentPath={pathname}
            className={textColors}
          />
          <NavLink
            href="/payment"
            text="Payment"
            currentPath={pathname}
            className={textColors}
          />
          <NavLink
            href="/contact"
            text="Contact"
            currentPath={pathname}
            className={textColors}
          />
        </nav>
      </div>
    </div>
  )
}
