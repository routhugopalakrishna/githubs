import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const ACpage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const companyHandler = (model) => {
    if (selectedProducts.includes(model)) {
      setSelectedProducts(selectedProducts.filter(item => item !== model));
    } else {
      setSelectedProducts([...selectedProducts, model]);
    }
  };

  const filteredProducts = selectedProducts.length === 0 ? 
  acData: acData.filter(product => selectedProducts.includes(product.model));

  return (
    <>
      <Navbar />
      <div className="pro-select-all">
        <div className="pro-selected">
          {acData.map((company) => (
            <div > 
              <label>
                <input
                  type='checkbox'
                  checked={selectedProducts.includes(company.model)}
                  onChange={() => companyHandler(company.model)}
                />
                {company.company}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/ac/${item.id}`}>
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
}

export default ACpage;
