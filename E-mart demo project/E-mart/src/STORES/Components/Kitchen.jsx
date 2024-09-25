import React from 'react';
import { kitchenData } from '../data/kitchen';

const Kitchenpage = () => {
    const fiveKitchens = kitchenData.slice(0, 5);
  
  return (
    <>
      <h3 className='product-tittle'>Kitchen Appliances</h3>
      <div className="prosetion">
        {fiveKitchens.map((item) => (
          <div className='imagebox' key={item.id}> 
            <img className='proimage' src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kitchenpage;


