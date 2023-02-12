import Link from "next/link"
import React from "react"
import Image from "next/image"

export default function Button({
  href,
  children,
  className,
  reverse,
}: {
  href?: string
  children: React.ReactNode
  className?: string
  reverse?: boolean
}) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block text-center max-w-fit ${
        reverse
          ? "text-black1 bg-white1 outline outline-[3px] outline-white2/75 font-normal"
          : "bg-black1 text-white1 font-normal"
      }

  
    md:text-[1rem] text-[0.85rem] transition ease-in-out duration-100
    outline-4 outline flex flex-row items-center outline-[#00000005]
     box-content hover:scale-105 rounded-[0.23rem] px-[45px] my-0 py-[11px] ${className} `}
    >
      {children}{" "}
      {/* <span className="pl-[0.5rem]">
        <Image src={"/assets/arrow.svg"} alt={""} height={23} width={22} />
      </span> */}
    </Link>
  )
}

export function WhiteButton({
  href,
  children,
  className,
  white,
}: {
  href?: string
  children: React.ReactNode
  className?: string
  white?: boolean
}) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block text-center max-w-fit font-medium outline-4 outline outline-[#00000005]       md:text-[1rem] text-[0.85rem] transition ease-in-out duration-100 bg-white
      box-border hover:scale-105 rounded-[0.23rem] px-16 my-0 py-4 ${className} `}
    >
      {children}
    </Link>
  )
}
