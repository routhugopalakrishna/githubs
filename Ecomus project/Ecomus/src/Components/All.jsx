
import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
const All = () => {
  return (
    <>
  
      <div className='fashionpage-body-color'>
        <div className="fashion-images">
       <Link to="/Glamorous" ><div><img src='IMAGES\FASHIONS\pic1.png'alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
    <Link to="/elegance" > <div><img src='IMAGES\FASHIONS\pic2.png'alt='fashions'/>
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   <Link to="/summerstyle"> <div><img src='IMAGES\FASHIONS\pic3.png' alt='fashions'/>
    <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
    <Link to="/trendingproduct"><div><img src='IMAGES\FASHIONS\pic4.png'alt='fashions'/>
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
   <Link  to="/headphones"> <div><img src="IMAGES\ACCESSORIES1\pic1.png" alt="accessories1" />
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
   <Link to="/giftcards"><div><img src="IMAGES\ACCESSORIES1\pic2.png" alt="accessories1" />
   <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link>
   </div> 
   <div className='fashion-images'>
  <Link to="/diningpage"> <div><img src="IMAGES\FURNITURE1\pic1.png" alt="Furniture1" />
          <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
  <Link  to="/chairpage">  <div><img src="IMAGES\FURNITURE1\pic2.png" alt="Furniture1" />
        <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button> </div> </Link>
        <div><img src="IMAGES\FURNITURE1\pic3.png" alt="Furniture1" />
          <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
          <Link  to="/mobilepage"> <div><img src='IMAGES\ELECTRONICES\pic1.png'alt='Electronics'/>
          <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div></Link> 
          </div>
          <div className="fashion-images">
          <div><img src="IMAGES\OTHERS\pic11.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
              <Link to="/shoespage"> <div> <img src="IMAGES\OTHERS\pic12.png" alt="Others" />
             <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
            <Link to="/skincare"><div> <img src="IMAGES\OTHERS\pic1.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
           <Link to="/giftcards"> <div> <img src="IMAGES\OTHERS\pic2.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
          </div>
          <div className="fashion-images">
          <Link to="/kidspage"><div><img src="IMAGES\OTHERS\pic3.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
            <Link to="/kitchenpage"><div><img src="IMAGES\OTHERS\pic4.png" alt="Others" />
            <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> </Link>
            <div><img src="IMAGES\OTHERS\pic5.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
              <div> <img src="IMAGES\OTHERS\pic6.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
            </div>
            <div className="fashion-images">
            <div> <img src="IMAGES\OTHERS\pic7.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
              <div> <img src="IMAGES\OTHERS\pic8.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
            <div> <img src="IMAGES\OTHERS\pic9.png" alt="Others" /> 
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
              <div> <img src="IMAGES\OTHERS\pic10.png" alt="Others" />
              <button className='button-demo1'>Demo<ArrowOutwardIcon fontSize='small'/></button></div> 
            </div>
          
        </div>
    </>
  )
}

export default All;
