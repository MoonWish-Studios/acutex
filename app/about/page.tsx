import React from "react"
import Button, { WhiteButton } from "../components/Button"
import StickyScroll from "../components/StickyScroll"
import Action from "../components/Action"
import QuoteText from "../components/QuoteText"
import { Landing } from "../contact/page"

export default function About() {
  return (
    <div className="mb-10">
      <Landing
        title="About Us"
        background="/assets/gradient/lemon-gradient.png"
      >
        <WhiteButton href="/products">Products</WhiteButton>
      </Landing>

      <div className="w-full mt-40 flex justify-center">
        <StickyScroll />
      </div>
      <QuoteText />
      <Action />
    </div>
  )
}
