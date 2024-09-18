import React from 'react'
import Headerpage from './Headerpage'
import Subheaderpages from './Subheaderpages'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Kitchenwearpage = () => {
  const [startIndex, setStartIndex] = useState(0);
 
  const offers= [
    {
      Image: "https://themesflat.co/html/ecomus/images/products/kitchen-wear-2.jpg",
     name:"Fry Pan",
     price:"$16.00",
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/kitchen-wear-5.jpg",
      name:"Sauce Pan",
     price:"$10.00",
  
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/kitchen-wear-7.jpg",
      name:"linen Appron",
      price:"$18.00",
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/kitchen-wear-11.jpg",
      name:"Whistling Tea Cattle",
     price:"$200.00",
    
    },
    {
      Image: "https://themesflat.co/html/ecomus/images/products/kitchen-wear-13.jpg",
      name:"Food Storage Set",
      price:"$28.00",
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
  return (
    <>
   <Headerpage/>
   <Subheaderpages/>
   <div  className='image-style'>
        <div className='escapades'>
        <div className='redefining-fashion'>
           <div className='page-heading'>Our Biggest <br/>Event Of The Season</div>
           <div className='page-heading-text'>Kick Off Summer With 10% Off on Sitewide. </div>
           <button className='collection-button'>SHOP COLLECTION<ArrowForwardIosIcon fontSize='larger'/></button>
        </div></div>
       
        <div className='product-card'>
         <img className='simply-img'src='https://themesflat.co/html/ecomus/images/slider/kitchen-wear-1.jpg'/>
        </div>
     </div>
     <div className='image-style branches'>
     <div className='product-card'>
      <div><img className='kitchen-wear' src="https://themesflat.co/html/ecomus/images/collections/kitchen-wear-1.jpg" alt="women" />  
     <div className='facebuautypage1'>
       <h1>Last Chance Offers</h1>
       <p>starting From $ 199</p>
       </div></div>
     </div> 
        <div  className='product-card'>
            <img  className='kitchen-wear'src="https://themesflat.co/html/ecomus/images/collections/kitchen-wear-2.jpg" alt="kitchen" />
            <div className='facebuautypage1'>
       <h1>Swivel Peeler</h1>
       <p>starting From $ 299</p>
       </div>
        </div>
        <div  className='product-card'>
            <img  className='kitchen-wear'src="https://themesflat.co/html/ecomus/images/collections/kitchen-wear-3.jpg" alt="kitchen" />
            <div className='facebuautypage1'>
       <h1>Bakeware Set</h1>
       <p>starting From $ 499</p>
       </div>
         </div>
     </div>
     <div className="bag-img">
      <button className='productcircle1' onClick={backward}><KeyboardDoubleArrowLeftIcon /></button>
               {currentOffers.map((offer, index) => (
                    <div  className='product-card'key={index} >

                        <img   id="shopping-img" src={offer.Image} alt="Offer" />
                        <h3>{offer.name}</h3>
                        <p>{offer.price}</p>
                          <div>
                          <button className='trending-product2'>{offer.button}</button>
                          </div>
                    </div> 
                ))}
                   <button onClick={forward} className='productcircle2'>< KeyboardDoubleArrowRightIcon/></button>
</div>
    </>
  )
}

export default Kitchenwearpage
