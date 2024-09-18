import React from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import Brandingpage from './Brandingpage'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Glamorouspage = () => {
  return (
    <>
    
      <div>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-01.jpg'/></div> 
        <div className='glamorous-text'>
          <div className='page-heading'>GLAMOROUS<br/>
          GLAM</div>
          <div className='page-heading-text'>From casual to formal, we've got your covered</div>
          <button className='collection-button'>COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
      </div>
      <div className='text-ecomus'>
      <div className='image-style'>
       <div className='product-card'><img id="shopping-img"src='https://themesflat.co/html/ecomus/images/collections/collection-17.jpg'/>
       </div> 
       <div className='product-card'> <img id="shopping-img"src='https://themesflat.co/html/ecomus/images/collections/collection-14.jpg'/></div>
       <div className='product-card'> <img id="shopping-img" src='https://themesflat.co/html/ecomus/images/collections/collection-18.jpg'/></div>
      </div>
      
      <div className='store-content content-center'>
      <h1 >Best Seller</h1>
      <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
      </div>
      <div className='image-style'>
     <div className='product-card'>
      <img id="shopping-img" src='https://themesflat.co/html/ecomus/images/products/white-1.jpg'/>
     <h3 >Ribbed Tank Top</h3>
    <p >$16.95</p>
    </div> 
      <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/purple.jpg'/>
    <h3 >Ribbed Model T-Shirt</h3>
     <p>From $18.95</p></div> 
      <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/white-4.jpg'/>
     <h3 >Oversized oversized T-Sized</h3>
      <p >$10.00</p></div>
     <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/pink-1.jpg'/>
     <h3 >Oversized Printed T-Shirt</h3>
    <p >$16.95</p>
     </div>  
      </div>
      <div className='image-style'>
     <div className='product-card'>
      <img id="shopping-img" src='https://themesflat.co/html/ecomus/images/products/brown-3.jpg'/>
    <h3 >V-neck linen T-shirt</h3>
    <p >$13.00</p>
    </div> 
      <div className='product-card'>
        <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/light-green-2.jpg'/>
   <h3 >Loose fit sweetshirt</h3>
     <p>From $21.95</p>
     </div> 
      <div className='product-card'>
        <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/black-5.jpg'/>
    <h3>Regular fit oxford shirt</h3>
      <p>$17.00</p>
      </div>
     <div className='product-card'>
      <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/black-6.jpg'/>
     <h3 >Loose fit hoodie</h3>
    <p >$28.00</p>
     </div> 
      </div >
      <div className='store-content content-center'>
      <h1>Shop the look</h1>
      <p >Inspire and let yourself be inspired, from one unique fashion to another.</p>
      </div>
      
      <div className='image-style-country'>
        <img  className="shoplook"src='https://themesflat.co/html/ecomus/images/shop/file/lookbook-3.jpg'/>
        <img className="shoplook" src='https://themesflat.co/html/ecomus/images/shop/file/lookbook-4.jpg'/>
      </div>
      </div>
    <Brandingpage/>
      </div>

    </>
  )
}

export default Glamorouspage
