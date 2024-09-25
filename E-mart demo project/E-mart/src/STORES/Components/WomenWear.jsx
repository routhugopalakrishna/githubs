
import React from 'react'

  import{womanData}from  "../data/woman"
const WomenWear = () => {
  const fiveimages= womanData.slice(0,5)
  return (
    <>
       <h3  className='product-tittle'>Womenwear</h3>
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

export default WomenWear
