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

const Home = ({ addToCart, searchQuery }) => {
  const { productItems } = Data
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = productItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });
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
        <FlashDeals productItems={filteredItems} addToCart={addToCart} category="all" />
        <NewArrivals addToCart={addToCart} category="all" />
        <Discount addToCart={addToCart} category="all" />
        <Annocument />
        <Wrapper />
      </section>
    </>
  )
}

export default Home
