import React, { useState, useEffect } from "react"

const ShopCard = ({ product, addToCart }) => {
  const [likeCounts, setLikeCounts] = useState(() => {
    const stored = localStorage.getItem("likeCountsShop");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("likeCountsShop", JSON.stringify(likeCounts));
  }, [likeCounts]);

  const increment = (id) => {
    setLikeCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="box">
      <div className="img">
        <img src={product.cover} alt={product.name} />
        <div className='product-like'>
          <label>{likeCounts[product.id] || 0}</label> <br />
          <i className='fa-regular fa-heart' onClick={() => { increment(product.id); addToCart(product); }}></i>
        </div>
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ShopCard