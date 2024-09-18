import React from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Brandingpage from './Brandingpage';
const Giftcardspage = () => {
  return (
    <>
      <Headerpage/>
      <Subheaderpages/>
      <div>
         <div className='headphone'> <img className='headphones-img' src='https://themesflat.co/html/ecomus/images/slider/giftCard_slide-1.jpg'/></div> 
        <div className='headphone-text'> 
          <div className='page-heading'>Gift Cards<br/>
         For Everysmile</div>
         <div className='page-heading-text'>Suprise and Delight With Our Versatile GIFT Cards</div>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
    </div>
    </div >
   
    <div className='store-img giftcard' >
      <div><img src='https://themesflat.co/html/ecomus/images/shop/file/banner_giftcard_001.svg'/></div>  
<div>
    <h1>Professional gift solutions</h1>
    <p>Send 1-1,000+ customised eGift cards instantly with Ecomus Business!</p>
</div>
    </div>
    <div className='image-style' id='image-style'>
     <div className='product-card'>
        <img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/giftcard-1.jpg'/>
    <div className='img-content'>
         <h3 >AWS eGift Cards</h3>
     <p>From $31.95</p>
     <div> <button className='collection-button1'>Quick Add</button></div> 
    </div> </div>
    <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/giftcard-2.jpg'/>
     <div className='img-content'>
        <h3 >Bodums eGift Card</h3>
    <p >$56.95</p>
    <div> <button className='collection-button1'>Quick Add</button></div> 
     </div>  </div>
     
      <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/giftcard-3.jpg'/>
   <div className='img-content'>  <h3>Jay Jays eGift Card</h3>
      <p >$40.00</p>
    <div> <button className='collection-button1'>Quick Add</button></div> 
      </div> </div>
      <div className='product-card'><img  id="shopping-img"src='https://themesflat.co/html/ecomus/images/products/giftcard-4.jpg'/>
   <div className='img-content'>  <h3 >Adventure eGift Card</h3>
     <p>From $38.95</p>
    <div><button className='collection-button1'>Quick Add</button></div> 
     </div> </div>
      </div>
      <h1  className='content-center branches'>Blogs post</h1>
      <div className='image-style'>
    
    <div className='product-card'>
      <img id="giftcards"  src="https://themesflat.co/html/ecomus/images/blog/blog-giftcard-4.jpg" alt="women" />
      <div className='season-colletion'>
         <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        <h3 className='img-content'>The Next Genration Of Leather Alternatives</h3>
    </div>
  

    <div className='product-card'>
        <img id="giftcards" src='https://themesflat.co/html/ecomus/images/blog/blog-giftcard-2.jpg'/>
        <div className='season-colletion'>
           <p><u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        <h3 className='img-content'>AN Exclusive Clothing Collaboration</h3>
        </div>
    <div className='product-card'>
        <img  id="giftcards"src='https://themesflat.co/html/ecomus/images/blog/blog-giftcard-3.jpg'/>
        <div className='season-colletion'>
           <p> <u>shop now <ArrowForwardIosIcon fontSize='larger'/></u></p>
        </div>
        <h3 className='img-content'>The Next Genration Of Leather Alternatives</h3>
    </div>
</div>
<Brandingpage/>
    </>
  )
}

export default Giftcardspage
