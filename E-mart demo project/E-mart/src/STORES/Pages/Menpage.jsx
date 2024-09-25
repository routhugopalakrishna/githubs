

import React, { useState } from 'react'
import { menData } from '../data/men'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const Menpage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (brand) => {
    if (selectedproduct.includes(brand)) {
      setSelectedproduct(selectedproduct.filter(item => item !== brand));
    } else {
      setSelectedproduct([...selectedproduct, brand]);
    }
  };
  const filteredProduct = selectedproduct.length === 0 
  ? menData 
  : menData.filter(product => selectedproduct.includes(product.brand));



  return (
    <>
       <Navbar />
       <div className="pro-select-all">
      <div className="pro-selected">
      {menData.map((men) => (
  <div> 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(men.brand)}
        onChange={() => companyHandler(men.brand)}
      />
      {men.brand}
    </label>
  </div>
))}
      </div>
      <div className="pageSection">
        { filteredProduct.map((item) => {
          return (
            <div>
             <Link to={`/men/${item.id}`}>
             <div >
                  <img className="page-Img"src={item.image} alt={item.model} />
                </div>
             </Link>
              <div className="proModel">
                {item.brand},{item.type},{item.model}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}

export default Menpage
