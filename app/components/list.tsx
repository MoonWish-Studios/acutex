"use client"
import { nanoid } from "nanoid"
import { WhiteButton } from "./Button"

interface CardDetailsParams {
  title: string
  heading: string
  bullets: string[]
}

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

export function Bold({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <strong className={`font-bold ${className}`}>&nbsp;{children}</strong>
}
export function CardDetails({ title, heading, bullets }: CardDetailsParams) {
  return (
    <div className="px-8 py-4">
      <div className="font-medium text-sm bg-neutral-900  w-fit px-6 py-1 mb-2 rounded-full text-neutral-50">
        Exclusive
      </div>
      <h1 className="font-semibold text-3xl md:text-5xl ">{title}</h1>
      <h3 className="text-xl md:text-3xl font-normal my-1 md:my-4 max-w-md">
        {heading}
      </h3>
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
export function Bullet({
  children,
  className,
  description,
}: {
  children: React.ReactNode
  className?: string
  description?: string
}) {
  return (
    <li className="flex items-baseline  text-xl font-medium text-neutral-900 ">
      <svg
        className={`w-5 h-5 mr-1.5 my-1.5 translate-y-1 text-neutral-600  flex-shrink-0${className}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      {children}
    </li>
  )
}

export function BigBullet({
  children,
  textAsIcon = false,
  text,
  className,
}: {
  children: React.ReactNode
  textAsIcon?: boolean
  text?: string
  className?: string
}) {
  return (
    <li className="bg-grayInput px-4 shadow py-1.5 w-fit rounded-lg flex items-center text-sm md:text-lg font-normal text-neutral-900 ">
      <svg
        className="w-5 h-5 md:w-6 md:h-6 mr-1.5 my-2 text-neutral-300  flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      {children}
    </li>
  )
}
