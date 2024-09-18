import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import Brandingpage from './Brandingpage'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Elegancepage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const[products,setProducts]=useState(0);
  const offers= [
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-42.jpg",
      button: 'Tops',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-43.jpg",
      button: 'Sweetshirts',
  
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-44.jpg",
      button: 'Swim',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-45.jpg",
      button: 'Dresses',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-46.jpg",
      button: 'Cardgans',
    
    }
  ];
  
  const forward = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };
  const backward = () => {
    setStartIndex((prevIndex) => (prevIndex - 1+ offers.length) % offers.length);
  };
  const currentOffers = [
    offers[startIndex],
    offers[(startIndex + 1) % offers.length],
    offers[(startIndex + 2) % offers.length],
    offers[(startIndex + 3) % offers.length]
  ];
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
    <div>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-01.jpg'/></div> 
        <div className='glamorous-text'>
          <div className='page-heading'>Elegance</div>
          <div className='page-heading-text'>From casual to formal, we've got your covered</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <h2 className='content-center'>Categories you might like</h2>
   
    <div className="bag-img">
      <button className='productcircle1' onClick={backward}><KeyboardDoubleArrowLeftIcon /></button>
               {currentOffers.map((offer, index) => (
                    <div  className='product-card'key={index} >

                        <img   id="shopping-img" src={offer.Image} alt="Offer" />
                          <div>
                          <button className='trending-product2'>{offer.button}</button>
                          </div>
                    </div> 
                ))}
                   <button onClick={forward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
</div>
      
      <div className='image-style content-center1'>
       <div className='product-card'><img id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/collection-47.jpg'/></div> 
       <div className='product-card'> <img id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/collection-48.jpg'/></div>
       </div>
<h2 className='content-center'>Ecomus’s Favorites</h2>
<p className='content-center'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
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
       <div> <img src='https://themesflat.co/html/ecomus/images/collections/collection-58.jpg'/></div>
        <div className='redefining-fashion'>
            <h1>Redefining Fashion<br/>
            Excellence</h1>
            <p>Here is your chance to upgrade your wardrobe with a variation of styles</p>
            <button className='stories'>Read Our Stories</button>
        </div>
      </div>
      <Brandingpage/>
    </div>
  )
}

export default Elegancepage
