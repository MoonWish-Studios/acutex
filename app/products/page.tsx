import React from "react"
import { Landing } from "../contact/page"
import { WhiteButton } from "../components/Button"
import Image from "next/image"
import { nanoid } from "nanoid"

interface CardDetailsParams {
  title: string
  heading: string
  bullets: string[]
}

const exclusiveProducts = [
  {
    title: "Mélanges Cotton",
    heading: "100% Cotton Dyeable Heather PFD Fabric",
    bullet: [
      "Low Fabric Order Quantity",
      "Reduced excess unwanted inventory",
      "Eco-friendly dye process for custom colors",
      "Complete garment dyeing instructions",
      "Custom development fabric options",
    ],
  },
  {
    title: "Solux Cotton",
    heading: "Super Premium 100% Cotton Fabric",
    bullet: [
      "Luxuriously soft, fine, smooth, and even",
      "Higher sheen",
      "Durable and low pill",
      "PFD and custom pieced dye options",
      "Custom development fabric option",
    ],
  },
]

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <strong
      className={`text-transparent font-bold bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 ${className}`}
    >
      {children}
    </strong>
  )
}

export default function Page() {
  return (
    <div>
      {/* Landing Page */}
      <div className="relative h-screen flex flex-col items-center justify-center gap-10 ">
        {/* <Image src="" className="-z-50" fill alt="Background Of Landing Page" /> */}
        <h1
          className="md:text-[4rem] text-[2.35rem] text-center md:w-8/12 w-10/12 font-bold text-neutral-900
       md:tracking-wider tracking-wide md:leading-[4.5rem] leading-[3.25rem]"
        >
          The <GradientText>premium fabrics</GradientText> you need to serve
          your brand now
        </h1>
        <div className="buttonSection flex flex-row gap-5">
          <WhiteButton href="/contact">Get In Touch</WhiteButton>
        </div>
      </div>

      {/* Quote */}

      <div className="flex justify-center py-40  gap-10 w-full bg-neutral-100">
        <div className="w-3/4">
          <div className=" text-4xl font-medium leading-relaxed">
            We know that trying to find the right fabric to fit your style can
            be a challenging process. That’s why we are willing to collaborate
            on a custom project with you to provide the right solution for your
            needs.
          </div>
          <p className="not-italic font-medium mt-6 text-2xl text-neutral-500">
            Acutex
          </p>
        </div>
      </div>

      <div className="relative flex justify-evenly overflow-hidden py-16 object-left-bottom">
        <Image
          src="/assets/gradient/lemon-gradient.png"
          className="-z-50 scale-[200%]"
          fill
          alt="Background Of Landing Page"
        />
        {exclusiveProducts.map((product) => (
          <CardDetails
            title={product.title}
            key={nanoid()}
            heading={product.heading}
            bullets={product.bullet}
          />
        ))}
      </div>
    </div>
  )
}

function CardDetails({ title, heading, bullets }: CardDetailsParams) {
  return (
    <div className="p-4">
      <div className="font-medium text-sm ml-1 text-neutral-600">Exclusive</div>
      <h1 className="font-semibold text-5xl ">{title}</h1>
      <h3 className="text-3xl font-normal my-4 max-w-md">{heading}</h3>
      <ul className=" max-w-md space-y-1 text-neutral-900 list-inside ">
        {bullets.map((bullet) => (
          <Bullet key={nanoid()}>{bullet}</Bullet>
        ))}
      </ul>
      <WhiteButton href="/contact" className="mt-7 px-28">
        Try It Now
      </WhiteButton>
    </div>
  )
}
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center text-xl font-medium text-neutral-900 ">
      <svg
        className="w-5 h-5 mr-1.5 my-2 text-neutral-400  flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        ></path>
      </svg>
      {children}
    </li>
  )
}
