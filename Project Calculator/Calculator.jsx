import"./Calculator.css"

import { useState } from "react";
function Calculator(){
    const[value,setValue]=useState("");


    function Calculator (event){
        setValue(value+event);
    }

    function eventequal(){
let values=eval(value);
setValue(values);
    }
    function event(){
        setValue("");
    }
    return(
        <div className="cal1">
<div >
<input  className="cal2" value={value} type="text"></input>
</div>
<div className="buttons">
<div >
<button className="calculatorbutton" onClick={()=>{Calculator("1")}}>1</button>
<button className="calculatorbutton"onClick={()=>{Calculator("2")}}>2</button>
<button className="calculatorbutton"onClick={()=>{Calculator("3")}}>3</button>
<button className="calculatorbutton"nClick={()=>{Calculator("+")}}>+</button>
</div>
<div>
    <button className="calculatorbutton" onClick={()=>{Calculator("4")}}>4</button>
    <button className="calculatorbutton" onClick={()=>{Calculator("5")}}>5</button>
    <button  className="calculatorbutton"onClick={()=>{Calculator("6")}}>6</button>
    <button className="calculatorbutton"onClick={()=>{Calculator("-")}}>-</button>
</div>
<div>
    <button className="calculatorbutton" onClick={()=>{Calculator("7")}}>7</button>
    <button className="calculatorbutton"onClick={()=>{Calculator("8")}}>8</button>
    <button className="calculatorbutton"onClick={()=>{Calculator("9")}}>9</button>
    <button className="calculatorbutton"onClick={()=>{Calculator("*")}}>*</button>
</div>
<div>
    <button className="calculatorbutton"onClick={()=>{Calculator("/")}}>/</button>
    <button className="calculatorbutton"onClick={()=>{Calculator("0")}}>0</button>
    <button  className="calculatorbutton"onClick={()=>{eventequal("=")}}>=</button>
    <button  className="calculatorbutton"onClick={()=>{event("")}}>c</button>
</div>
        </div>
        </div>
    )
}

 export default Calculator;