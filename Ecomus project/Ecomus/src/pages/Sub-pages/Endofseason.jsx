import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Endofseason = () => {
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
  return (
    <>
     <Headerpage />
     <Subheaderpages/>
     <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-11.jpg'/></div> 
        <div className='glamorous-text2'>
          <div className='page-heading'>The Mystery Behind</div>
          <div className='page-heading-text'>From casual to formal, we've got your covered</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
  
    <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/collections/collection-59.jpg'/>
        <div className='season-colletion3'>  
          <button className='shopnow'>Shop Now</button>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/collections/collection-60.jpg'/>
        <div className='season-colletion3'>
           <button  className='shopnow'>Shop Now</button>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img2"src='https://themesflat.co/html/ecomus/images/collections/collection-61.jpg'/>
        <div className='season-colletion3'>
          <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
    </div>
    <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/collections/collection-62.jpg'/>
        <div className='season-colletion3'>  
          <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/collections/collection-63.jpg'/>
        <div className='season-colletion3'>
           <button  className='shopnow'>Shop Now</button>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img2"src='https://themesflat.co/html/ecomus/images/collections/collection-64.jpg'/>
        <div className='season-colletion3'>
          <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
</div>
<h2 className='content-center branches'>Editor's Picks</h2>
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

      <div className='image-style'>
    <div className='product-card'>
        <img  className="beautyimg"src='https://themesflat.co/html/ecomus/images/collections/collection-65.jpg'/>
    </div>
    <div className='spring'>
        <p>GET YOUR FASHION FIX HERE</p>
<h1>Spring Collections</h1>
<p>our luxury silk button-up blouses made with ultra-soft,</p>
<p>washable silk.</p>
<button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
   </div>
   <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/blog/blog-1.jpg'/>
        <div className='season-colletion3'>  
          <button  className='shopnow'>Accessories</button>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img2" src='https://themesflat.co/html/ecomus/images/blog/blog-2.jpg'/>
        <div className='season-colletion3'>
           <button  className='shopnow'>Accessories</button>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img2"src='https://themesflat.co/html/ecomus/images/blog/blog-3.jpg'/>
        <div className='season-colletion3'>
          <button  className='shopnow'>Accessories</button>
        </div>
    </div></div>
    <Brandingpage/>
    </>
  )
}

export default Endofseason
