import { Newsletter } from "@/components"
import { Footer } from "@/layout"
import React from "react"
import { CategoryArea, DisplayCategory, FeatureProductWrapper, Hero, ProductContainer } from "./_Home"
import "./globals.css"

const Home = () => {
  return (
    <div className="upperArea mb-0 h-full max-h-full w-full  bg-chai">
      <Hero />
      {/* <DisplayCategory /> */}
      <CategoryArea />
      <FeatureProductWrapper />
      <ProductContainer heading="All Products" />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
