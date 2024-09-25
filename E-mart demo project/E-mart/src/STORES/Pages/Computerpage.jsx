import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';
const Computerpage = () => {
 const[selectedProduct,setSelectedProduct] = useState([]);
 const companyHandler = (mango) => {
   if (selectedProduct.includes(mango)) {
     setSelectedProduct(selectedProduct.filter(item => item !== mango));
   } else {
     setSelectedProduct([...selectedProduct, mango]);
   }
 };
 const filteredProduct = selectedProduct.length === 0 ? 
 computerData: computerData.filter((apple) => selectedProduct.includes(apple.company));
  return (
   <>
     <Navbar />
     <div className="pro-select-all">
     <div className="pro-selected">
         {computerData.map((computer)=>(
        
             <div >
               <label>
                 <input type='checkbox'
                 checked={selectedProduct.includes(computer.company)}
                 onChange={()=>companyHandler(computer.company)}
                 />
                 {computer.company}
               </label>
             </div>
         ))}
       </div>
      
      <div className="pageSection">
      {filteredProduct.map((item) => (
  <div key={item.id}> 
    <Link to={`/computer/${item.id}`}>
      <div className="pageImg">
        <img src={item.image} alt={item.model} />
      </div>
    </Link>
    <div className="proModel">
      {item.company}, {item.model}
    </div>
 </div>
))}
      </div>
    </div>
</>
  )
 }
export default Computerpage
