import React from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footerpage from './Footerpage';
const Summershoespage = () => {
  return (
    <>
     <Headerpage/>
  <Subheaderpages/>
  <div>
         <div className='Glamorous'> <img className='glamorous-img' src='https://themesflat.co/html/ecomus/images/slider/sneaker-1.jpg'/></div> 
        <div className='glamorous-text4'>
          <h6>MUST HAVES</h6>
          <h1>SUMMER SHOES</h1>
          <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div>
    </div>
    <div className='text-ecomus'>
<div className='image-style-country '>
   <div className="shoes-img">
<img src="https://themesflat.co/html/ecomus/images/collections/sneaker-1.jpg" alt="shoes" />
<div  >
    <button  className='mobile-button1'>ALL SNEAKERS</button>
</div>
   </div>
   <div className="shoes-img">
   <img src="https://themesflat.co/html/ecomus/images/collections/sneaker-2.jpg" alt="shoes" />
   <div  >
    <button  className='mobile-button1'>MEN</button>
</div>
   </div>
   <div className="shoes-img">
   <img src="https://themesflat.co/html/ecomus/images/collections/sneaker-3.jpg" alt="shoes" />
   <div  >
    <button  className='mobile-button1'>WOMEN</button>
</div>
   </div>
   <div className="shoes-img">
   <img src="https://themesflat.co/html/ecomus/images/collections/sneaker-4.jpg" alt="shoes" />
   <div  >
    <button  className='mobile-button1'>KID</button>
</div>
   </div>
</div>

       <div className='brands limited'>
       <img className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-01.png" alt="brand" />
       <img  className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-02.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-03.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-04.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-05.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-06.png" alt="brand" />
      </div>
      <div className='image-style limited1'>
        <div  className="modern-lamp1">
            <img  className='glamorous-img3'  src='https://themesflat.co/html/ecomus/images/collections/sneaker-5.jpg'/>
            <div className='lamp-text'>
                <h4>MEN COLLECTION</h4>
                <p>Every Piece is  made to last beyound the season</p>
                <p><u>SHOP COLLECTION</u></p>
            </div>
        </div>
        <div>
       <div className="modern-lamp1"><img   className='modern-lamp2' src='https://themesflat.co/html/ecomus/images/collections/sneaker-6.jpg'/>
       <div className='lamp-text'>
                <h4>WOMEN COLLECTION</h4>
                <p><u>SHOP COLLECTION</u></p>
            </div>
       </div> 
       <div className="modern-lamp1"><img  className='modern-lamp2'  src='https://themesflat.co/html/ecomus/images/collections/sneaker-7.jpg'/>
       <div className='lamp-text'>
                <h4>KID COLLECTION</h4>
                <p><u>SHOP COLLECTION</u></p>
            </div>
       </div> 
        </div>
        </div>
   <div className='image-style '>
        <div  >
            <div className="modern-lamp1"> 
         <img  className='shoe-image'  src="https://themesflat.co/html/ecomus/images/products/sneaker-4.png" alt="shoes" />
             <div>
                <h3>POLAR NIGHT PACK PACK 2.0</h3>
             </div></div> 
       <div className="modern-lamp1"><img className='shoe-image'  src="https://themesflat.co/html/ecomus/images/products/sneaker-6.png" alt="shoes" />
         <div>
            <h3>  SHADOW 5000 BRIDGE</h3>
         </div>
         </div>
        </div>
        <div >
            <div className="modern-lamp1">
              <img  className='shoe-image' src="https://themesflat.co/html/ecomus/images/products/sneaker-8.jpg" alt="shoes" />
           <div>
              <h3>RIVALRY 86 LOW WONDER</h3>
           </div>
           </div>
           <div className="modern-lamp1">
        <img  className='shoe-image' src="https://themesflat.co/html/ecomus/images/products/sneaker-10.png" alt="shoes" />
        <div>
            <h3>SAMBA OG SHOES</h3>
         </div></div>
        </div>
  
     
      
      <div className='headphone limited'> 
    <img className='headphones-img2' src='https://themesflat.co/html/ecomus/images/collections/sneaker-lb.jpg'/> 
    </div></div>
    <div className='image-style' >
       <div className='image-style'>
            <div className="modern-lamp1">
              <img  className='shoe-image' src="https://themesflat.co/html/ecomus/images/products/sneaker-8.jpg" alt="shoes" />
             </div>
           <div className="modern-lamp1">
             <img  className='shoe-image' src="https://themesflat.co/html/ecomus/images/products/sneaker-10.png" alt="shoes" />
            </div>
      </div>
        <div>
            <h6>ABOUT US</h6>
<h1>A SERVICE-FIRST HOME FOR CONTEMPORARY STYLE</h1> 
<p>
Rooted in Amsterdam street culture we’ve always supported local initiatives, creatives and athletes from day one. Working on unique collaborations with both local and international brands and hosting regular events and parties in our shops for our community. Something we’ll continue doing wherever we go.
</p>
<p><u>SHOP COLLECTION</u></p>
        </div>
    </div></div>
    <Footerpage/>
    </>
  )
}

export default Summershoespage
