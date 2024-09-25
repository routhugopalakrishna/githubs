import React from 'react';
import { mobileData } from '../data/mobiles';

const Mobilepage = () => {
  const fiveImages = mobileData.slice(0, 5);
  
  return (
    <>
      <h3 className='product-tittle'>Mobiles</h3>
      <div className="prosetion">
        {fiveImages.map((item) => (
          <div className='imagebox' key={item.id}>  
            <img className='proimage' src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mobilepage;




