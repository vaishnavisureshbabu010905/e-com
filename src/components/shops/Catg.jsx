import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=80",
      cateName: "Apple",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=80",
      cateName: "Samsung",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=80",
      cateName: "Oppo",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1503602642458-232111445657?w=80",
      cateName: "Vivo",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80",
      cateName: "Redmi",
    },
    {
      cateImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=80",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
