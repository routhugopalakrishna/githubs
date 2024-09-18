

import React from 'react'
import Subheaderpage from '../pages/Subheaderpage';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const Fashion = () => {
  return (
    <>
    <Subheaderpage/>
    <div className='fashionpage-body-color'>
    <div className='fashion-images'>
     <Link to="/Glamorous"><div><img src='IMAGES\FASHIONS\pic1.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
  <Link to="/elegance"><div><img src='IMAGES\FASHIONS\pic2.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
  <Link to="/summerstyle"><div><img src='IMAGES\FASHIONS\pic3.png' alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
    <Link to="/trendingproduct"> <div><img src='IMAGES\FASHIONS\pic4.png'alt='fashions'/>
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   </div>
   <div className='fashion-images'>
   <Link to="/urbanpage"> <div><img src='IMAGES\FASHIONS\pic5.png'alt='fashions'/>
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   <Link to="/facebeautypage"> <div><img src='IMAGES\FASHIONS\pic6.png'alt='fashions'/>
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   <Link to="/summer"><div><img src='IMAGES\FASHIONS\pic7.png' alt='fashions'/>
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   <Link to="/limited"> <div><img src='IMAGES\FASHIONS\pic8.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   </div>
   <div className='fashion-images'>
   <Link to="/season"> <div><img src='IMAGES\FASHIONS\pic9.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
    <Link to="/skincare"><div><img src='IMAGES\FASHIONS\pic10.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
    
   </div>
    </div>
   
    </>
  )
}

export default Fashion;
