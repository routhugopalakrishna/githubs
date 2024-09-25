import React from 'react';
import { fridgeData } from '../data/fridge';

const Fridgepage = () => {
  const fiveImages = fridgeData.slice(0, 5);

  return (
    <>
      <h3 className='product-tittle'>Refrigerators</h3>
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

export default Fridgepage;

