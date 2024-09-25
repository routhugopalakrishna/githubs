import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { mobileData } from "../data/mobiles";
import { Link } from 'react-router-dom';

const Mobilepage = () => {
  const[selectedproduct,setSelectedproduct]=useState([]);
  const companyHandler = (company) => {
    if (selectedproduct.includes(company)) {
      setSelectedproduct(selectedproduct.filter(item => item !== company));
    } else {
      setSelectedproduct([...selectedproduct, company]);
    }
  };
  const filteredProducts = selectedproduct.length === 0? 
  mobileData: mobileData.filter((product) => selectedproduct.includes(product.company));
 
  return (
    <>
      <Navbar />
      <div className="pro-select-all">
      <div className="pro-selected">
      {mobileData.map((mobile) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(mobile.company)}
        onChange={() => companyHandler(mobile.company)}
      />
      {mobile.company}
    </label>
  </div>
))}
      </div>
      <div className="pageSection">
      {filteredProducts.map((item) => (
  <div key={item.id}> 
    <Link to={`/mobiles/${item.id}`}>
      <div className="pageImg">
        <img src={item.image} alt={item.model} />
      </div>
    </Link>
    <div className="proModel">
      {item.company}, {item.model}
    </div>
  </div>
))}
      </div>
      </div>
    </>
    
  );
};

export default Mobilepage
