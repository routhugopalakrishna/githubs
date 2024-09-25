import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import  LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; 
import Products from './Products';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navsection" >
        <div>
          <h1 onClick={() => navigate("/")}>
            <HomeIcon color="primary" />
            G-Mart
          </h1>
        </div>
        <div className='location'>
        <h4 >
          <LocationOnTwoToneIcon style={{ marginRight: '5px' }} />
          Location: India
        </h4>
        <h4>
          <MyLocationIcon style={{ marginRight: '5px' }} />
          Update Location
        </h4>
      </div>
        <div className="search-boxs">
             
                <input className='search-box' type="text"
                placeholder="Search..."
              
               />
              <button className='search-button'>
              <SearchIcon color="primary" />
              </button>
             
        </div>
       <div>Returns<br/> & Orders</div><div className="user"><div className="  storecart" 
      ><LockOpenIcon /> SignIn / <LockIcon />  SignUp</div>
          <div className="storecart"><ShoppingCartIcon color="secondary" /> Cart</div>
        </div>
      </div>
      <div className="submenu">
        <ul>
          <li >
          <Link to="/mobiles" className="storecart">Mobiles <KeyboardArrowRightIcon /></Link> 
          </li>
          <li>
            <Link to="/computers"className="storecart">Computers <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/books" className="storecart">Books <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/man"className="storecart">MenWear <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/woman"className="storecart">WomenWear <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/tv"className="storecart">TV's <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/ac"className="storecart">AC's <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/fridge"className="storecart">Fridge <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/furniture"className="storecart">Furniture <KeyboardArrowRightIcon /></Link>
          </li>
          <li>
            <Link to="/kitchen"className="storecart">Kitchen <KeyboardArrowRightIcon /></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;