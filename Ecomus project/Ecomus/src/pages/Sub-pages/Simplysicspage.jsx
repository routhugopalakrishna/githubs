import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Footerpage from './Footerpage';
const Simplysicspage = () => {
    const[products,setProducts]=useState(0);
  const[bags,setBags]=useState(0);
  const productbags= [
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/cate-stroller-1.jpg",
      name:"Newborn strollers",
     
      button: '',
    
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/cate-stroller-2.jpg",
      name:"Compact strollers",
     
      button: '',
    
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/cate-stroller-3.jpg",
      name:"Double strollers ",
    
      button: '',
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/cate-stroller-4.jpg",
      name:"Accessories",
     
      button: '',
   
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/collections/cate-stroller-5.jpg",
      name:"Car seat",
      
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
 
  

  
  
 
  const product= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/stroller-baby-black2.jpg",
      name:"Baby stroller with life long",
      price:"$236.95",
     
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/stroller-baby-black.jpg",
      name:"Racing Tricycle baby steoller ",
      price:"From $128.95",
     
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/stroller-baby-black3.jpg",
      name:"StrollerBundle with black frame",
      price:"$310.00",
     
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/stroller-baby-black4.jpg",
      name:"Sand joggy x baby Stroller",
      price:"$516.00",
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/stroller-baby-beige.jpg",
      name:"Stokke x baby Stroller",
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
    const hongkonglocations=()=>{
        document.getElementById("hongkong-location").style.visibility = "visible";
        document.getElementById("london-location").style.visibility = "hidden";
        document.getElementById("paris-location").style.visibility = "hidden";
            }
            const londonlocations=()=>{
                document.getElementById("hongkong-location").style.visibility = "hidden";
                document.getElementById("london-location").style.visibility = "visible";
                document.getElementById("paris-location").style.visibility = "hidden";
                    }
                    const parislocations=()=>{
                        document.getElementById("hongkong-location").style.visibility = "hidden";
                        document.getElementById("london-location").style.visibility = "hidden";
                        document.getElementById("paris-location").style.visibility = "visible";
                            }
  return (
    <>
    <Headerpage/>
    <Subheaderpages/>
    <div  className='image-style'>
        <div className='escapades'>
        <div className='redefining-fashion'>
           <div className='page-heading'>Simply<br/>Chic Strolls</div>
           <div className='page-heading-text'>Experience and convience of intelligent of design</div>
           <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div></div>
        <div className='product-card'>
         <img   className='simply-img'src='https://themesflat.co/html/ecomus/images/slider/slider-stroller-03.jpg'/>
        </div>
     </div>
     <h1  className='content-center'>Shop by categories</h1>
     
     <div className="bag-img">
     <button className='productcircle1' onClick={bagbackward}><KeyboardDoubleArrowLeftIcon /></button>
     {bagdisplay.map((offer,index)=>(
      <div className='product-card' key={index}>
          <img   id="shopping-image" src={offer.Image}/>
         <div  className='img-content'>
          <h3 >{offer.name}</h3>
          <button  className='trending-product3'>{offer.button}<ArrowOutwardIcon/></button>
         </div>
      </div>
     ))}
       <button onClick={bagforward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
     </div>
     <div className='image-style'>
    <div className='product-card'>
        <img  className="sound-box" src='https://themesflat.co/html/ecomus/images/collections/banner-stroller-1.jpg'/>
        <div className='season-colletion1 kidspage-text'>
      <h4>NEW COLLECTIONS</h4>
           <h1>Find Your Perfect Scroller</h1> 
           <p>NEW TIMELESS COLORS,HERE TO STAY</p>
           <button className='shopnow'>Shop Now <ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='product-card'>
        <img    className="sound-box" src='https://themesflat.co/html/ecomus/images/collections/banner-stroller-2.jpg'/>
        <div className='season-colletion1 kidspage-text'>
        <h4>30% OFFON SCROLLERS</h4> 
        <h1>The Embrace The Season</h1>
        <p>From Footmuffs to Seat Liners, be ready for any weather</p>
           <button className='shopnow'>Shop Now  <ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
        </div>
        </div>
        <h1  className='content-center'>Shop by brands</h1>
        <div className='brands'>
       <img className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-01.png" alt="brand" />
       <img  className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-02.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-03.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-04.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-05.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-06.png" alt="brand" />
      </div>
      <h1 className='content-center'>Best selling strollers</h1>
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
     <div className='image-style-country'>
    <div onClick={hongkonglocations}>
         <h2><u>Durabillity</u></h2>
   </div>
    <div onClick={londonlocations}>
        <h2><u>Innovation</u></h2>
    </div>
    <div  onClick={parislocations}>
        <h2><u>Responsibility</u></h2>
   </div>
   </div>
   <div className='branches'>
   <div className='hongkong-location' id='hongkong-location'>
     <div className='store-content'>
       <h1>Unrivalled<br/> engineering</h1>
<p>Award-winning designs,<br/> engineered and tested to keep going for
generations.</p>
<button className='collection-button'>Shop Now</button>
     </div>
     <div>
        <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore-stroller.jpg'/>
     </div>
 </div>
 <div className='london-location' id='london-location'>
      <div className='store-content'>
       <h2>Where Fresh Ideas<br/>
come to Life</h2>
<p>Immerse yourself in a creative space where every step<br/>
is an adventure of innovation.</p>
<button className='collection-button'>Shop Now</button>
      </div>
       <div>
        <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore-stroller2.jpg'/>
       </div>
    </div> 
    <div className='paris-location' id='paris-location'>
        <div className='store-content'>
       <h2>Shaping a Better<br/>
Tomorrow Together.</h2>
<p>In a world where every action matters, let's embrace the<br/>
power of responsibility</p>
<button className='collection-button'>Shop Now</button>
        </div>
        <div>
           <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore-stroller3.jpg'/>
        </div>
 </div></div>
 <Footerpage/>
    </>
  )
}

export default Simplysicspage
