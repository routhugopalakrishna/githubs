
import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import { furnitureData } from '../data/furniture';
import { Link } from 'react-router-dom';
const Furniturepage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (brand) => {
    if (selectedproduct.includes(brand)) {
      setSelectedproduct(selectedproduct.filter(item => item !== brand));
    } else {
      setSelectedproduct([...selectedproduct,brand]);
    }
  };
  const filteredProducts = selectedproduct.length === 0 ? 
  furnitureData: furnitureData .filter((product) => selectedproduct.includes(product.brand));

  return (
    <>
    <Navbar />
    <div className="pro-select-all">
      <div className="pro-selected">
      {furnitureData.map((furniture) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(furniture.brand)}
        onChange={() => companyHandler(furniture.brand)}
      />
      {furniture.brand}
    </label>
  </div>
))}
      </div>
    <div className="pageSection">
      {filteredProducts.map((item) => {
        return (
          <div>
           <Link to={`/furniture/${item.id}`}>
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

export default Furniturepage
