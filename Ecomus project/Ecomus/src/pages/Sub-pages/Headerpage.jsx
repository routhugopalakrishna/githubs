import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Headerpage = () => {
    function countryvisible() {
        document.getElementById("countries").style.visibility = "visible";
    }
    function countrieshidden() {
        document.getElementById("countries").style.visibility = "hidden";
    }
    function langvisible() {
        document.getElementById("country-lang").style.visibility = "visible";
    }
    function langhidden() {
        document.getElementById("country-lang").style.visibility = "hidden";
    }
  return (
    <>
    <div className='image-style'>
         <div className='socialmedia' >
           <li><FacebookIcon/></li>
           <li><XIcon/></li>
           <li><InstagramIcon/></li>
           <li><PinterestIcon/></li>
           <li><TwitterIcon/></li>
         </div>
        <div className='display-corner'>
           <div><img className='flag' src='https://up.yimg.com/ib/th?id=OIP.v_stsqLVTpv-C8zSGfouzQHaGL&pid=Api&rs=1&c=1&qlt=95&w=140&h=116'/>USD<KeyboardArrowDownIcon onClick={countryvisible} onDoubleClick={countrieshidden}/>
              <ul  id='countries'>
                <li><img className='flag'src='https://up.yimg.com/ib/th?id=OIP.mO2EfRE-TxiZgZ20kE6aOwHaE7&pid=Api&rs=1&c=1&qlt=95&w=172&h=114'/>France</li>
                <li><img className='flag' src="https://up.yimg.com/ib/th?id=OIP.oskcEXfyvCxT-e352jXOVgHaEc&pid=Api&rs=1&c=1&qlt=95&w=172&h=103"/>germeny</li>
                <li> <img className='flag' src="https://up.yimg.com/ib/th?id=OIP.v_stsqLVTpv-C8zSGfouzQHaGL&pid=Api&rs=1&c=1&qlt=95&w=140&h=116"/>United States</li>
                </ul>
            </div>
      

             <div className="lang">ENG<KeyboardArrowDownIcon onClick={langvisible} onDoubleClick={langhidden}/>
                <ul id='country-lang'>
                  <li>Hindi</li>
                  <li>TElugu</li>
                  <li>Urdu</li>
                </ul>
             </div>
             </div>
    </div>
    

    </>
  )
}

export default Headerpage;
