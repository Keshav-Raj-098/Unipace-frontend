import React from "react"; 
import { useState } from "react";
import tick from "../../assets/tick.svg"


const SearchBar = ({ placeholder, icon,setFunction }) => (

    <div
      className='flex flex-row justify-start items-center px-3 gap-2'
  
    >
      {icon}
      <input type='text'
      onChange={(e)=>{setFunction(e.target.value)}}
        placeholder={placeholder}
        style={{
          fontSize: "16px", fontWeight: "400",
          fontFamily: "Epilogue, sans-seri", color: "black",
          lineHeight: "22.8px",
          borderBottom: "1px solid #eaeef5",
          outline: "none"
          
        }} />
    </div>
  
  
  )
  
  const Click = ({ name, setFunction, value }) => {
  
    const [click, setClick] = useState(false);
  
  
    return <div
      className='flex flex-row items-center mt-2'
      style={{
         fontWeight: "400", color: "rgba(81, 91, 111, 1)",
        fontFamily: "Epilogue, sans-seri",gap:"8px"
  
      }}
  
    >
      <span
        className='hover:cursor-pointer'
        style={{ height: "20px", width: "20px",
           border: (click!==true) && "2px solid #d6ddeb",
          borderRadius:"6px"
          }}
        onClick={() => {
          if (click === false) { setClick(true) }
          else { setClick(false); 
            // setFunction({ value })
           }
        }}
      >
        {click && <img src={tick} alt='tick'/>}
  
  
      </span>
      <span style={{fontSize:"15px"}}>{name}</span>
    </div>
  }
  
  export {SearchBar,Click}