import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Applemainpage = () => {
    const navigate=useNavigate();
   
   


  return (
    <>
    <h1>Results</h1>
<p>Check each product page for other buying options.</p>
    <div className='mainpage' onClick={()=>navigate("/Amazon")}>
        <div>
        <img  className="mainpageimg"src='https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg'/>
        </div>
        <div>
            <h3>Apple iPhone 15 (128 GB) - Black</h3>
            <p className="font1"><img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png"/>| 1,901 </p>
        <p className="font2">1K+ bought in past month</p>
        <p className="pricesize1">₹70,990</p>
        <p className="font3"lass>M.R.P:<strike>₹79,990</strike></p>
        <p className='mainpagespace4'>Flat INR 4000 Off on ICICI CreditCards</p>
        <img  className="primeimg"src='https://www.pngall.com/wp-content/uploads/15/Amazon-Prime-Logo-No-Background.png'/>
        <p className='mainpagedeliveryfont'>FREE delivery</p>
        <p className='mainpagedeliveryfont1'>Service: Installation</p>
       
        </div>
    
    </div>
    </>
  )
}

export default Applemainpage
