import React from 'react'
import Subheaderpage from '../pages/Subheaderpage';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
const Accessories1 = () => {
  return (
    <>
     <Subheaderpage/>
     <div className='fashionpage-body-color'>
   <div className='fashion-images' >
   <Link  to="/headphones"> <div><img src="IMAGES\ACCESSORIES1\pic1.png" alt="accessories1" />
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
   <Link to="/giftcards"><div><img src="IMAGES\ACCESSORIES1\pic2.png" alt="accessories1" />
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   
   </div> 
   </div>
    </>
  )
}

export default Accessories1;
