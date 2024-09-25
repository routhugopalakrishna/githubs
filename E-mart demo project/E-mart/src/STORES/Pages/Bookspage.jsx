import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const Bookspage = () => {
  const[selectedproduct,setSelectedproduct] = useState([]);
  const companyHandler = (title) => {
    if (selectedproduct.includes(title)) {
      setSelectedproduct(selectedproduct.filter(item => item !== title));
    } else {
      setSelectedproduct([...selectedproduct, title]);
    }
  };
  const filteredProducts = selectedproduct.length === 0 ? 
  booksData : booksData.filter((product) => selectedproduct.includes(product.title));

  return (
    <>
      <Navbar />
      <div className="pro-select-all">
      <div className="pro-selected">
      {booksData.map((book) => (
  <div > 
    <label>
      <input
        type='checkbox'
        checked={selectedproduct.includes(book.title)}
        onChange={() => companyHandler(book.title)}
      />
      {book.author}
    </label>
  </div>
))}
      </div>
        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}> 
              <Link to={`/books/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="pageModel">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Bookspage;
