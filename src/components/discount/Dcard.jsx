import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = ({ addToCart }) => {
  const [likeCounts, setLikeCounts] = useState(() => {
    const stored = localStorage.getItem("likeCountsDiscount");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("likeCountsDiscount", JSON.stringify(likeCounts));
  }, [likeCounts]);

  const increment = (id) => {
    setLikeCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          const product = { id: index + 200, name: value.name, price: value.price.replace('$', ''), cover: value.cover }; // dummy id
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                  <div className='product-like'>
                    <label>{likeCounts[index] || 0}</label> <br />
                    <i className='fa-regular fa-heart' onClick={() => { increment(index); addToCart(product); }}></i>
                  </div>
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
