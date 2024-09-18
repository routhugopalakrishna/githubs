

import React,{ useEffect, useState } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NearMeIcon from '@mui/icons-material/NearMe';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const Subheaderpage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    },1000);
  });
  return (
   <>
   <div className='page-body-color'>
  
    <div className='navabar' style={{display:'flex'}}>
      <h3 className='company-name'>ecomus</h3>
      <div >
        <ul className="submenu">
        <li>Demos</li>
          <li>Features</li>
          <li>Exclusive Deal</li>
          <li>Performance</li>
          <li>Documentation</li>
          <li>Open store free</li>
        </ul>
      </div>
   </div>
   
   <button className="btns btn--changeGradient">< AutoAwesomeIcon />React</button>
   <div className='elevate'><div ><span className="hero-text">Elevate</span><span className='success'>Success</span></div>
   <div className='font-template'>It's more than just a template</div></div>
   <div className='content-line'>
   <div>Unlock the full potential of your online presence with Ecommus's vast array of industry-leading features.</div>
  <div >Construct a website that not only looks stunning but also empowers your business to thrive.</div>
   </div>
  <div className='content-center'>
  <button className="custom-btn btn-1"><NearMeIcon />Explore demo</button>
  <button className="custom-btn btn-1"><ShoppingBagRoundedIcon/> Template</button>
  </div>
 <div  className='content-center' >
 <img  className='main-page-img' src='IMAGES\pic1.png'/>
 </div>
 <div className='mainpage-services'>
    <ul >
      <li><button className='button-icons'>< ThumbUpAltOutlinedIcon/></button>Crafting Code Excellence</li>
      <li><button className='button-icons'><BrushOutlinedIcon/></button>Unique Design</li>
      <li><button className='button-icons'><Diversity3OutlinedIcon/></button>Easy to use & intuitive</li>
      <li><button className='button-icons'><MoreTimeOutlinedIcon /></button>24/7 premium support</li>
    </ul>
 </div>
 <div className='content-devlopment'>
  <div>Developed by the most trusted</div>
 </div>
 <div className='content-author'>Envato Elite Author - Themesflat</div>

 <div className='content-paragraph'>
  <div>Themesflat has 8 year experiences in providing premium HTML Template on ThemeForest.</div>
 <div>Explore what we achieve in our journey!</div>
 </div>
 <div  className='content-center'  >
  <img className="main-page-img2" src='IMAGES\pic2.png'/>
 </div>
< div className='mainpage-timer'>{count}<sup><AddIcon/></sup></div>
 <div className='content-center'>
  
 </div>
 <div className='content-paragraph'>
 <div className='mainpage-demo'>State of the art demos</div>
  <div>Save time & effort with our stunning designer-made demos. Easily install any demo with</div>
 <div >a mix and match to craft your dream store.</div>
 </div>
 <div className='content-center branches'>
  <Link to="/"><button className='btn-2'>All</button></Link>
 <Link to="/fashion"><button className='btn-2'>Fashion</button></Link>
<Link  to="/accessories">  <button className='btn-2'>Accessories</button></Link>
 <Link to="/furniture1"> <button className='btn-2'>Furniture</button></Link>
 <Link to="/electronics"><button className='btn-2'>Electronics</button></Link> 
  <Link to="/others"><button className='btn-2'>Others</button></Link>
 </div>
    </div> 
   </>
  )
}

export default Subheaderpage
