import HomeLanding from "./components/HomeLanding"
import WhatWeDo from "./components/WhatWeDo"
import Advantage from "./components/Advantage"

export default function Home() {
  return (
    <div className="">
      <HomeLanding />
      <WhatWeDo />
      <h1 className="font-semibold lg:text-[2.75rem] text-[2.3rem] md:px-20 px-5 mb-10">
        The ACUTEX Advantage
      </h1>
      <Advantage />
    </div>
  )
}
