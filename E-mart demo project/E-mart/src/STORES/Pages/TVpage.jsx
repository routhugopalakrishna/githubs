
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';
const TVpage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
 
    const companyHandler = (model) => {
      if (selectedproduct.includes(model)) {
        setSelectedproduct(selectedproduct.filter(item => item !== model));
      } else {
        setSelectedproduct([...selectedproduct, model]);
      }
    };
    const filteredProducts = selectedproduct.length === 0 ? 
    tvData: tvData.filter(product => selectedproduct.includes(product.model));
  
  return (
    <>
      <Navbar />
      <div className="pro-select-all">
      <div className="pro-selected">
      {tvData.map((tv) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(tv.model)}
        onChange={() => companyHandler(tv.model)}
      />
      {tv.brand}
    </label>
  </div>
))}
      </div>
      <div className="pageSection">
        {filteredProducts.map((item) => {
          return (
            <div>
             <Link to={`/tv/${item.id}`}>
             <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
             </Link>
               
              <div className="proModel">
                {item.brand},{item.model}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}

export default TVpage
