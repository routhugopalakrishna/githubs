
import React, { useState } from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const Womenpage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (model) => {
    if (selectedproduct.includes(model)) {
      setSelectedproduct(selectedproduct.filter(item => item !== model));
    } else {
      setSelectedproduct([...selectedproduct, model]);
    }
  };
  const filteredProducts = selectedproduct.length === 0 
  ? womanData 
  : womanData.filter(product => selectedproduct.includes(product.brand));
  return (
    <>
       <Navbar />
       <div className="pro-select-all">
      <div className="pro-selected">
      {womanData.map((women) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(women.brand)}
        onChange={() => companyHandler(women.brand)}
      />
      {women.brand}
    </label>
  </div>
))}
      </div>
      <div className="pageSection">
        {filteredProducts.map((item) => {
          return (
            <div>
             <Link to={`/women/${item.id}`}>
             <div className="pageImg">
                  <img  className="page-Img"src={item.image} alt={item.model} />
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

export default Womenpage
