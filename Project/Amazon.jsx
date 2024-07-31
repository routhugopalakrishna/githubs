
import {useNavigate } from "react-router-dom";
import"./Amazon.css";
import { useState } from "react";



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

const Amazon=()=>{
    const navigate =useNavigate();
   // const[mainimg1,setMainimg1]=useState("IMAGES\Apple iPhone 15 (128 GB) -Black.jpg")
   const [mainImage, setMainImage] = useState("https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg");
const[color,setColor]=useState("black");
const[size,setSize]=useState("128 GB");
const[price,setPrice]=useState(70990);
const[strikeprice,setStrikePrice]= useState(79990);
const[product1,setProduct1]=useState(0);
const[totalprice,setTotalPrice]=useState(0);

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
    document.getElementById("box").style.height="200px";
    document.getElementById("work").innerHTML="How does Exchange work?";
    document.getElementById("work").style.color="blue";
}

    return(
        <>
        <div className="displaytopimg">
        <h1>IPHONE</h1>
        <div onClick={() => navigate("/Amazon")}>
        <img  class src="https://m.media-amazon.com/images/I/31KzDRVihvL._FMpng_SY85_.png"/>
        <p className="top">iPhone 15</p>
        </div>
        
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/41m2YFV+fLL._FMpng_SY85_.png"/>
        <p  className="top">iPhone 15 Pro Max</p>
        </div>
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/41p3L5mNFRL._FMpng_SY85_.png"/>
        <p  className="top">iPhone 15 Pro</p>
        </div>
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/31Xp5CQjJTL._FMpng_SY85_.png"/>
        <p  className="top">iPhone 15 Plus </p>
        </div>
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/317A8QdrwKL._FMpng_SY85_.png"/>
        <p  className="top"> iPhone SE </p>
        </div>
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/31yeWazyDuL._FMpng_SY85_.png"/>
        <p  className="top">iPhone 14 Plus</p>
        </div>
        <div onClick={() => navigate("/AppleStore")}>
        <img  class src="https://m.media-amazon.com/images/I/31AmCQI36rL._FMpng_SY85_.png"/>
        <p  className="top">iPhone 14 </p>
        </div>
        </div>
    
    <div className="display">
   <span className=" mobilesimgline">
    <img className="mobileimg" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg"/>
    <img className="mobileimg" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/51wKeZuX6rL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/51wKeZuX6rL._SL1500_.jpg"/>
    <img className="mobileimg" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg"/>
    <img className="mobileimg" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg")}} src="https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg"/>
    <img className="mobileimg"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg")}}  src="https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg"/>
    <img className="mobileimg"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/613xywt-yvL._SL1500_.jpg")}}  src="https://m.media-amazon.com/images/I/613xywt-yvL._SL1500_.jpg"/>

   </span>

        <div>
        <img
            className="img"
            src={mainImage}
            alt="Main Display"
          />
        </div>

        <span className="productheading">
            <h2>Apple iPhone 15 ({size}) -{color}</h2>
            <p className="font" onClick={() => navigate("/AppleStore")}>Visit the Apple Store </p>
            <p className="font1"><img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Star_rating_4.5_of_5.png/800px-Star_rating_4.5_of_5.png"/>| 1,891 choice | Search this page</p>
        <img  className="choice"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspk-sblLRzetxUBDTOY31HtY8mvOX1n0ENw&s"/>
        <p className="font2">1K+ bought in past month</p>
        <hr></hr>
        <p className="pricesize">₹{price}</p>
        <p className="font3"lass>M.R.P:<strike>₹{strikeprice}</strike></p>
        <p>Inclusive of all taxes</p>
        <p className="font4"><b>EMI</b> starts at ₹3,437. No Cost EMI available </p>
        <hr></hr>
        <h4 className="font5">Offers</h4>
        <div className="offerdisplay">
       <div  className="offersbox1">
       <b>Bank Offer</b>
       <p className="font5"> <br></br>Upto ₹4,000.00 discount on select Credit Cards</p>
      <button  className="font11"onClick={()=>navigate("/Bankoffer")}>offer</button>
       </div>
       <div  className="offersbox1">
    <b>No Cost EMI</b>
    
    <p className="font5">  <br></br>Upto ₹3,192.52 EMI interest savings on select Credit Card</p>
    <button onClick={()=>navigate("/EMI")}>emi</button>
    </div>
    <div  className="offersbox1">
    <b>Partner Offers</b>
<p className="font5"> <br></br>Get GST invoice and save up to 28% on business purchases. Sign up for free</p>
    </div>
    
</div>
<hr></hr>
<div className="transportation">
    <div><img className="deliveryimg" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"></img><p className="font10">7 days Service<br></br> Centre Replacement</p></div>&nbsp;&nbsp;&nbsp;
    <div> <img className="deliveryimg" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"/><p className="font10">&nbsp;Free Delivery</p></div>&nbsp;&nbsp;&nbsp;
    <div><img className="deliveryimg"  src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" /><p className="font10"> Warrenty policy</p></div>&nbsp;&nbsp;&nbsp;
<div><img className="deliveryimg" src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"/><p className="font10">Top Brand</p></div>&nbsp;&nbsp;&nbsp;
<div><img className="deliveryimg" src="https://m.media-amazon.com/images/G/31/VAS/TrustWidget/Service._CB607276514_.png"/><p className="font10">Installation<br></br>available</p></div>&nbsp;&nbsp;&nbsp;
<div><img  className="deliveryimg"src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"/><p className="font10">Amazon<br></br> Delivered
</p></div>
</div>
<hr></hr>
<p> Color:{color}</p>
   <div className="displaycolors">
   <button className="colorbtn" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg");setColor("Black")}}><p className="mobilecolor"style={{backgroundColor:"#A8A8A8"}}></p></button> 
    <button className="colorbtn"onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg");setColor("Blue")}}><p  className="mobilecolor"style={{backgroundColor:"#91C5EA"}}></p></button>
    <button className="colorbtn" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg");setColor("Green")}}><p  className="mobilecolor"style={{backgroundColor:"#98FB98"}}></p></button>
    <button className="colorbtn" onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg");setColor("Pink")}}><p  className="mobilecolor" style={{backgroundColor:" #FFB6C1"}}></p></button> 
    <button className="colorbtn"  onClick={()=>{setMainImage("https://m.media-amazon.com/images/I/71REplb5oZL._SL1500_.jpg");setColor("Yellow")}}><p className="mobilecolor" style={{backgroundColor:" #FFFFE0"}}></p></button>
    </div> 
<p>Size:{size}</p>
<div className="displaysize">
<button  className="buttonsize" onClick={()=>{setSize("128 GB");setPrice(70990);setStrikePrice(79900)}}>128 GB</button>
<button  className="buttonsize" onClick={()=>{setSize("256 GB");setPrice(80900);setStrikePrice(89900)}}>256 GB</button>
<button  className="buttonsize" onClick={()=>{setSize("512 GB");setPrice(99290);setStrikePrice(109900)}}>512 GB</button>

</div>
<p><b>Brand</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apple</p>
<p><b>Operating System</b>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iOS</p>
<p><b>Memory Storage<br></br> Capacity</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128 GB</p>
<p><b>Screen Size	</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1 Inches</p>
<p><b>Model Name</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iPhone 15</p>	
<hr></hr>
<div className="contentbox">
<ul className="contentfont">
<h3><b>About this item</b>
</h3>
 
    <li>INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It’s splash, water, and dust resistant. The Ceramic Shield front is tougher than any smartphone glass. And the 6.1" Super Retina XDR display is up to 2x brighter in the sun compared to iPhone 14.</li>
    <li>48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.</li>
    <li>
    48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail. The 2x optical-quality Telephoto lets you frame the perfect close-up.</li>
    <li>POWERHOUSE A16 BIONIC CHIP — The superfast chip powers advanced features like computational photography, fluid Dynamic Island transitions, and Voice Isolation for phone calls. And A16 Bionic is incredibly efficient to help deliver great all-day battery life.</li>
    </ul>




</div>
        </span>
        <div className="box" id="box">
            <div className="textleft">
                <div className="bgcolor" > 
     <h4>With Exchange <input className="checkbox" type="checkbox" onClick={()=>{contenthide()}}/></h4>  
<p className="font6">Up to   ₹44,100 off </p>

</div>
<h4 id="work"></h4>
<h4 >Without Exchange<input className="checkbox1"type="checkbox"/></h4>
  <p className="font6">₹{price}  <strike className="pricecolor">₹{strikeprice}</strike> </p> 
  <div id="hide">
    <p>FREE delivery</p>
  <p className="fontcolor">In stock</p>
 
  <span className="font7">
<p>Ships from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon</p>
<p>Sold by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Appario Retail Private Ltd</p>

</span>
<button className="button1" onClick={apple}>Add to Cart</button>
<button className="button2">Buy Now</button>
<p><input type="checkbox"/>Add gift options</p>
</div>
</div>
        </div>

      <span>
  <h3>SUBTOTAL</h3>
  {product1 > 0 && (
    <div>
      <img className="orderedimg" src={mainImage} />
      <p>Apple iPhone 15 ({size}) - {color}</p>
      
    </div>
  )}
  <p>₹{totalprice}</p>
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
    <button onClick={removeappleqty}>button</button>
  </div>
 
</span>
      

        
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