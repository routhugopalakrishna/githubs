import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Brandingpage = () => {
  return (
    <div>
        <div className='brands'>
<div className="servicebox">
  <div >
     <LocalShippingIcon fontSize='large'/>
     <h3>Free Shipping</h3>
     <div>Free shipping over order $120</div>
  </div>
</div>
<div className="servicebox">
<div>
     < PaymentIcon fontSize='large'/>
     <h3>Flexible Payment</h3>
     <div> Pay with Multiple Credit Cards</div>
  </div>
</div>
<div className="servicebox">
<div >
     < KeyboardReturnIcon  fontSize='large'/>
     <h3>14 Day Returns</h3>
     <div>Within 30 days for an exchange</div>
  </div>
</div>
<div className="servicebox">
<div >
     <SupportAgentIcon  fontSize='large'/>
     <h3>Premium Support</h3>
     <div>Outstanding premium support</div>
  </div>
</div>
        </div>
       <div className='brands'>
       <img className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-01.png" alt="brand" />
       <img  className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-02.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-03.png" alt="brand" />
        <img  className='brands-img' src="https://themesflat.co/html/ecomus/images/brand/brand-04.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-05.png" alt="brand" />
        <img   className='brands-img'src="https://themesflat.co/html/ecomus/images/brand/brand-06.png" alt="brand" />
      </div>
      <div className='footerdata' >
        <div className='footer'>
           <div><img src='https://themesflat.co/html/ecomus/images/logo/logo.svg'/></div>
        <div>Address: 1234 Fashion Street, Suite 567,</div>
        <div>New York, NY 10001</div>
        <div>Email:<b>info@fashionshop.com</b></div>
        <div>Phone:<b>(212) 555-1234</b> </div>
        <div>Get direction </div>
        <div className='socialmedia' >
           <li><FacebookIcon/></li>
           <li><XIcon/></li>
           <li><InstagramIcon/></li>
           <li><PinterestIcon/></li>
           <li><TwitterIcon/></li>
         </div>
        </div>
        <div className='footer'>
        <h3>Help</h3>
        <div>Privacy Policy</div>
        <div>Returns + Exchanges</div>
        <div>Shipping</div>
        <div>Terms & Conditions</div>
        <div>FAQ’s</div>
        <div>Compare</div>
        <div>My Wishlist</div>
        </div>
        <div className='footer'>
            <h3>About us</h3>
            <div>Our Story</div>
            <div>Visit Our Store</div>
            <div>Contact Us</div>
            <div>Account</div>
        </div>
        <div className='footer'>
            <h3>Sign Up for Email</h3>
            <div>Sign up to get first dibs on new arrivals, sales,</div>
            <div> exclusive content, events and more!</div>
            <div ><input style={{height:"40px"}} type='text' placeholder='Enter Your email.....'/><button  className='subscribe-button'>Subscribe</button></div>
             </div>
        </div>
        </div>
     
     
  )
}

export default Brandingpage
