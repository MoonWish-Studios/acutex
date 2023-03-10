import "./styles/globals.css"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"

const outfit = Outfit({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={outfit.className} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZPL9C0C8MD"
      ></Script>
      <Script id="google-tag">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZPL9C0C8MD');`}
      </Script>
      <body className="font-[350] tracking-wider bg-white1">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
