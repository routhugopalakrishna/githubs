import React from 'react';
import { tvData } from '../data/tv'; 

const TVpage = () => {
  const fiveTVs = tvData.slice(0, 5);
  
  return (
    <>
      <h3 className='product-tittle'>Televisions</h3>
      <div className="prosetion">
        {fiveTVs.map((item) => (
          <div className='imagebox' key={item.id}> 
            <img className='proimage' src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TVpage;

