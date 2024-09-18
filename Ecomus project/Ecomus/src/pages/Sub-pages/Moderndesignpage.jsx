import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Headerpage from './Headerpage';
import Subheaderpages from './Subheaderpages';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Footerpage from './Footerpage';
const Moderndesignpage = () => {
    const[productsmobile,setProductsmobile]=useState(0);
  const[products,setProducts]=useState(0);
  const product= [
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/electronic-1.jpg",
      name:"Mobiles",
      button: 'ShopNow',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/electronic-2.jpg",
      name:"Headphones",
      button: 'ShopNow',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/electronic-3.jpg",
      name:"Cables",
      button: 'ShopNow',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/electronic-4.png",
      name:"Adpters",
      button: 'ShopNow',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/electronic-5.jpg",
      name:"Dock and hubs",
      button: 'ShopNow',
    },
   
  ];
    const productforward = () => {
      setProducts((prevIndex) => (prevIndex + 1) % product.length);
    };
    const productbackward = () => {
      setProducts((prevIndex) => (prevIndex - 1+ product.length) % product.length);
    };
    const productsdisplay = [
      product[products],
    product[(products + 1) % product.length],
      product[(products + 2) % product.length],
      product[(products + 3) % product.length],
    ];
  
 
  const productmobiles= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-9.png",
      name:"WH-1000 XM4 Wireless Headphones",
      price:"$16.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-12.png",
      name:"Linkbuds S Wireless Earbuds",
      price:"From $18.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-15.png",
      name:"INZONE H9  Wireless Gaming Headset",
      price:"$10.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-17.png",
      name:"NS7 Wireless Wearable TV SPEACKER",
      price:"$16.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-19.png",
      name:"  IER M7-Monitor In -Air",
      price:"$114.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/headphone-7.png",
      name:"MW75 -Buggati",
      price:"$20.00",
      button: 'QuickAdd',
    
    }
  ];
    const productmobileforward = () => {
      setProductsmobile((prevIndex) => (prevIndex + 1) % productmobiles.length);
    };
    const productmobilebackward = () => {
      setProductsmobile((prevIndex) => (prevIndex - 1+ product.length) % productmobiles.length);
    };
    const productsmobiledisplay = [
        productmobiles[productsmobile],
        productmobiles[(productsmobile + 1) % productmobiles.length],
        productmobiles[(productsmobile + 2) % productmobiles.length],
        productmobiles[(productsmobile + 3) %productmobiles.length],
    ];
  return (
    <>
    <Headerpage/>
    <Subheaderpages/>
       <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/Slideshow_Electronics1.jpg'/></div> 
        <div className='glamorous-text'>
        <div className='page-heading-text'>UP TO 40% off on chargers</div>
          <div className='page-heading'>Savings for  dads and Grads</div>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div>
    <h1  className='content-center' >Shop by category.</h1>
 
    <div className="product-img">
     <button className='productcircle1' onClick={productbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {productsdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='season-colletion  mobile-text'>
          <h3>{offer.name}</h3>
         <button className='mobile-button'>{offer.button}</button>
         </div>
      </div>
     ))}
       <button onClick={ productforward } className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>
     <div className='headphone'> 
    <img className='headphones-img' src='https://themesflat.co/html/ecomus/images/collections/banner-collection-3.jpg'/>
        <div className='headphone-text'>
        <p>SALE UP TO 30% OFF TODAY</p> 
        <h2>Best Deals Discounts</h2>
        <p>Fast wireless charging on-the-go.</p>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div> 
    <div className='image-style'>
    <div className='product-card'>
        <img  className="sound-box" src='https://themesflat.co/html/ecomus/images/collections/electronic-6.jpg'/>
        <div className='season-colletion1'>
      <p>HOT ACCESSORIES</p>
           <h1>Smart Assistant</h1> 
           <button className='shopnow'>Shop Now <ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='product-card'>
        <img    className="sound-box" src='https://themesflat.co/html/ecomus/images/collections/electronic-7.jpg'/>
        <div className='season-colletion1'>
        <p>FAST AND FREE SHIPPING</p> 
        <h1>True Earbuds</h1>
           <button className='shopnow'>Shop Now  <ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
        </div>
        </div>
        <div className="product-img">
     <button className='productcircle1' onClick={productmobilebackward}><KeyboardDoubleArrowLeftIcon /></button>
     {productsmobiledisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button  className='trending-product1'>{offer.button}</button>
         </div>
      </div>
     ))}
       <button onClick={ productmobileforward } className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>
     <Footerpage/>
    </>
  )
}

export default Moderndesignpage
