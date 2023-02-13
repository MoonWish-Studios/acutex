import React from "react"

export default function QuoteText() {
  return (
    <div className="flex justify-center flex-col items-center md:px-20 px-5">
      <h1
        className="font-semibold text-center  md:text-start lg:text-[2.75rem]
       text-[2.3rem]  mb-6"
      >
        Our Background
      </h1>
      <div
        className="paragraphs flex flex-col md:flex-row w-full md:w-10/12 mb-10 text-lg md:text-xl 
      gap-10 leading-7 md:leading-8 justify-center items-start "
      >
        <div className=" text-center md:text-left md:w-6/12">
          Acutex was founded to fill the service gap in the marketplace. Priding
          ourselves for over two decades of exclusively manufacturing Made In
          USA fabrics, we are in business to help support the domestic textile
          industries and its beneficiaries.
        </div>
        <div className="text-center md:text-left md:w-6/12">
          Our founder is passionate about textiles with 20 plus years
          experience; extensive career in direct sales; rooted in customer
          service; reflecting God's grace, wants to leave a positive impact on
          the world!
        </div>
      </div>
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          aria-hidden="true"
          className="w-6 h-6 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-900 ">
            “If you don’t allow it to grow, it will die.”
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 ">
            {/* <cite className="pr-3 font-medium text-gray-900 ">Thomas Chun</cite> */}
            <cite className="pl-3 text-sm font-light text-gray-500 ">
              Founder of Acutex
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
