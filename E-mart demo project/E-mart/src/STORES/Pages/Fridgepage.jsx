
import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
import Fridge from '../Components/Fridge'

const Fridgepage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (model) => {
    if (selectedproduct.includes(model)) {
      setSelectedproduct(selectedproduct.filter(item => item !== model));
    } else {
      setSelectedproduct([...selectedproduct, model]);
    }
  };
  const filteredProducts = selectedproduct.length === 0 ? 
  fridgeData : fridgeData .filter((product) => selectedproduct.includes(product.brand));

  return (
    <>
    <Navbar />
    <div className="pro-select-all">
      <div className="pro-selected">
      {fridgeData.map((fridge) => (
  <div> 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(fridge.brand)}
        onChange={() => companyHandler(fridge.brand)}
      />
      {fridge.brand}
    </label>
  </div>
))}
      </div>
    <div className="pageSection">
      {filteredProducts.map((item) => {
        return (
          <div>
          <Link to={`/fridge/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt="" />
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

export default Fridgepage
