import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import Brandingpage from './Brandingpage'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Trendingproductpage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const[products,setProducts]=useState(0);
  const[bags,setBags]=useState(0);
  const offers= [
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-3.jpg",
      button: 'ShopNow',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-4.jpg",
      button: 'ShopNow',
  
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-7.jpg",
      button: 'ShopNow',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-6.jpg",
      button: 'ShopNow',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/collection-5.jpg",
      button: 'ShopNow',
    
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
    offers[(startIndex + 2) % offers.length]
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
  const productbags= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/brown-5.jpg",
      name:"Shoppers",
      price:"$16.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/light-green-3.jpg",
      name:"Frida-mista jade",
      price:"From $18.95",
      button: 'QuickAdd',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/black-14.jpg",
      name:"Oversized oversized T-Sized",
      price:"$10.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/brown-7.jpg",
      name:"Cat eye sunglasses",
      price:"$16.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/black-15.jpg",
      name:"Blook-healed mary janes",
      price:"$114.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/light-green-5.jpg",
      name:"Greace-brown",
      price:"$20.00",
      button: 'QuickAdd',
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/light-blue-3.jpg",
      name:"Mini headsetWired&wireless",
      price:"$114.00",
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
      <Headerpage/>
      <Subheaderpages/>
      
      <div  className="store-img">
      <button className='circle1' onClick={backward}><KeyboardDoubleArrowLeftIcon /></button>
               {currentOffers.map((offer, index) => (
                    <div  className='product-card'key={index} >

                        <img  className='men-img' src={offer.Image} alt="Offer" />
                          <div>
                          <button  className='trending-product'>{offer.button}</button>
                          </div>
                    </div> 
                ))}
                   <button onClick={forward} className='circle2'>< KeyboardDoubleArrowRightIcon/></button>
</div>
   
      <div className='page-body-color' >
        <h1>One-Time Only</h1>
        <p>Special Offers You Can't Miss: These deals won't last forever!</p>
        <div><u>Shop now </u></div>
      </div>
      <div className='content-center'>
        <h1>Trending Product</h1>
        <div> Check out our trending now section for the latest fashion must-haves</div>
      </div>
      <div className='text-ecomus'>
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
      <div className='content-center '>
        <h1>Summer Essentials</h1>
      <p> Check out our trending now section for the latest fashion must-haves</p>
      </div>
      <div className="bag-img">
     <button className='productcircle1' onClick={bagbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="shopping-img" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
         <p>{offer.price}</p>
         <button  className='trending-product2'>{offer.button}</button>
         </div>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>


      <div className='content-center '><h1>Shop Gram</h1>
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

export default Trendingproductpage
