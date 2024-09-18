import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Footerpage from './Footerpage';
const Qualitychairspage = () => {
  const[products,setProducts]=useState(0);
    const product= [
        {
          Image: "https://themesflat.co/html/ecomus/images/products/lamp-black.jpg",
          name:"AJ Wall Sconce",
          price:"$236.95",
         
        
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/products/furniture-1.jpg",
          name:"Brasilia Lounge Chair",
          price:"From $128.95",
         
        
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/products/furniture-3.jpg",
          name:"Lina Swivel Chair",
          price:"$310.00",
         
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/products/furniture-7.jpg",
          name:"MrChaise",
          price:"$516.00",
        
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/products/furniture-5.jpg",
          name:"MG501 Cuba Lounge chair",
          price:"$114.00",
          button: 'QuickAdd',
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/products/furniture-9.jpg",
          name:"Scissor  Chair",
          price:"$520.00",
        },
        {
            Image: "https://themesflat.co/html/ecomus/images/products/furniture-11.jpg",
            name:"SCiborg model 3052",
            price:"$740.00",
          },
          {
            Image: "https://themesflat.co/html/ecomus/images/products/furniture-13.jpg",
            name:"Womb Ottoman",
            price:"$530.00",
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
  return (
    <>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/furniture_slide2.jpg'/></div> 
        <div className='glamorous-text2'>
            <div className='page-heading-text'>ICONIC DESIGN AND BRILLENT ACOUSTICS</div>
          <div className='page-heading'>Quality<br/>
          Craftsmanship</div>
          <div className='page-heading-text'>ICONIC DESIGN AND BRILLENT ACOUSTICS</div>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div>
    <div className='text-ecomus'>
    <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/furniture_cate1.jpg'/>
        <div className='season-colletion'>
           <h3>Living</h3> 
           <div>UPTO 60%off</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/furniture_cate2.jpg'/>
        <div className='season-colletion'>
           <h3>Lighting</h3> 
           <div>UPTO 20%off</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/furniture_cate3.jpg'/>
        <div className='season-colletion'>
           <h3>Seasonal collection</h3> 
           <div>Free Shipping</div>
           <p> <u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
</div>
<div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/furniture_cate4.jpg'/>
        <div className='season-colletion'>
           <h3>Outdoor Ptio Sets</h3> 
           <div>UPTO 60%off</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/furniture_cate5.jpg'/>
        <div className='season-colletion'>
           <h3>Dining</h3> 
           <div>UPTO 50%off</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/furniture_cate6.jpg'/>
        <div className='season-colletion'>
           <h3>Bedrooms</h3> 
           <div>UPTO 20%off</div>
           <p> <u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
</div>
<div className="product-img">
     <button className='productcircle1' onClick={productbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {productsdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
    
         </div>
      </div>
     ))}
       <button onClick={ productforward } className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div></div>
     <Footerpage/>
    </>
  )
}

export default Qualitychairspage
