import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import"./Amazon.css"
const Applemainpage = () => {
    const navigate=useNavigate();
   
   


  return (
    <>
    <h2>Results</h2>
<div >Check each product page for other buying options.</div>
    <div className='mainpage' onClick={()=>navigate("/Amazon")}>
        <div>
        <img  className="mainpageimg"src='https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg'/>
        </div>
        <div>
            <div className="product-name">Apple iPhone 15 (128 GB) - Black</div>
            <div className="ratinng-chart">4.5<img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png"/>| 1,901 </div>
        <div className="custemers-buying-product">1K+ bought in past month</div>
        <div  className="product-price"><sup className='product-mainprice'>₹</sup>70,990</div>
        <div className="product-strike-price">M.R.P:<strike><sup className="product-mainprice" >₹</sup>79,990</strike></div>
        <div className="product-taxes">Flat INR 4000 Off on ICICI CreditCards</div>
        <img  className="primeimg"src='https://www.pngall.com/wp-content/uploads/15/Amazon-Prime-Logo-No-Background.png'/>
        <div >FREE delivery</div>
        <div>fastest delivery</div>
        <div >Service: Installation</div>
       
        </div>
    
    </div>
    </>
  )
}

export default Applemainpage
