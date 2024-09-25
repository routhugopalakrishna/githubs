import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';
import { Kitchen } from '@mui/icons-material';

const Kitchenpage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (model) => {
    if (selectedproduct.includes(model)) {
      setSelectedproduct(selectedproduct.filter(item => item !== model));
    } else {
      setSelectedproduct([...selectedproduct, model]);
    }
  };
  const filteredProducts = selectedproduct.length === 0 ? 
  kitchenData : kitchenData.filter((product) => selectedproduct.includes(product.brand));


  return (
    <>
      <Navbar />
      <div className="pro-select-all">
      <div className="pro-selected">
      {kitchenData.map((kitchen) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(kitchen.brand)}
        onChange={() => companyHandler(kitchen.brand)}
      
      />
      {kitchen.brand}
    </label>
  </div>
))}
      </div>
      <div className="pageSection">
        {filteredProducts.map((item) => (
          <div key={item.id} className="productItem">
            <Link to={`/kitchen/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={`${item.brand} ${item.model}`} />
              </div>
            </Link>
            <div className="productModel">
              {item.brand}, {item.model}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Kitchenpage;

