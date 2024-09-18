
import React from 'react'
import Subheaderpage from '../pages/Subheaderpage'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
const Furniture1 = () => {
  return (
    <>
      <Subheaderpage/>
      <div className='fashionpage-body-color'>
        <div className="fashion-images">
        <Link to="/diningpage"> <div><img src="IMAGES\FURNITURE1\pic1.png" alt="Furniture1" />
          <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
  <Link  to="/chairpage">  <div><img src="IMAGES\FURNITURE1\pic2.png" alt="Furniture1" />
        <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button> </div> </Link>
        <div> <img src="IMAGES\FURNITURE1\pic3.png" alt="Furniture1" />
          <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div>
        </div>  
        </div> 
    </>
  )
}

export default Furniture1
