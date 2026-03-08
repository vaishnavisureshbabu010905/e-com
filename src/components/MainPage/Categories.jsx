import React from "react"
import { useHistory } from "react-router-dom"

const Categories = () => {
  const history = useHistory();
  const data = [
    {
      cateImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=100",
      cateName: "All",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=100",
      cateName: "Fashion",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100",
      cateName: "Electronics",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=100",
      cateName: "Cars",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=100",
      cateName: "Home & Garden",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=100",
      cateName: "Gifts",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100",
      cateName: "Music",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=100",
      cateName: "Pets",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=100",
      cateName: "Baby Toys",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100",
      cateName: "Groceries",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          const categoryParam = value.cateName.toLowerCase().replace(/ & | /g, "-");
          return (
            <button
              className='box f_flex'
              key={index}
              onClick={() => history.push(categoryParam === "all" ? "/" : `/${categoryParam}`)}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories
