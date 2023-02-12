import React from "react"
Landing
import { WhiteButton } from "../components/Button"
import Image from "next/image"
import Link from "next/link"
import { nanoid } from "nanoid"
import {
  BigBullet,
  Bold,
  Bullet,
  CardDetails,
  GradientText,
} from "../components/list"
import { Landing } from "../components/ContactForm"

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
      "Special Treatments",
      "Certifications",
      "Value Added Services",
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
      "Special Treatments",
      "Certifications",
      "Value Added Services",
    ],
  },
]
export default function Page() {
  return (
    <div>
      {/* Landing Page */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center gap-10 ">
        <h1
          className="md:text-[4rem] text-[2.35rem] text-center md:w-8/12 w-10/12 font-semibold text-neutral-900
       md:tracking-wider tracking-wide md:leading-[4.5rem] leading-[3.25rem]"
        >
          The{" "}
          <strong
            className={`text-transparent font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 `}
          >
            premium fabrics
          </strong>{" "}
          you need to serve your brand now
        </h1>
        <div className="buttonSection flex flex-row gap-5">
          <WhiteButton href="/contact">Get In Touch</WhiteButton>
        </div>
      </div>

      {/* Quote */}

      <div className="flex justify-center py-20 md:py-40  md:px-8 gap-10 w-full bg-neutral-100 ">
        <div className="px-8 w-full lg:max-w-5xl lg:mx-auto  ">
          <div className="text-xl   sm:text-2xl md:text-4xl font-medium sm:leading-normal md:leading-relaxed">
            We know that trying to find the right fabric to fit your style can
            be a challenging process. That’s why we are willing to collaborate
            on a custom project with you to provide the right solution for your
            needs.
          </div>
          <p className="not-italic font-medium mt-6 text-lg md:text-2xl text-neutral-500">
            Acutex
          </p>
        </div>
      </div>

      {/* Exlusive Products */}
      <div className="relative flex flex-col items-center md:items-start gap-y-24 md:flex-row md:justify-evenly overflow-hidden py-20 object-left-bottom">
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

      {/* Core Styles */}
      <div className=" relative py-20  text-neutral-900 justify-center md:justify-start  items-flex flex overflow-hidden">
        <div className="z-50 relative px-4 sm:px-4 md:pl-20 max-w-lg md:max-w-2xl">
          <h1 className="font-semibold text-3xl md:text-5xl ">Core Styles</h1>
          <h3 className="text-xl font-medium md:text-3xl text-neutral-900  my-4 max-w-2xl leading-tight">
            Designed to be easily converted into{" "}
            <GradientText className="font-semibold bg-gradient-to-r from-green-300 to-lime-400 whitespace-nowrap">
              sustainable/eco-friendly
            </GradientText>{" "}
            and <Bold className="italic">"Berry Complaint"</Bold> fabrics
          </h3>
          <div className="flex flex-wrap max-w-3xl gap-4">
            <BigBullet>Limited Stock Availbility</BigBullet>
            <BigBullet>Matching Rib</BigBullet>
            <BigBullet>Sample Yardage Availability</BigBullet>
            <BigBullet>Higher Capacity</BigBullet>
            <BigBullet>Faster Lead-Times</BigBullet>
            <BigBullet>Consistent Quality</BigBullet>
          </div>
          <p className="text-base font-medium md:text-xl my-6">
            Proven basic knit styles that meet most needs in:
          </p>
          <div className="flex flex-wrap max-w-3xl gap-4">
            <BigBullet>
              Jersey with and without <Bold>Spandex</Bold>
            </BigBullet>
            <BigBullet>
              <Bold>Terry & Fleece</Bold>&nbsp;- Light To Heavy
            </BigBullet>
          </div>
        </div>
        <Image
          src="/assets/banners/core-styles.png"
          className="z-10 object-cover right-0 "
          // width={850}
          // height={450}
          fill
          alt="Background Of Landing Page"
        />{" "}
      </div>
      {/* Custom Development */}
      <div className=" relative py-20   text-neutral-50  items-center flex overflow-hidden justify-center md:justify-end">
        <div className="z-50 relative max-w-lg md:max-w-2xl lg:mr-20 xl:mr-40  px-4 sm:px-4 md:pl-20">
          <h1 className="font-semibold  text-3xl md:text-5xl ">
            Custom Development
          </h1>
          <h3 className="text-xl md:text-3xl font-medium text-neutral-50  my-4 pr-4 md:max-w-2xl leading-tight">
            <GradientText className="font-semibold from-green-300 to-lime-400 whitespace-nowrap">
              Custom fabric designs&nbsp;
            </GradientText>
            and qualities for your specification and needs
          </h3>
          <div className="flex flex-wrap max-w-3xl gap-4">
            <BigBullet>Wide Range of Contents And Fibers</BigBullet>
            <BigBullet>Dyeing/Finishing Options</BigBullet>
            <BigBullet>Tight Quality Control</BigBullet>
            <BigBullet>Flexible Production Schedules</BigBullet>
          </div>
          <p className="text-base font-medium md:text-xl my-6">
            Various Fabric Styles And Constructions
          </p>
          <div className="flex flex-wrap max-w-3xl gap-4">
            <BigBullet>Functional Fabrics</BigBullet>
            <BigBullet>Novelty Fabrics</BigBullet>
            <BigBullet>Specialty Fabrics</BigBullet>
          </div>
        </div>
        <Image
          src="/assets/banners/custom-development.png"
          className="z-10 object-cover right-0 "
          // width={850}
          // height={450}
          fill
          alt="Background Of Landing Page"
        />{" "}
      </div>

      {/* custom container */}
      <section className="relative  py-20 px-6 md:px-4 lg:px-10 items-start gap-y-20 flex flex-col md:flex-row   md:justify-between lg:justify-center   lg:gap-x-20">
        <Image
          src="/assets/gradient/dust-gradient.png"
          className="-z-50"
          fill
          alt="Background Of Landing Page"
        />
        {/* Develpoment Workflow */}
        <div className=" md:w-fit">
          <h3 className="text-xl font-bold mb-4">Development Workflow</h3>
          <div className="ml-6">
            <Bullet>Provide us your Fabric Swatch</Bullet>
            <p className="ml-6 text-neutral-500 mb-4">
              Minimum fabric size 8" x 8"
            </p>
            <Bullet>Provide your Fabric Specs</Bullet>
            <p className="ml-6 text-neutral-500 mb-4 max-w-sm">
              This could be information on content, weight, width, etc.
            </p>
            <Bullet>Provide Project Details</Bullet>
            <p className="ml-6 text-neutral-500 mb-4 max-w-sm">
              This could be your goals, function, concepts, likes and dislikes,
              etc.
            </p>
            <Bullet>Preferred Project Lead Time</Bullet>
            <p className="ml-6 text-neutral-500 mb-4">
              What is your preferred completion date/timeline?
            </p>
            <Bullet>Next Step(s):</Bullet>
            <p className="ml-6 text-neutral-500 mb-4">
              How would you like to proceed with the projects?
            </p>
            <div className="grid grid-cols-2 grid-rows-2 max-w-72  md:gap-x-6 text-sm font-medium ml-6 text-neutral-800">
              <li>New/Inspiration</li>
              <li>Replicate</li>
              <li>Improve</li>
              <li>Similar Option</li>
            </div>
          </div>
        </div>

        {/* Guidelines Workflow */}
        <div className="flex flex-col">
          <h3 className=" text-xl font-bold mb-4">Guidelines</h3>
          {/* MOQ */}
          <div className="flex flex-col gap-y-3 ml-4">
            <div className="flex gap-2 ">
              <Image
                src="/assets/icons/products/exclamation.svg"
                width={20}
                height={20}
                alt="Exclamation Point"
              />
              <h3 className="text-xl font-normal">Minimum Order Quantity</h3>
            </div>
            <BigBullet textAsIcon text="MOQ" className="ml-6">
              5000yds / per style
            </BigBullet>
            <BigBullet textAsIcon text="MOQ" className="ml-6">
              20 rolls / per color
            </BigBullet>

            <p className="ml-6 text-neutral-500 mb-2 max-w-sm">
              *below MOQ will require $2000 surcharge (reimbursable after
              minimum order is met)
            </p>

            <p className="ml-6 text-neutral-500 mb-2 max-w-sm">
              *for higher volume, please inquire for pricing and lead-times
            </p>
          </div>
          {/* VOLUME PRICING TIERS */}
          <div className="flex flex-col gap-y-3 ml-4 mt-6">
            <div className="flex items-center">
              <Image
                src="/assets/icons/products/check-circle.svg"
                width={20}
                height={20}
                alt="Exclamation Point"
              />
              <h3 className="text-xl  ml-2 font-normal">
                Volume Pricing Tiers
              </h3>
            </div>
            <BigBullet textAsIcon text="TIER 1" className="ml-6">
              5000yds - 9,999yds
            </BigBullet>
            <BigBullet textAsIcon text="TIER 2" className="ml-6">
              10,000yds - 24,999yds
            </BigBullet>
            <BigBullet textAsIcon text="TIER 3" className="ml-6">
              25,000yds - above
            </BigBullet>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center w-full text-center py-2 bg-green-500  ">
        <Link
          target="_blank"
          className="font-medium text-green-800"
          rel="noopener noreferrer"
          href={"https://www.acutexorganics.com"}
        >
          Click here if you are looking for
          <Bold className="text-green-900">Organics by Acutex</Bold>
        </Link>
      </div>
    </div>
  )
}
