import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
const Subheaderpages = () => {
  return (
<>          <div className='comus'>
             <h3 className='company-name'>ecomus</h3>
           
        <div >
          <ul className='subhead-page-list'>
            <li>Home<KeyboardArrowDownIcon/></li>
            <li>Shop <KeyboardArrowDownIcon/></li>
            <li>Products <KeyboardArrowDownIcon/></li>
            <li>Pages <KeyboardArrowDownIcon/></li>
            <li>blog <KeyboardArrowDownIcon/></li>
            <li>BuyNow <KeyboardArrowDownIcon/></li>
          </ul>
        </div>
        <div >
          <ul className='subhead-page-list1'>
              <li>< SearchRoundedIcon/></li>
              <li><PersonRoundedIcon/></li>
              <li><FavoriteBorderRoundedIcon/></li>
              <li><ShoppingBagRoundedIcon/></li>
         
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Subheaderpages;
