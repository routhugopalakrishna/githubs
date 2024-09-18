import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Summerescapades = () => {
  

  const[products,setProducts]=useState(0);
  const[bags,setBags]=useState(0);
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
        Image: "https://themesflat.co/html/ecomus/images/products/black-10.jpg",
        name:"Slim Fit Fine-kit",
        price:"$16.95",
        button: 'QuickAdd',
      
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/black-8.jpg",
        name:"Patterned scarf",
        price:"From $18.95",
        button: 'QuickAdd',
      
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/brown-3.jpg",
        name:"V-neck linen T-shirt",
        price:"$30.00",
        button: 'QuickAdd',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/black-12.jpg",
        name:"Loose fit sweetshirt",
        price:"$16.00",
        button: 'QuickAdd',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/black-5.jpg",
        name:"Regular fit oxford shirt",
        price:"$114.00",
        button: 'QuickAdd',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/black-6.jpg",
        name:"Loose fit hoodie",
        price:"$20.00",
        button: 'QuickAdd',
      },
      {
        Image: "https://themesflat.co/html/ecomus/images/products/grey.jpg",
        name:"Slim Fit Fine-kit Sweater",
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
    const summerescap=()=>{
        document.getElementById("image-style").style.visibility = "visible";
    }
  return (
    <>
     <Headerpage/>
     <Subheaderpages />
     <div  className='image-style'>
        <div className='escapades '>
          <div className='redefining-fashion'>
           <div className='page-heading'>SUMMER<br/>Escapades</div>
           <div className='page-heading-text'>Embrace The Sun -Kissed the season with our collection of breezy</div>
           <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div></div>
        <div className='product-card'>
        <img   className='glamorous-img3'src='https://themesflat.co/html/ecomus/images/slider/fashion-06-slide1.jpg'/>
        </div>
     </div>
     <h1 className='content-center store-content' >Season Collection</h1>
   
     <div className='image-style'>
<div  >
<img className='summerescapades' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-1.jpg" alt="summer" />

<h3 className='content-center'>Women's</h3></div>
<div>
<img className='summerescapades' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-2.jpg" alt="summer" />
<h3 className='content-center'>Men's</h3></div>
<div>
<img  className='summerescapades'src="https://themesflat.co/html/ecomus/images/collections/collection-circle-3.jpg" alt="summer" />
<h3 className='content-center'>Jewelry</h3></div>
<div>
<img className='summerescapades' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-4.jpg" alt="summer" />
<h3 className='content-center'>Sneaker's</h3></div>
<div>
<img className='summerescapades' src="https://themesflat.co/html/ecomus/images/collections/collection-circle-5.jpg" alt="summer" />
<h3 className='content-center'>Gag's</h3></div>
<div>
<img className='summerescapades'src="https://themesflat.co/html/ecomus/images/collections/collection-circle-6.jpg" alt="summer" />
<h3 className='content-center'>Glasses</h3></div>
<div>
<img className='summerescapades'src="https://themesflat.co/html/ecomus/images/collections/collection-circle-7.jpg" alt="summer" />
<h3 className='content-center'>New Arrivals</h3></div>
     </div>
     <div className='image-style-country store-content'>
        <h2 onMouseOver={summerescap}>Best seller</h2>
        <h2 onClick={summerescap}>New arrivals</h2>
        <h2 onClick={summerescap}>On Sale</h2>
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

      <div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-39.jpg'/>
        <div className='season-colletion1'>
           <h3>UP TO 30% OFF</h3> 
          <h4>Essential Basics</h4>
          <button  className='shopnow'>Shop Now</button>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-40.jpg'/>
        <div className='season-colletion1'>
           <h3>UP TO 30% OFF</h3> 
           <h4>Athleisure Wear</h4>
           <button  className='shopnow'>Shop Now</button>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/collection-41.jpg'/>
        <div className='season-colletion1'>
           <h3>UP TO 30% OFF</h3> 
          <h4> Seasonal Favorites</h4>
          <button  className='shopnow'>Shop Now</button>
        </div>
    
</div></div>

<Brandingpage/>
    </>
  )
}

export default Summerescapades
