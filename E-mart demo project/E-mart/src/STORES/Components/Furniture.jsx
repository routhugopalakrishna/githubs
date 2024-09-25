import React from 'react'
import{furnitureData} from"../data/furniture"
const Furniture = () => {
    const fiveimages=furnitureData.slice(0,5)
  return (
    <>
      <h3  className='product-tittle'>Furniture</h3>
      <div className="prosetion">
        {fiveimages.map((item) => (
          <div  className='imagebox' key={item.id}>
            <img className='proimage' src={item.image} alt={item.name} />
          </div>
          
        ))}
      </div> 
    </>
  )
}

export default Furniture;
