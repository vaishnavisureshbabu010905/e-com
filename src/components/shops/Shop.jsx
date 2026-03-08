import React from "react"
import { useLocation, useHistory } from "react-router-dom"
import Data from "../Data"
import ShopCard from "./ShopCard"
import "./style.css"



const Shop = ({ addToCart, category: propCategory }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  // Always get category from URL
  const urlCategory = (query.get("category") || location.pathname.slice(1).replace(/\/$/, "")).toLowerCase().replace(/ & | /g, "-");
  const category = propCategory || urlCategory || "all";

  const filteredProducts =
    category === "all"
      ? Data.productItems
      : Data.productItems.filter((item) =>
          item.category &&
          item.category.toLowerCase() === category
        );

  // Category menu buttons should navigate to the correct URL
  const categories = [
    { label: "All", value: "all" },
    { label: "Fashion", value: "fashion" },
    { label: "Electronics", value: "electronics" },
    { label: "Cars", value: "cars" },
    { label: "Home & Garden", value: "home-&-garden" },
    { label: "Gifts", value: "gifts" },
    { label: "Music", value: "music" },
    { label: "Health & Beauty", value: "health-&-beauty" },
    { label: "Pets", value: "pets" },
    { label: "Baby Toys", value: "baby-toys" },
    { label: "Groceries", value: "groceries" },
    { label: "Books", value: "books" },
  ];
  const history = useHistory();

  return (
    <section className="shop">
      <div className="category-menu">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => history.push(cat.value === "all" ? "/" : `/${cat.value}`)}
            className={category === cat.value ? "active" : ""}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <ShopCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Shop