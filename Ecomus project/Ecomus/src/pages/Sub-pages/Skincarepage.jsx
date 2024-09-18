import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Skincarepage = () => {
  const[bags,setBags]=useState(0);
  const productbags= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-2.jpg",
      name:"Natural Moisturizing Factors",
      price:"$26.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
    
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-4.jpg",
      name:"Anhydrous Solutions Pore Serum",
      price:"$56.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
    
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-6.jpg",
      name:"Serum For Hair Dencity ",
      price:"$66.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-8.jpg",
      name:"SMini Cofidence in Clearance",
      price:"$76.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
   
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-10.jpg",
      name:"natural Moisturizing Factors",
      price:"$12.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-12.jpg",
      name:"Anatural Moisturizing Factors",
      price:"$162.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
   
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/skincare-16.jpg",
      name:"Mini Skin Perfecting",
      price:"$168.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
     
    },
    {
      Image: " https://themesflat.co/html/ecomus/images/products/skincare-14.jpg",
      name:"Mini Skin Perfecting",
      price:"$54.00",
      button1:"30ml",
      button2:"60ml",
      button: 'QuickAdd',
     
    },
   
  ];
  const bagforward= () => {
    setBags((prevIndex) => (prevIndex + 1) % productbags.length);
  };
  const bagbackward = () => {
    setBags((prevIndex) => (prevIndex - 1+  productbags.length) %  productbags.length);
  };
  const bagdisplay = [
    productbags[bags],
    productbags[(bags + 1) %  productbags.length],
    productbags[(bags + 2) %  productbags.length],
    productbags[(bags + 3) %  productbags.length],
   
  ];
  return (
    <>
     <Headerpage />
     <Subheaderpages/>
     <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/skincare-slide1.jpg'/></div> 
        <div className='glamorous-text2'>
          <div className='page-heading'>Skin Reimagined</div>
          <div className='page-heading-text'>To Delivery Peak Potency, Minus The Waste</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='text-ecomus'>
    <div className="bag-img">
     <button className='productcircle1' onClick={bagbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
          <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button>{offer.button1}</button> <button>{offer.button2}</button>
      <div><button  className='collection-button1'>{offer.button}</button></div>
         </div>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>

    
     <div className='skincare'> 
          <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/collections/banner-collection-1.jpg'/> 
        <div className='skincare-text'>
          <div className='page-heading'>Silk Blouses Shirts</div>
          <div  className='page-heading-text'>Shop our luxury silk button-up blouses made with ultra-soft, washable silk.</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <h1 className='content-center store-content' >Exclusive Kits</h1>
    <div className="bag-img">
     <button className='productcircle1' onClick={bagbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
          <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button>{offer.button1}</button> <button>{offer.button2}</button>
      <div style={{marginTop:"10px"}}><button  className='collection-button1'>{offer.button}</button></div>
         </div>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>

      <div className='content-center'><h1>Shop Gram</h1>
      <p> Inspire and let yourself be inspired, from one unique fashion to another.</p></div>
      <div className='image-style'> 
       <div className='product-card'><img className='women-img' src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg" alt="women" /></div> 
       <div className='product-card'> <img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-3.jpg" alt="women" /></div>
      <div className='product-card'><img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-5.jpg" alt="women" /></div>  
     <div className='product-card'> <img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-8.jpg" alt="women" /></div>
    <div className='product-card'><img className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-6.jpg" alt="women" /></div>
      </div></div>
      <Brandingpage/>
    </>
  )
}

export default Skincarepage
