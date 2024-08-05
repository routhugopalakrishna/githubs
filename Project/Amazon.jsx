
import {useNavigate } from "react-router-dom";
import"./Amazon.css";
import { useState } from "react";



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

const Amazon=()=>{
    const navigate =useNavigate();
   // const[mainimg1,setMainimg1]=useState("IMAGES\Apple iPhone 15 (128 GB) -Black.jpg")
   const [mainImage, setMainImage] = useState("https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg");
const[color,setColor]=useState("Black");
const[size,setSize]=useState("128 GB");
const[price,setPrice]=useState(70990);
const[strikeprice,setStrikePrice]= useState(79900);
const[product1,setProduct1]=useState(0);
const[totalprice,setTotalPrice]=useState(0);
const [selectedProduct, setSelectedProduct] = useState("iPhone 15");
 const [startIndex, setStartIndex] = useState(0);

const apple=()=>{
    setProduct1((previousproduct)=>previousproduct+1);
    setTotalPrice((previousprice)=>previousprice+price)
}

const removeappleqty = () => {
   const qty = parseInt(document.getElementById("removeqty").value) ;
   document.getElementById("removeqty").value="0";
       if (product1 >= 0) {
        setProduct1((previousproduct)=>previousproduct-qty);
        setTotalPrice((previousPrice) => previousPrice - price * qty);
    }
};

const contenthide=()=>{
    document.getElementById("hide").style.visibility="hidden";
    document.getElementById("box").style.height="180px";
    document.getElementById("work").innerHTML="How does Exchange work?";
    document.getElementById("work").style.color="blue";
}


const products = {
  "iPhone 15": {
    mainImage: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg",
    prices: { "128 GB": 70990, "256 GB": 80990, "512 GB": 90990 },
    strikePrices: { "128 GB": 79990, "256 GB": 89990, "512 GB": 99990 },
  },
  "iPhone 15 Pro Max": {
    mainImage: "https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg",
    prices: { "128 GB": 99990, "256 GB": 109990, "512 GB": 119990 },
    strikePrices: { "128 GB": 109990, "256 GB": 119990, "512 GB": 129990 },
  },
  "iPhone 15 Pro": {
    mainImage: "https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg",
    prices: { "128 GB": 89990, "256 GB": 99990, "512 GB": 109990 },
    strikePrices: { "128 GB": 99990, "256 GB": 109990, "512 GB": 119990 },
    },
  "iPhone 15 Plus": {
    mainImage: "https://m.media-amazon.com/images/I/71bErtQPC3L._SL1500_.jpg",
    prices: { "128 GB": 79990, "256 GB": 89990, "512 GB": 99990 },
      strikePrices: { "128 GB": 89990, "256 GB": 99990, "512 GB": 109990 },
  },
  "iPhone SE": {
    mainImage: "https://m.media-amazon.com/images/I/61TOWf11+jL._SL1500_.jpg",
    prices: { "128 GB": 39990, "256 GB": 49990, "512 GB": 59990 },
    strikePrices: { "128 GB": 49990, "256 GB": 59990, "512 GB": 69990 },
  },
  "iPhone 14 Plus": {
    mainImage: "https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
    prices: { "128 GB": 69990, "256 GB": 79990, "512 GB": 89990 },
      strikePrices: { "128 GB": 79990, "256 GB": 89990, "512 GB": 99990 },
  },
  "iPhone 14": {
    mainImage: "https://m.media-amazon.com/images/I/31AmCQI36rL._FMpng_SY85_.png",
    prices: { "128 GB": 59990, "256 GB": 69990, "512 GB": 79990 },
    strikePrices: { "128 GB": 69990, "256 GB": 79990, "512 GB": 89990 },
  },
};

const handleProductClick = (product) => {
  setSelectedProduct(product);
  setMainImage(products[product].mainImage);
  setPrice(products[product].prices[size]);
  setStrikePrice(products[product].strikePrices[size]);
};

const handleSizeChange = (newSize) => {
  setSize(newSize);
  setPrice(products[selectedProduct].prices[newSize]);
  setStrikePrice(products[selectedProduct].strikePrices[newSize]);
};
const offers= [
  {
    title: 'Bank Offer',
    description: 'Upto ₹4,000.00 discount on select Credit Cards bank ',
    button: 'offer',
    link: '/Bankoffer',
  },
  {
    title: 'No Cost EMI',
    description: 'Upto ₹3,192.52 EMI interest savings on select Credit Card',
    button: 'emi',
    link: '/EMI',
  },
  {
    title: 'Partner Offers',
    description: 'Get GST invoice and save up to 28% on business purchases.',
    button: 'offer',
    link: '/Bankoffer',
   
  },
  {
    title: 'No Cost EMI',
    description: 'Upto ₹3,192.52 EMI interest savings on select Credit Card',
    button: 'emi',
    link: '/EMI',
  },
];

const handleNext = () => {
  setStartIndex((prevIndex) => (prevIndex + 3) % offers.length);
};

const currentOffers = [
  offers[startIndex],
  offers[(startIndex + 1) % offers.length],
  offers[(startIndex + 2) % offers.length],
];

    return(
        <>
        <div className="displaytopimg">
        <h1>iphone</h1>
        <div onClick={() =>handleProductClick("iPhone 15")}>
        <img   src="https://m.media-amazon.com/images/I/31KzDRVihvL._FMpng_SY85_.png"/>
        <div className="text-top">iPhone 15</div>
        </div>
        
        <div onClick={() =>handleProductClick("iPhone 15 Pro Max")}>
        <img  src="https://m.media-amazon.com/images/I/41m2YFV+fLL._FMpng_SY85_.png"/>
        <div className="text-top">iPhone 15 Pro Max</div>
        </div>
        <div onClick={() =>handleProductClick("iPhone 15 Pro")}>
        <img  src="https://m.media-amazon.com/images/I/41p3L5mNFRL._FMpng_SY85_.png"/>
        <div  className="text-top">iPhone 15 Pro</div>
        </div>
        <div onClick={() =>handleProductClick("iPhone 15 Plus")}>
        <img   src="https://m.media-amazon.com/images/I/31Xp5CQjJTL._FMpng_SY85_.png"/>
        <div  className="text-top">iPhone 15 Plus </div>
        </div>
        <div onClick={() =>handleProductClick("iPhone SE")}>
        <img  src="https://m.media-amazon.com/images/I/317A8QdrwKL._FMpng_SY85_.png"/>
        <div  className="text-top"> iPhone SE </div>
        </div>
        <div onClick={() =>handleProductClick("iPhone 14 Plus")}>
        <img   src="https://m.media-amazon.com/images/I/31AmCQI36rL._FMpng_SY85_.png"/>
        <div className="text-top">iPhone 14 Plus</div>
        </div>
        <div onClick={() =>handleProductClick("iPhone 14")}>
        <img  src="https://m.media-amazon.com/images/I/31AmCQI36rL._FMpng_SY85_.png"/>
        <div  className="text-top">iPhone 14 </div>
        </div>
        </div>
<div className="display">

       <div>
           <img className="mobile-img" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg"/>
           <img className="mobile-img" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/51wKeZuX6rL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/51wKeZuX6rL._SL1500_.jpg"/>
           <img className="mobile-img" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg"/>
           <img className="mobile-img" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg"/>
           <img className="mobile-img"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg")}}  src="https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg"/>
           <img className="mobile-img"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/613xywt-yvL._SL1500_.jpg")}}  src="https://m.media-amazon.com/images/I/613xywt-yvL._SL1500_.jpg"/>
       </div> 
       <div>
            <img className="product-img"src={mainImage} alt="i phone 15 mobile image"/>
       </div>
       <div >
          <div className="product-name">Apple {selectedProduct} ({size}) -{color} </div>   
          <div className="root-to-store" onClick={() => navigate("/AppleStore")}>Visit the Apple Store </div>
          <div className="ratinng-chart">4.5<img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png"/>| 1,891 choice | Search this page</div>
          <img  className=" customer-choice"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspk-sblLRzetxUBDTOY31HtY8mvOX1n0ENw&s"/>
          <div className="custemers-buying-product">1K+ bought in past month</div>
           <hr></hr>
          <div className="product-price"><sup className="product-mainprice">₹</sup>{price}</div>
          <div className="product-strike-price">M.R.P:<strike>₹1{strikeprice}</strike></div>
          <div className="product-taxes">Inclusive of all taxes</div>
         <b>EMI</b><span className="product-taxes"> starts at ₹3,437. No Cost EMI available </span>
          <hr></hr>
          <div className="product-offer">Offers</div>
          <div className="offer-boxes-display">
               {currentOffers.map((offer, index) => (
                    <div key={index} className="offers-box">
                        <div className="product-bankoffer">{offer.title}</div>
                        <span className="product-discount">{offer.description}</span>
                       <div> <button className="offer-button"
               
                onClick={() => navigate(offer.link)}
              >
                {offer.button}
              </button></div>
                    </div>
                    
                ))}
          
              
            <button onClick={handleNext} >Next</button>
               </div>  

               
           <hr></hr>
           <div className=" product-transpotation">
              <div><img className="product-delivery-img" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"></img><div > days Service<br></br> Centre Replacement</div></div>
              <div><img className="product-delivery-img" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"/><div>Free Delivery</div></div>
              <div><img className="product-delivery-img"  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" /><div> Warrenty policy</div></div>
              <div><img className="product-delivery-img" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"/><div>Top Brand</div></div>
              <div><img className="product-delivery-img" src="https://m.media-amazon.com/images/G/31/VAS/TrustWidget/Service._CB607276514_.png"/><div>Installation<br></br>available</div></div>
              <div><img  className="product-delivery-img"src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"/><div>Amazon<br></br> Delivered</div>  </div>
           </div>
           <hr></hr>
           <span className="product-colour-name"> Colour:</span><strong>{color}</strong>
           <div className="displaycolors">
              <div className="button-color"  onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg");setColor("Black")}}><p className="mobile-color"style={{backgroundColor:"#A8A8A8"}}></p></div> 
              <div className="button-color"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg");setColor("Blue")}}><p  className="mobile-color"style={{backgroundColor:"#91C5EA"}}></p></div>
              <div className="button-color" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg");setColor("Green")}}><p  className="mobile-color"style={{backgroundColor:"#98FB98"}}></p></div>
              <div className="button-color" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg");setColor("Pink")}}><p  className="mobile-color" style={{backgroundColor:" #FFB6C1"}}></p></div> 
              <div className="button-color"  onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71REplb5oZL._SL1500_.jpg");setColor("Yellow")}}><p className="mobile-color" style={{backgroundColor:" #FFFFE0"}}></p></div>
           </div> 
           <br></br>
           <span className="product-colour-name">Size:</span><strong>{size}</strong>
           <div className="displaysize">
              <button  className="button-size" onClick={()=>{handleSizeChange("128 GB")}}>128 GB</button>
              <button  className="button-size" onClick={()=>{handleSizeChange("256 GB")}}>256 GB</button>
              <button  className="button-size" onClick={()=>{handleSizeChange("512 GB")}}>512 GB</button>
           </div> 
          
           <div  className="product-features">
            <span  className="brand-bold">Brand</span>
            <span className="brand-space">Apple</span>
            </div> 
       
            <div className="product-features">
              <span className="brand-bold">Operating<br></br> System</span>
              <span className="brand-space">iOS</span>
              </div> 
              <div className="product-features">
                <span className="brand-bold">Memory Storage<br></br> Capacity</span>
                <span className="brand-space">{size}</span>
                </div> 
                <div className="product-features">
                  <span className="brand-bold">Screen Size</span>
                  <span className="brand-space">6.1 Inches</span>
                </div>
                <div className="product-features">
                  <span className="brand-bold">Model Name</span>
                  <span className="brand-space">{selectedProduct}</span>
                </div>
                 <hr></hr>
           <div className="contentbox">
             <ul className="contentfont">
              <h3><b>About this item</b></h3>
              <li>INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.1" Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.</li>
              <li>48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.</li>
              <li>48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.</li>
              <li>POWERHOUSE A16 BIONIC CHIP — The superfast chip powers advanced features like computational photography, fluid Dynamic Island transitions, and Voice Isolation for phone calls. And A16 Bionic is incredibly efficient to help deliver great all-day battery life.</li>
             </ul>
           </div>
        </div>
         <div className="product-contentbox" id="box">
          <div className="contentbox-space">
                <div className="bgcolor" > 
                   <span className="exchange">With Exchange</span>   <input className="checkbox" type="checkbox" onClick={()=>{contenthide()}}/>
                   <span className="product-withexchange">Up to   ₹44,100 off</span> 
                </div>
                <div id="work"></div>
                <span className="exchange" >Without Exchange </span><input className="checkbox1"type="checkbox"/>
                <span  className="product-withexchange">₹{price}  <strike className="pricecolor">₹{strikeprice}</strike> </span> 
                   <div id="hide">
                      <span>FREE delivery</span>
                      <div className=" stock-fontcolor">In stock</div>
                      <div>
                        <span className="shipment">Ships from</span>
                        <span className="websitename"> Amazon</span>
                        </div>
                        <div>
                          <span className="shipment">Sold by</span>
                          <span className="websitename">Appario Retail Private Ltd</span>
                      </div>
                     <div><button className="addtocart-button" onClick={()=>{apple()}}>Add to Cart </button></div> 
                     <div> <button className="buynow-button">Buy Now</button></div>
                      <div><input type="checkbox"/>Add gift options</div>     
                    </div>
                    </div>
          </div>
          <div>
             <h4>SUBTOTAL</h4>
            {product1 > 0 && (
             <div>
               <img className="orderedimg" src={mainImage} />
               <p>Apple iPhone 15 ({size}) - {color}</p>
             </div>
              )}
             <p><sup className="product-mainprice" >₹</sup>{totalprice}</p>
             {product1 > 0 && (
             <p> Quantity: {product1}</p>
             )}
          <div>
        <select id="removeqty">
    <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <button onClick={removeappleqty}><img className=" delete" src="https://m.media-amazon.com/images/G/31/x-locale/shopping-cart/trash_icon._CB427526449_.png"/></button>
  </div>
</div> 
  </div>
<img className="imagetop" src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_1._CB575346353_.jpg"/>
    <img className="imagetop1" src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_2._CB575346353_.jpg" /> 
     <img  className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_3._CB575346353_.jpg"/>
      <img  className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R12FCC1._CB575346353_.jpg"/>
        <img   className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R14A351._CB575346353_.jpg"/>
        <img   className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R184641._CB575346353_.jpg"/>
        <img   className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R1807_4._CB575346353_.jpg"/>
        <img   className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R15A981._CB575346353_.jpg"/>
        <img   className="imagetop1"src="https://m.media-amazon.com/images/G/31/img21/Wireless/Madhav/september/Apple/River/R105641._CB575346353_.jpg"/>
      
        </>
    )
}
export default Amazon; 