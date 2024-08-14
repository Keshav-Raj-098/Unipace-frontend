import React from 'react'
import { Box,CircularProgress } from '@mui/material';
import { useState } from 'react';
import Header from "../../components/startUp/Header"
import  "../../components/startUp/buttonstyle.css"
import logo from "../../assets/internshipImage.svg"


const Dashboard = ({startUpDetails, BASE_URL }) => {

  const [isLoading, setloading] = useState(false)

  const msg = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else if (hour >= 18 && hour < 21) {
      return "Good Evening";
    } else {
      return "Hello";
    }
  };
   
  console.log(startUpDetails);
  



















  return (
    <div>
      
     {isLoading ? (
          <Box
          sx={{
            height: '100vh',
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <CircularProgress />
          </Box>
        ):(
          <div
          className='py-2 px-6 h-full w-full'
        >
      {/* Header */}
          


          <div className="w-auto px-2 py-3 flex flex-col justify-start">
            <p
              style={{ fontSize: "19px", fontWeight: "600", color: "#25324b", lineHeight: "28.8px" }}
            > {msg()}, {startUpDetails.companyName}</p>
            <p
              style={{ fontSize: "14px", fontWeight: "500",
                fontFamily: "Epilogue, sans-seri",color: "rgba(124, 132, 147, 1)",
                 lineHeight: "22.8px" }}
            >Here is your job listings statistic report,</p></div></div>
        )}
    </div>
  )
}

export default Dashboard
