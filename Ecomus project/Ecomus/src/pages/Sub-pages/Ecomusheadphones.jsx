import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Ecomusheadphones = () => {
  const[products,setProducts]=useState(0);
  const product= [
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
  return (
    <>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/slide-hp-1.jpg'/></div> 
        <div className='glamorous-text2'>
            <div className='page-heading-text'>ICONIC DESIGN AND BRILLENT ACOUSTICS</div>
          <div className='page-heading'>Ecomus<br/>
          Wireless Headphones</div>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div>
    
    <div className='image-style'>
<div  >
<img className='headphones' src="https://themesflat.co/html/ecomus/images/collections/new-releases.png" alt="summer" />

<h3 className='content-center'>New Releases</h3></div>
<div>
<img className='headphones' src="https://themesflat.co/html/ecomus/images/collections/best-deals.png" alt="summer" />
<h3 className='content-center'>Best Deals</h3></div>
<div>
<img  className='headphones'src="https://themesflat.co/html/ecomus/images/collections/collection-circle-14.png" alt="summer" />
<h3 className='content-center'>Open-Ears</h3></div>
<div>
<img className='headphones' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-15.png" alt="summer" />
<h3 className='content-center'>Earbuds</h3></div>
<div>
<img className='headphones' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-16.png" alt="summer" />
<h3 className='content-center'>Headphones</h3></div>
<div>
<img className='headphones'src="https://themesflat.co/html/ecomus/images/collections/collection-circle-17.png" alt="summer" />
<h3 className='content-center'>Speckers</h3></div>
     </div>
     <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-66.jpg'/>
        <div className='season-colletion3'>
           <h3>Designed For All<br/> Occessions</h3> 
       
           <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-67.jpg'/>
        <div className='season-colletion3'>
           <h3>Comfort,Unlimited<br/>Unlimited</h3> 
           <button  className='shopnow'>Shop Now</button>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/collection-68.jpg'/>
        <div className='season-colletion3'>
           <h3>Iconic Besign And<br/>Brillient Acoustises</h3> 
          <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
</div>

<div className='headphone'> 
    <img className='headphones-img' src='https://themesflat.co/html/ecomus/images/collections/banner-collection.jpg'/>
        <div className='headphone-text'>
            <p>ECOMUS HEADPHONE DESIGN</p>
        <h1>Uniting Performance</h1>
        <p>Fast wireless charging on-the-go.</p>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div> 
    <h1 className='content-center'>Our best sellers</h1>
    <div className="product-img">
     <button className='productcircle1' onClick={productbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {productsdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3>{offer.name}</h3>
         <p>{offer.price}</p>
         <button  className='trending-product1'>{offer.button}</button>
         </div>
      </div>
     ))}
       <button onClick={ productforward } className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>
    
      <Brandingpage/>
    </>
  )
}

export default Ecomusheadphones
