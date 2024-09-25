import React from 'react';
import { computerData } from '../data/computers'; 

const Computers = () => {

  const fiveComputers = computerData.slice(0, 5);

  return (
    <>
      <h3 className='product-tittle'>Computers</h3>
      <div className="prosetion">
        {fiveComputers.map((item) => (
          <div className='imagebox' key={item.id}>
            <img className='proimage' src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Computers;

