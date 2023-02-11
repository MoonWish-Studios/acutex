import "./styles/globals.css"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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
      <body className="font-[350] tracking-wider bg-white1">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
