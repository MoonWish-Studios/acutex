import HomeLanding from "./components/HomeLanding"
import WhatWeDo from "./components/WhatWeDo"
import Advantage from "./components/Advantage"
import ImageText from "./components/ImageText"
import Action from "./components/Action"

export default function Home() {
  return (
    <div className="">
      <HomeLanding />
      <WhatWeDo />
      <h1 className="font-semibold text-center md:text-start lg:text-[2.75rem] text-[1.8rem] md:text-[2.3rem] md:px-20 px-5 mb-12">
        The ACUTEX Advantage
      </h1>
      <Advantage />
      <h1 className="font-semibold text-center md:text-start lg:text-[2.75rem] text-[2.3rem] md:px-20 px-5 mb-12">
        A Little About Us
      </h1>
      <ImageText
        reverse={true}
        title={"Our Vision"}
        buttonText={"Learn More"}
        img={"/assets/sticky4.png"}
      >
        <b className="font-semibold">ACUTEX</b> seeks to establish itself as a
        market leader in providing the{" "}
        <b className="font-semibold">Most Outstanding</b> customer service
        possible. Our goal is to establish a{" "}
        <b className="font-semibold">long-term</b> relationship with raving
        customers
      </ImageText>
      <ImageText
        reverse={false}
        buttonText={"Contact Us"}
        title={"Providing Value"}
        img={"/assets/sticky2.png"}
      >
        Your needs are our top <b className="font-semibold">priority</b> .  You
        will never get a high-pressured sales pitch.  You will never
        disappointed <b className="font-semibold">ACUTEX</b> ....We Guarantee
        it!
      </ImageText>
      <Action />
    </div>
  )
}
