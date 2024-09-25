import React from 'react'
import { mobileData } from '../STORES/data/mobiles'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../STORES/Components/Navbar'
import { Button } from '@mui/material'
const Mobilesingle = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const product = mobileData.find((item) => item.id ===(id));
  if (!product) {
    return <p>Product not found</p>; 
  }
    
  return (
   <>
   <Navbar />
     <div className="ind-section">
        <div >
          <img className="ind-img"src={product.image} alt={product.model} />
        </div>
        <div className="ind-detailsspace">
        <div className="ind-company space">
            <h2>{product.company} {product.model}</h2>
          </div>
       
        <div className="ratinng-chart">4.5<img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png"/>| 1,891 choice | Search this page</div>
        <div className="custemers-buying-product">1K+ bought in past month</div>
       <div className='path-to-landingpage'><h5 onClick={() => navigate("/")}>EMart</h5></div>
        <div className="ind-price">
          <sup>₹</sup>{product.price}
        </div>
        <div>M.R.P:
          <strike className="ind-strikeprice">₹{product.strikeprice}</strike> 
         </div>
        <div className="ind-desc">
          <p>{product.description}</p>
          <p>{product.description1}</p>
        </div>
        <button className='addtocart-button'>ADD TO CART</button>
        </div>
       
      </div>
   
   </>
  )
}

export default Mobilesingle;
