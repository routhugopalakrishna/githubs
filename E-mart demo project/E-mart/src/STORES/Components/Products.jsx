import React from 'react'
import Mobiles from "./Mobiles";
import Computers from './Computers';
import Books from './Books';
import TV from './TV';
import AC from './AC';
import Fridge from './Fridge';
import Furniture from './Furniture';
import Kitchen from './Kitchen';
import { Route,Routes } from 'react-router-dom';
import MenWear from './MenWear';
import WomenWear from './WomenWear';
const Products = () => {
  return (
  <> 
<Mobiles/>
<Computers />
<Books />
<MenWear />
<WomenWear />
<TV />
<AC />
<Fridge />
 <Furniture />  
 <Kitchen />
 
 
    </>
  )
}

export default Products;
