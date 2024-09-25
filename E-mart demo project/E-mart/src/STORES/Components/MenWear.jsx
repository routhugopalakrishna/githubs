
import React from 'react'
import { menData } from '../data/men'
const MenWear = () => {
  const fiveimages= menData.slice(0,5)
  return (
    <>
      <h3  className='product-tittle'>Menwear</h3>
      <div className="prosetion">
        {fiveimages.map((item) => (
          <div  className='imagebox'key={item.id}>
            <img className='proimage' src={item.image} alt={item.name} />
            
          </div>
        ))}
      </div>
    </>
  )
}

export default MenWear
