import React from 'react'
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import Header from "../../components/startUp/Header"
import "../../components/startUp/buttonstyle.css"
import logo from "../../assets/internshipImage.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Barchart,Barchart2, Barchart3, Boxx,ApplicantSummary } from '../../components/startUp/Dashboard/Barchart';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const Dashboard = ({ startUpDetails, BASE_URL }) => {

  const navigate = useNavigate()
  const [isLoading, setloading] = useState(false)
  const [applyColor, setapplyColor] = useState("overview")

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
      ) : (
        <div
          className='py-2 px-6 h-full w-full'
          
        >
          {/* Header */}



          <div className="w-auto px-2 py-3 flex flex-col justify-start">
            <p
              style={{ fontSize: "19px", fontWeight: "600", color: "#25324b", lineHeight: "28.8px" }}
            > {msg()}, {startUpDetails.companyName}</p>
            <p
              style={{
                fontSize: "14px", fontWeight: "500",
                fontFamily: "Epilogue, sans-seri", color: "rgba(124, 132, 147, 1)",
                lineHeight: "22.8px"
              }}
            >Here is your job listings statistic report,</p></div>

          <div
            className='flex flex-row items-center justify-between'
            style={{
              backgroundColor: "rgba(70, 64, 222, 1)", padding: "10px 18px", color: "white",
              fontFamily: "Epilogue, sans-seri",
            }}>
            <div className='flex flex-row items-center gap-2'>

              <span
                style={{ fontSize: "34px", fontWeight: "600" }}
              >76</span>
              <p>Candidates to Review</p>
            </div>
            <MdKeyboardArrowRight fontSize={"25px"} cursor={"Pointer"}
              onClick={() => {
                navigate("../joblist", { state: { type: "Internship", color: "joblist" } })
              }} />


          </div>




          <div className='flex flex-row gap-5'
            style={{ margin: "20px 0px",maxHeight:'420px', }}>
            {/* statistics */}
            <div className='py-5 '
              style={{ border: "1px solid rgba(214, 221, 235, 1)", }}
            >
              <span className='p-5'
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", marginBottom: "10px" }}
              >Job Statistics</span>

              <div
                className='w-full h-auto  flex flex-row gap-2'
                style={{ borderBottom: "1px solid #f4f6fa", padding: "0px 12px" }}>


                <span
                  style={{
                    fontSize: "14px", fontWeight: "400", color: "#25324B",
                    fontFamily: "Epilogue, sans-seri", height: "30px",
                    borderBottom: applyColor === `overview` && "3px solid #1987d2",
                    color: applyColor === `overview` && "rgba(37, 50, 75, 1)",

                  }}
                  className={` hover:cursor-pointer px-3 py-2`}
                  onClick={() => {
                    setapplyColor("overview")
                    // setPage("profile")
                  }}


                >OverView</span>


                <span
                  style={{
                    fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
                    fontFamily: "Epilogue, sans-seri", height: "30px",
                    borderBottom: applyColor === `view` && "3px solid #1987d2",
                    color: applyColor === `view` && "rgba(37, 50, 75, 1)",

                  }}
                  className={` hover:cursor-pointer px-3 py-2`}
                  onClick={() => {
                    setapplyColor("view")
                    // setPage(false)
                  }}


                >Jobs View</span>

                <span
                  style={{
                    fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
                    fontFamily: "Epilogue, sans-seri", height: "30px",
                    borderBottom: applyColor === `applied` && "3px solid #1987d2",
                    color: applyColor === `applied` && "rgba(37, 50, 75, 1)",

                  }}
                  className={` hover:cursor-pointer px-3 py-2`}
                  onClick={() => {
                    setapplyColor("applied")
                    // setPage(false)
                  }}


                >Jobs Applied </span>
              </div>

              <div className='flex flex-row px-3'>

                {applyColor === ("overview") && <Barchart />}
                {applyColor === ("view") && <Barchart2 />}
                {applyColor === ("applied") && <Barchart3 />}

                <div className='flex flex-col gap-2 justify-center'>

                  <Boxx title={"Job Views"} icon={<MdOutlineRemoveRedEye color='white'
                   fontSize={25} />} percent={"6.5"} value={"2342"} 
                   color={"rgba(255, 184, 54, 1)"} color2={"rgba(123, 97, 255, 1)"}
                  icon2={<IoMdArrowDropup color={"rgba(123, 97, 255, 1)"} fontSize={25}/>} />

                  <Boxx title={"Job applied"} icon={<FaClipboardList color='white' 
                  fontSize={25} />} percent={"0.5"} value={"654"}  
                  color={"rgba(123, 97, 255, 1)"} color2={"rgba(255, 101, 80, 1)"}
                  icon2={<IoMdArrowDropdown color={"rgba(255, 101, 80, 1)"} fontSize={25}/>} />



                </div>


              </div>

            </div>
            {/* Right Part */}

            <div className='flex flex-col justify-between'
            style={{width:"300px"}}>



              <div className='px-4 py-2'
                style={{ border: "1px solid rgba(214, 221, 235, 1)",height:"120px" }}>
                <span
                  style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", marginBottom: "10px" }}
                >Jobs Open</span>

                <div className='w-full flex flex-row pb-0 ' style={{ alignItems: "baseline" }}>

                  <span
                    style={{ fontSize: "50px", fontWeight: "bold", color: "rgba(37, 50, 75, 1)" }}
                  >12</span>

                  <span style={{ fontSize: "15px", fontWeight: "400", color: "rgba(124, 132, 147, 1)" }}>Jobs Opened</span>

                </div>

              </div>



              <ApplicantSummary height={"290px"}/>
            </div>


          </div>







        </div>
      )}
    </div>
  )
}

export default Dashboard
