import React from 'react'
import Subheaderpage from '../pages/Subheaderpage'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
const Others = () => {
  return (
    <>
       <Subheaderpage/>
        <div className='fashionpage-body-color'>
          <div className="fashion-images">
          <Link to="/skincare"> <div> <img src="IMAGES\OTHERS\pic1.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link> 
           <Link  to="/giftcards"><div> <img src="IMAGES\OTHERS\pic2.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
            <Link to="/kidspage"><div><img src="IMAGES\OTHERS\pic3.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
            <Link to="/kitchenpage"><div><img src="IMAGES\OTHERS\pic4.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
            </div>
            <div className="fashion-images">
            <div>  <img src="IMAGES\OTHERS\pic5.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
              <div> <img src="IMAGES\OTHERS\pic6.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
              <div> <img src="IMAGES\OTHERS\pic7.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
              <div> <img src="IMAGES\OTHERS\pic8.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
            </div>
            <div className="fashion-images">
            <div> <img src="IMAGES\OTHERS\pic9.png" alt="Others" /> 
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
              <div> <img src="IMAGES\OTHERS\pic10.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
               </div> 
               <div><img src="IMAGES\OTHERS\pic11.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div> 
             <Link to="/shoespage"><div> <img src="IMAGES\OTHERS\pic12.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button>
              </div></Link>  
            </div>
          </div>
    </>
  )
}

export default Others;

