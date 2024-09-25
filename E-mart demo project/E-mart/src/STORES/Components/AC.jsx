import React from 'react'
import{acData} from"../data/ac";
const AC = () => {
       const fiveimages=acData.slice(0,5)
  return (
    <>
          <h3 className='product-tittle'>AC'S</h3>
     <div  className="prosetion">
     {fiveimages.map((item) => (
        <div  className='imagebox'key={item.id}>
          <img className='proimage' src={item.image} alt={item.name} />
            </div>   
        ))}
     </div>
    </>
  )
  

}

export default AC
