import React from 'react'
import{booksData}from "../data/books";
const Books = () => {
    const fiveimages=booksData.slice(0,5)
  return (
    <>
    <h3 className='product-tittle'>Books</h3>
     <div  className="prosetion">
     {fiveimages.map((item) => (
        <div  className='imagebox' key={item.id}>
          <img className='proimage' src={item.image} alt={item.name} />
            </div>
              
        ))}
     
        </div> 
    </>
  )
}

export default Books;
