import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Headerpage from './Headerpage';
import Subheaderpages from './Subheaderpages';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const LimitedEditionpage = () => {
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
    <Headerpage/>
    <Subheaderpages/>
      <div  className='image-style'>
        <div className='limited'>
           <div className='page-heading'>Limited Edition<br/>Collection</div>
           <div className='page-heading-text'>Shop exclusive pieces from our limited edition collection</div>
           <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
      <div className="image-wrapper">
        <div  className='product-card'><img  className="small-img"src="https://themesflat.co/html/ecomus/images/slider/te2.jpg" alt="bags" /></div>
       <div  className='product-card'> <img  className="big-img"src="https://themesflat.co/html/ecomus/images/slider/te1.jpg" alt="shirts" /></div>
      </div>
     </div>
     <div  className='content-center ' >
        <h1>Summer Essentials</h1>
        <p> Beat the Heat in Style: It's time to stock up on summer essentials!</p>
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

      <div className='page-body-color' >
        <h1>One-Time Only</h1>
        <p>Special Offers You Can't Miss: These deals won't last forever!</p>
        <p><u>Shop now </u></p>
      </div>
      <div className='image-style'>
    <div className='product-card'>
        <img src='https://themesflat.co/html/ecomus/images/collections/collection-56.jpg'/>
        <div className='season-colletion2'>
        <h3>UP TO 30% OFF</h3> 
           <h1>Summer Style Guide</h1>
           <p><u>shop now <ArrowForwardIosIcon fontSize='small'/></u></p>
          
        </div>
    </div>
    <div className='product-card'>
        <img src='https://themesflat.co/html/ecomus/images/collections/collection-57.jpg'/>
        <div className='season-colletion2'>
        <h3>UP TO 30% OFF</h3> 
        <h1>Statement Accessories</h1>
           <p><u>shop now <ArrowForwardIosIcon fontSize='small'/></u></p>  
        </div>
        </div>
        </div>
        <Brandingpage/>
    </>
  )
}

export default LimitedEditionpage
