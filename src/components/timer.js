
import React, { useState, useEffect } from 'react';
import rocket from "../assets/rocket.svg"


const Timer = (props) => {

  const {deadlinedate,month,year,hour,minutes,newscript} = props

  const [seconds, setSeconds] = useState(59 - new Date().getSeconds());
  var FinalDate = true ;


  function getDaysInMonth(month, year) { return new Date(year, month, 0).getDate(); }


  const date = new Date();
  const currentdate = date.getDate();
  const currentmonth = parseInt(date.getMonth() + 1);
  const currentyear = date.getFullYear();
  const hr = date.getHours();
  const min = date.getMinutes();



  var daysremaining = parseInt(deadlinedate) - currentdate;
  var monthremaining = month - currentmonth;
  var yearremaining = year - currentyear;
  var hrremaining = hour - hr;
  var minremaining = minutes - parseInt(min + 1);
  var secremaining = new Date().getSeconds();

  

  if (yearremaining > 0) {

    daysremaining = null;
    hrremaining = null;
    minremaining = null;
    secremaining = null;


    let x = parseInt(12 - currentmonth) + parseInt(month) + parseInt(yearremaining - 1) * 12;
    yearremaining = Math.floor(x / 12);
    monthremaining = x % 12;
    if (yearremaining === 0) { yearremaining = null; }
  }




  else if (yearremaining === 0) {

    yearremaining = null;
    monthremaining = null;

    if (month >= currentmonth) {

      let z = 0;
      let a = 0;

      if ((month - currentmonth) > 0) {

        for (let i = currentmonth + 1; i < month; i++) { z = z + getDaysInMonth(i, currentyear); }

        a = (getDaysInMonth(currentmonth, currentyear) - parseInt(currentdate)) + parseInt(deadlinedate) + z;
      }

      else if (parseInt(month) === currentmonth) {
        a = daysremaining
      }


      let totalhr = ((a - 1) * 24) + parseInt(24 - hr) + parseInt(hour);

      // console.log(totalhr);


      if (minremaining < 0) {
        totalhr--;
        minremaining = parseInt(60 - min) + parseInt(minutes);
      }

      hrremaining = (totalhr > 24) ? (totalhr % 24) : totalhr
      daysremaining = Math.floor(totalhr / 24);


      if (daysremaining < 0) {FinalDate = false;}


    }
    else{FinalDate=false;}}


    
  else {
    FinalDate = false
  }
    
  useEffect(() => {
    let myInterval = setInterval(() => {
      setSeconds(parseInt(59 - new Date().getSeconds()));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });


  return (
    
    
    <div className='flex justify-center'>

    {(FinalDate === true) ? 
      
     (
<div className='flex flex-col  p-5  
      rounded-xl ' style={{
        
        backgroundColor:"#1976d2",
        boxShadow:"#7a8b91 0px 0px 9px 6px",
        marginTop:"30vh"
        


      }}>


     <span  className='text-white mb-2 mt-4 font-bold text-xl flex justify-center'>
     Get ready to land your dream internship!
   
     </span>
     <div className='flex flex-row align-middle'>

     <span  className='text-white mb-10 mt-4  font-bold' style={{fontSize:"14px"}}>
     Complete your profile today to be seen by top companies 
  
     </span>
     <img src={rocket} alt="" height="55px" width="30px" 
     style={{position:"relative", top:"-15px"}}></img>

     </div>
     


    <div className="grid grid-flow-col gap-5 text-center auto-cols-max 
    justify-center">

      {yearremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white" >
          <span className="countdown font-mono text-5xl">
          <span style={{"--value":yearremaining}}></span>
          </span>
          Year
        </div>
      )}

      {monthremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white">
          <span className="countdown font-mono text-5xl">
          <span style={{"--value":monthremaining}}></span>
          </span>
          Months
        </div>
      )}

      {daysremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white" >
          <span className="countdown font-mono text-5xl">
          <span style={{"--value":daysremaining}}></span>
          </span>
          Days
        </div>
      )}

      {hrremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white" >
          <span className="countdown font-mono text-5xl">
          <span style={{"--value":hrremaining}}></span>
          </span>
          Hours
        </div>
      )}

      {minremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white">
          <span className="countdown font-mono text-5xl">
          <span style={{"--value":minremaining}}></span>
          </span>
          Min
        </div>
      )}

      {secremaining != null && (
        <div className="flex flex-col p-2   border-solid border-white border-2 rounded-xl text-white" >
          <span className="countdown font-mono text-5xl">
            <span style={{"--value":seconds}}></span>
          </span>
          Sec</div>)}
    </div> 
    </div>)
    
  :  (<div className='text-black text-5xl'>{newscript}</div>)
  }
      </div>
  )

}

export default Timer;






  //  put the hr in 24-hr format
  //  <Timer deadlinedate={1} month={7} year={2024} hour={12} minutes={0}/>