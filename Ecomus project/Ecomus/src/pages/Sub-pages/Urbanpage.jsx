import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Urbanpage = () => {
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
  return (
    <>
    <Headerpage/>
    <Subheaderpages/>
    <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-07.jpg'/></div> 
      <div className='page-black'>
        <div className='glamorous-text1'>
            <div  className='page-heading-text'>HOT COLLETION</div>
          <div className='page-heading'>URBAN<br/>
          STREET STYLE</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
      </div>
</div>
</div>

<div className='image-style'>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-27.jpg'/>
        <div className='season-colletion'>
           <h3>Moderen Backpack</h3> 
           <div>Starting from $199</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
    <div className='product-card'>
        <img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/collections/collection-28.jpg'/>
        <div className='season-colletion'>
           <h3>Season Collection</h3> 
           <div>Starting from $199</div>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        </div>
    <div className='product-card'>
        <img  id="shopping-img1"src='https://themesflat.co/html/ecomus/images/collections/collection-26.jpg'/>
        <div className='season-colletion'>
           <h3>Stradivarius Top Trainers</h3> 
           <div>Starting from $199</div>
           <p> <u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
    </div>
</div>
<div className='store-content'>
      <h1 className='content-center'>Best Seller</h1>
      <p  className='content-center'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
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


      <div className='store-content'>
      <h1 className='content-center'>Shop by categories</h1>
      <div className='image-style'>
     <div className='product-card'>
      <img id="shopping-img" src='https://themesflat.co/html/ecomus/images/collections/collection-29.jpg'/>
     </div>
      <div className='product-card'>
        <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/collections/collection-30.jpg'/>
     </div>
      <div className='product-card'>
        <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/collections/collection-16.jpg'/>
    </div>
     <div className='product-card'>
      <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/collections/collection-31.jpg'/>
      </div>
      </div >
      </div>
      <div className='content-center'>
        <h1>Shop Gram</h1>
      <p> Inspire and let yourself be inspired, from one unique fashion to another.</p>
      </div>
      <div className='image-style'> 
       <div className='product-card'><img className='women-img' src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg" alt="women" /></div> 
       <div className='product-card'> <img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-3.jpg" alt="women" /></div>
      <div className='product-card'><img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-5.jpg" alt="women" /></div>  
     <div className='product-card'> <img  className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-8.jpg" alt="women" /></div>
    <div className='product-card'><img className='women-img'src="https://themesflat.co/html/ecomus/images/shop/gallery/gallery-6.jpg" alt="women" /></div>
      </div>
      <Brandingpage/>
    </>
  )
}

export default Urbanpage
