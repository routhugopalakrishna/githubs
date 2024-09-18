import React from 'react'
import Subheaderpage from '../pages/Subheaderpage'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
const Electronics = () => {
  return (
    <>
        <Subheaderpage/>
        <div className='fashionpage-body-color'>
          <div className="fashion-images">
          <Link  to="/mobilepage"> <div><img src='IMAGES\ELECTRONICES\pic1.png'alt='Electronics'/>
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link> 

          </div>
          </div>
    </>
  )
}

export default Electronics

