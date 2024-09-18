import React, { useState } from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Brandingpage from './Brandingpage';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Summerstylepage = () => {
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
    <div>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-04.jpg'/></div> 
        <div className='glamorous-text'>
          <div className='page-heading'>Summer style<br/>sensations</div>
          <div className='page-heading-text'> Discover the hottest trends and must have looks</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='text-ecomus'>
    <div className='image-style' >
        <div  className='product-card'>
            <img  className="bagimg" src='https://themesflat.co/html/ecomus/images/collections/collection-21.jpg'/>
        </div>
        <div  >
           <div className='product-card'><img  className="bag"src='https://themesflat.co/html/ecomus/images/collections/collection-22.jpg'/></div> 
           <div className='product-card'> <img className="bag" src='https://themesflat.co/html/ecomus/images/collections/collection-23.jpg'/></div>
        </div>
        <div  className='product-card'>
            <img  className="bagimg"  src='https://themesflat.co/html/ecomus/images/collections/collection-24.jpg'/>
        </div>   
    </div>
    <div className='image-style' >
        <div className='effortless'>
           <p>SPRING SALE 30% OFF</p> 
           <h1>Effortless<br/>
           Denim Delights</h1>
           <div>Discover the versatility of denim with our collection of jeans, jackets</div>
           <button className='collection-button'>SHOP COLLECTION</button>
        </div>
        <div className='summerstyle'>
            <img src='https://themesflat.co/html/ecomus/images/collections/collection-25.jpg'/>
        </div>
    </div>
    <h1 className='content-center'>Best Seller</h1>
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
        <div className='content-center'>
            <div className='product-card'><img  id="shopping-img1" src='https://themesflat.co/html/ecomus/images/shop/file/banner-gr-1.jpg'/></div>
           <h2 >Accessories Galore</h2>
           <div>Shop through our latest selection of Fashion</div>
           <p >Shop Collection<NorthEastIcon fontSize='larger'/></p>
        </div>
        <div className='content-center' >
            <div className='product-card'><img id="shopping-img1" src='https://themesflat.co/html/ecomus/images/shop/file/banner-gr-2.jpg'/></div>     
            <h2 >Statement Pieces</h2>
           <div>Shop through our latest selection of Fashion</div>
           <p >Shop Collection<NorthEastIcon fontSize='larger'/></p>
        </div>
   </div>
   <div className='image-style-country'>
    <div onClick={hongkonglocations}>
         <h3>HongKong</h3>
   </div>
    <div onClick={londonlocations}>
        <h3>London</h3>
    </div>
    <div  onClick={parislocations}>
        <h3>Paris</h3>
   </div>
   </div>
   <div className='branches'>
   <div className='hongkong-location' id='hongkong-location'>
     <div className='store-content'>
        <h4>HongKong Store</h4>
        <div>301 Front St WToronto,</div>
        <div>Ecomus@support.com</div>
        <div>(08) 8942 1299</div>
        <div>Mon - Fri, 8:30am - 10:30pm</div>
        <div>Saturday, 8:30am - 10:30pm</div>
        <div>Sunday Closed</div>
     </div>
     <div>
        <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore1.png'/>
     </div>
 </div>
 <div className='london-location' id='london-location'>
      <div className='store-content'>
        <h4>London Store</h4>
        <div>301 Front St WToronto,</div>
        <div>Ecomus@support.com</div>
        <div>(08) 8942 1299</div>
        <div>Mon - Fri, 8:30am - 10:30pm</div>
        <div>Saturday, 8:30am - 10:30pm</div>
        <div>Sunday Closed</div>
      </div>
       <div>
        <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore2.png'/>
       </div>
    </div> 
    <div className='paris-location' id='paris-location'>
        <div className='store-content'>
        <h4>Paris Store</h4>
        <div>301 Front St WToronto,</div>
        <div>Ecomus@support.com</div>
        <div>(08) 8942 1299</div>
        <div>Mon - Fri, 8:30am - 10:30pm</div>
        <div>Saturday, 8:30am - 10:30pm</div>
        <div>Sunday Closed</div>
        </div>
        <div>
           <img src='https://themesflat.co/html/ecomus/images/shop/store/ourstore3.png'/>
        </div>
   </div></div>
   <Brandingpage/>
 </div>
 </div>
  )
}

export default Summerstylepage;
