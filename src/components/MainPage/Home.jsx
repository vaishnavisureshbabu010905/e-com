import React, { useState } from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import FlashDeals from "../flashDeals/FlashDeals"
import NewArrivals from "../newarrivals/NewArrivals"
import Discount from "../discount/Discount"
import Annocument from "../annocument/Annocument"
import Wrapper from "../wrapper/Wrapper"
import Data from "../Data"

const Home = ({ addToCart }) => {
  const { productItems } = Data
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
      <section className='home'>
        <div className='container home-flex'>
          <div className='home-categories'>
            <Categories setCategory={setSelectedCategory} />
          </div>
          <div className='home-slider'>
            <SliderHome />
          </div>
        </div>
      </section>
      <section className='main-content'>
        <FlashDeals productItems={productItems} addToCart={addToCart} category={selectedCategory} />
        <NewArrivals addToCart={addToCart} category={selectedCategory} />
        <Discount addToCart={addToCart} category={selectedCategory} />
        <Annocument />
        <Wrapper />
      </section>
    </>
  )
}

export default Home
