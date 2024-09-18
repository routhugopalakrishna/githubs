import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Brandingpage from './Brandingpage';
const Moderndiningpage = () => {

  const [startIndex, setStartIndex] = useState(0);
  const[products,setProducts]=useState(0);
  const[bags,setBags]=useState(0);
  const offers= [
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/009furniture-banner-04.jpg",
      button: 'Furniture',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/009furniture-banner-05.jpg",
      button: 'Lighting',
  
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/009furniture-banner-06.jpg",
      button: 'Outdoor',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/009furniture-banner-07.jpg",
      button: 'Kitchen',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/009furniture-banner-08.jpg",
      button: 'Decor',
    
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
    const productbags= [
        {
          Image: "https://themesflat.co/html/ecomus/images/slider/009furniture-banner-10.jpg",
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/slider/009furniture-banner-11.jpg",
        },
        {
          Image: "https://themesflat.co/html/ecomus/images/slider/009furniture-banner-12.jpg",
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
      
    
      ];
  return (
    <>
    <Headerpage/>
    <Subheaderpages/>
    <div  className='image-style'>
        <div className='escapades'>
        <div className='redefining-fashion'>
           <div className='page-heading'>Moderern Dining<br/>Furniture</div>
           <div className='page-heading-text'>Special offers You Can't miss</div>
           <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div></div>
        <div  className='product-card'>
        <img   className='glamorous-img3'src='https://themesflat.co/html/ecomus/images/slider/009furniture-slideshow-01.jpg'/>
        </div>
     </div>
 
     <div className='image-style limited1'>
        <div  className="modern-lamp1">
            <img  className='glamorous-img3'  src='https://themesflat.co/html/ecomus/images/collections/009furniture-banner-01.jpg'/>
            <div className='lamp-text'>
                <h2>Spring collection</h2>
                <p>Every Piece is  made to last beyound the season</p>
            </div>
        </div>
        <div>
       <div className="modern-lamp1"><img   className='modern-lamp2' src='https://themesflat.co/html/ecomus/images/collections/009furniture-banner-02.jpg'/>
       <div className='lamp-text'>
                <h2>UP TO 30% OFF</h2>
                <p><u>SHOP COLLECTION</u></p>
            </div>
       </div> 
       <div className="modern-lamp1"><img  className='modern-lamp2'  src='https://themesflat.co/html/ecomus/images/collections/009furniture-banner-03.jpg'/>
       <div className='lamp-text'>
                <h2>Lighting collection</h2>
                <p><u>SHOP COLLECTION</u></p>
            </div>
       </div> 
        </div>
     </div>
     <h1  className='content-center '>Shop by categories</h1>
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
     </div>
     <div className="bag-img">
    
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
         <img  id="modern-table" src={offer.Image}/>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle5'>< KeyboardDoubleArrowRightIcon/></button>
     </div>
     <Brandingpage/>
    </>
  )
}

export default Moderndiningpage
