import Link from "next/link"
import React from "react"

export default function Button({
  href,
  children,
  className,
  reverse,
}: {
  href?: string
  children: React.ReactElement<any> | string
  className?: string
  reverse?: boolean
}) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block text-center max-w-fit ${
        reverse
          ? "text-black1 bg-white1 outline outline-[3px] hover:outline-black1 hover:outline-[2px] outline-white2/75 font-normal"
          : "bg-black1 text-white1 font-normal"
      }
    md:text-[1rem] text-[0.85rem] transition ease-in-out duration-100
      box-content hover:scale-105 rounded-[0.23rem] px-[45px] my-0 py-[11px] ${className} `}
    >
      {children}
    </Link>
  )
}
