import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart, category }) => {
  const filtered = category === "all" ? productItems.slice(0, 8) : productItems.filter(item => item.category && item.category.toLowerCase() === category).slice(0, 8);
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={filtered} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
