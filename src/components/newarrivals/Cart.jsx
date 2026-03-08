import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ndata from "./Ndata"

const Cart = ({ addToCart }) => {
  const [likeCounts, setLikeCounts] = useState(() => {
    const stored = localStorage.getItem("likeCountsNewArrivals");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("likeCountsNewArrivals", JSON.stringify(likeCounts));
  }, [likeCounts]);

  const increment = (id) => {
    setLikeCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {Ndata.map((val, index) => {
          const product = { id: index + 100, name: val.name, price: val.price, cover: val.cover }; // dummy id
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
                <div className='product-like'>
                  <label>{likeCounts[index] || 0}</label> <br />
                  <i className='fa-regular fa-heart' onClick={() => { increment(index); addToCart(product); }}></i>
                </div>
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

export default Cart
