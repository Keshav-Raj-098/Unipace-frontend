import React from 'react';
import { useMediaQuery } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./buttonstyle.css"
import {LinearProgress,CircularProgress} from '@mui/material';
import { useState,useEffect } from 'react';

const Dot = () => (
  <span
    style={{ height: "4px", width: "4px", borderRadius: "50%", backgroundColor: "grey" }}
  ></span>
)

function JobListing({ logo, companyName, role,  detailsButtonClick, applyButtonClick, status, location, changeColor,totalAvailable,totalApplied }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));



  const [percentSeatAvailable, setPercentSeatAvailable] = useState(0);
  const [isLoading, setisLoading] = useState(true);



  useEffect(() => {
    
    if (totalAvailable > 0) {
      setPercentSeatAvailable(parseInt((totalApplied / totalAvailable) * 100));
      setisLoading(false)
    }
  }, [totalAvailable, totalApplied]);

  useEffect(()=>{ {if(role) setisLoading(false)}},[role])
  




  const JobApplied = () => (
    <div
      style={{
        width: "100%", height: "125px", marginBottom: "10px",
        display: "flex", flexDirection: "row", justifyContent: "space-between",
        padding: "30px 20px", borderRadius: "10px",
        backgroundColor: changeColor && "rgba(248, 248, 253, 1)"

      }}
    >
      {isLoading ? 
        <div className='w-full h-full flex flex-row justify-center align-middle'>
          <CircularProgress size={"30px"}/> </div>:
          (
      <>
      <div
        style={{ display: "flex", flexDirection: "row", gap: "5px", width: "50%" }}
      >


        <div
          style={{ height: "80px", width: "80px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}
        >
          <img src={logo} alt="Company Icon" height="55px" width="55px" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", justifyContent: "start" }}

        >
          <span
            style={{
              color: "rgba(37, 50, 75, 1)", fontSize: "18px", fontWeight: "700",
              fontFamily: "Epilogue, sans-seri"
            }}
          >{role}</span>
          <span
            style={{
              display: "flex", flexDirection: "row", alignItems: "center", gap: "5px",
              color: "rgba(124, 132, 147, 1)", fontSize: "16px", fontWeight: "400",
              fontFamily: "Epilogue, sans-seri"
            }}
          >
            <span

            >{companyName}</span>
            <Dot />
            <span>{location}</span>
            <Dot />
            <span>Full-time</span>
          </span>

        </div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <span
          style={{
            color: "rgba(37, 50, 75, 1)", fontSize: "16px", fontWeight: "500",
            fontFamily: "Epilogue, sans-seri"
          }}
        >Date Applied</span>
        <span
          style={{
            color: "rgba(124, 132, 147, 1)", fontSize: "16px", fontWeight: "500",
            fontFamily: "Epilogue, sans-seri"
          }}
        >23 Jul 2024</span></div>

      <div
        style={{ width: "15%" }}>
        <span className={`basic ${(status || "").replace(/\s+/g, '')} flex flex-row justify-center`}
          style={{
            fontSize: "14px", fontWeight: "600",
            fontFamily: "Epilogue, sans-seri"
          }}
          onClick={()=>{console.log((status || "").replace(/\s+/g, ''));}}
        >{status}</span>

      </div>
      <div
        style={{ width: "10%" }} 
        className='flex flex-row justify-center'
        >
        <MoreHorizIcon className='hover:cursor-pointer'
          onClick={detailsButtonClick} />

      </div></>)}

    </div>
  );



 

  const JobNotApplied = () => (
    <div
      style={{
        width: "100%", marginBottom: "10px", border: "1px solid rgba(214, 221, 235, 1)",
        display: "flex", flexDirection: "row", justifyContent: "space-between",
        padding: "0px 22px", backgroundColor: !changeColor && "rgba(248, 248, 253, 1)",
        borderRadius: "10px",paddingTop:"24px",paddingBottom:"5px"

      }}
    >
        {isLoading ? 
        <div className='w-full h-full flex flex-row justify-center align-middle'>
          <CircularProgress size={"30px"}/> </div>:
      (<>
      <div
        style={{ display: "flex", flexDirection: "row", gap: "5px", width: "50%" }}
      >


        <div
          style={{ height: "80px", width: "80px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}
        >
          <img src={logo} alt="Company Icon" height="55px" width="55px" />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", justifyContent: "start", gap: '3px' }}

        >
          <span
            style={{
              color: "rgba(37, 50, 75, 1)", fontSize: "16px", fontWeight: "700",
              fontFamily: "Epilogue, sans-seri"
            }}
          >{role}</span>
          <span

            style={{
              display: "flex", flexDirection: "row", alignItems: "center", gap: "5px",
              color: "rgba(124, 132, 147, 1)", fontSize: "15px", fontWeight: "400",
              fontFamily: "Epilogue, sans-seri"
            }}
          >
            <span
            >{companyName}</span>
            <Dot />
            <span>{location}</span>

          </span>

          <div className='flex flex-row gap-2' >
            <span className={`basic2 time`}>Full-time</span>
            <span className={`basic2 Marketing`}>Marketing</span>
            <span className={`basic2 Design`}>Design</span>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-2 w-auto'>
        <span 
        className='apply hover:cursor-pointer flex flex-row justify-center'

        onClick={percentSeatAvailable === 100 ? detailsButtonClick :  applyButtonClick}
        >
          {percentSeatAvailable === 100 ? "Details" :"Apply" }
        </span>
        {percentSeatAvailable === 100 ? (
          <p
          style={{fontSize:"13px",fontWeight:"500",textAlign:"center",color:"#7c8493",fontFamily: "Epilogue, sans-seri"}}
          ><span className='font-bold text-black'>No Seat Available</span></p>
        )
         : 
         (<>
        <span><LinearProgress variant="determinate" value={percentSeatAvailable}
       sx={{
        
        '& .MuiLinearProgress-bar1Determinate': {
          backgroundColor: 'rgba(86, 205, 173, 1)'},}}
        /></span>
        <p
        style={{fontSize:"14px",fontWeight:"500",textAlign:"center",color:"#7c8493",fontFamily: "Epilogue, sans-seri"}}
        ><span className='font-bold text-black'>{totalApplied} applied</span> of {totalAvailable} capacity</p> </>)}
      </div>
      
      </>)}




    </div>
  )


  













  return (
    

    (status === "Not Applied") ? <JobNotApplied /> : <JobApplied />


  );
}

export default JobListing;
