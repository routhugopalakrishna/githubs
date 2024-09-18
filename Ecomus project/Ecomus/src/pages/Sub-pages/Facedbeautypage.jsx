import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Facedbeautypage = () => {
  const[bags,setBags]=useState(0);
  const[products,setProducts]=useState(0);
  const product= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
      name:"Ribbed Tank Top",
      price:"$16.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/light-green-2.jpg",
      name:"Ribbed Model T-Shirt",
      price:"From $18.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/white-4.jpg",
      name:"Oversized oversized T-Sized",
      price:"$10.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/pink-1.jpg",
      name:"Oversized Printed T-Shirt",
      price:"$16.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/brown-3.jpg",
      name:"V-linen T-shirt",
      price:"$114.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/light-green-2.jpg",
      name:"loose fit sweet shirt",
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
    const productbags= [
      {
        Image: "https://themesflat.co/html/ecomus/images/products/brown-5.jpg",
        name:"Shoppers",
  
        button: '',
      
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-32.jpg",
        name:"Blazers",
   
        button: '',
      
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-33.jpg",
        name:"Sweaters",

        button: '',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-34.jpg",
        name:"Sneakers",

        button: '',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-35.jpg",
        name:"Glasses",
  
        button: '',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-36.jpg",
        name:"Accessories",
     
        button: '',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/collections/collection-37.jpg",
        name:"Shirts",
     
        button: '',
      },
      {
        Image: " https://themesflat.co/html/ecomus/images/collections/collection-38.jpg",
        name:"Shoes",
     
        button: '',
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
      productbags[(bags + 4) %  productbags.length],
    ];
  return (
    <>
     <Headerpage/>
     <Subheaderpages />
     <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-12.jpg'/></div> 
        <div className='glamorous-text2'>
          <div className='page-heading'>Multi-Faceted Beauty</div>
          <div className='page-heading-text'>From casual to formal, we've got your covered</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='text-ecomus'>
    <div className="bag-img">
     <button className='productcircle1' onClick={bagbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-image" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button  className='trending-product3'>{offer.button}<ArrowOutwardIcon/></button>
         </div>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>

      <div className="product-img">
     <button className='productcircle1' onClick={productbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {productsdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button  className='trending-product1'>{offer.button}</button>
         </div>
      </div>
     ))}
       <button onClick={ productforward } className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>


       <div className='product-card'>
        <img  className='glamorous-img'src="https://themesflat.co/html/ecomus/images/slider/banner-countdown.png" alt="fashion" />
       <div className='facebuautypage'>
       <h1>Last Chance Offers</h1>
       <div>Get Them Before They're Gone</div>
       <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
       </div>
       </div>
   <div className='image-style'>
    <div className='product-card'>
        <img  className="beautyimg"src='https://themesflat.co/html/ecomus/images/shop/file/lookbook-5.jpg'/>
    </div>
    <div className='spring'>
        <p>SPRING SALE 30% OFF</p>
<h1>Shop this look</h1>
<div className='product-card'> <img id="shopping-img" src='https://themesflat.co/html/ecomus/images/products/black-14.jpg'/>
<div className='img-content'><h3>Cotton Twill Cap</h3>
<p>From $26.95</p></div>
</div>
    </div>
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

export default Facedbeautypage;
