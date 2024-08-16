import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FaStar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import "../../components/startUp/buttonstyle.css"
import { MdOutlineMail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';

const StudentApplication = () => {

    const { studentDetails } = useLocation()?.state
    const [status, setStatus] = useState(studentDetails.statusUpdate.status || "In Review")
    const navigate = useNavigate();
    console.log(studentDetails);



    const styles = {
        small: {
            fontFamily: "Epilogue",
            fontWeight: "400",
            fontSize: "14px",
            color: "rgba(81, 91, 111, 1)"
        },
        large: {
            fontFamily: "Epilogue",
            fontWeight: "600",
            fontSize: "16px",
            color: "rgba(37, 50, 75, 1)"
        }
    }



    return (


        <div className='py-2 px-6 w-full'>

            {/* Title */}

            <div className="w-auto  py-3 flex flex-row justify-between items-center ">

                <div className='flex flex-row justify-start items-center'>

                    <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
                        onClick={() => { navigate(-1) }} />
                    <div className='flex flex-col justify-center'>
                        <span style={{ fontSize: "21px", fontWeight: "600", color: "rgba(37, 50, 75, 1)" }}>Applicant Details</span>
                    </div>
                </div>

                <FormControl>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{
                            borderColor: 'rgba(204, 204, 245, 1)', // Change border color
                            color: 'rgba(70, 64, 222, 1)', // Change text color
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(204, 204, 245, 1)', // Set border color
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(204, 204, 245, 1)', // Change border color on hover
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(204, 204, 245, 1)', // Border color when focused
                            },
                            '& .MuiSelect-select': {
                                color: 'rgba(70, 64, 222, 1)', // Text color
                            },
                            '&:focus': {
                                outline: 'none', // Remove the default outline
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'rgba(70, 64, 222, 1)', // Customize the dropdown icon color
                            },
                        }}
                    >
                        <MenuItem value={"In review"}>In review</MenuItem>
                        <MenuItem value={"Shortlisted"}>Shortlisted</MenuItem>
                        <MenuItem value={"Interview"}>Interview</MenuItem>
                        <MenuItem value={"Hired"}>Hired</MenuItem>
                        <MenuItem value={"Declined"}>Declined</MenuItem>
                    </Select>
                </FormControl>



            </div>

            <div className='flex flex-row justify-between'
                style={{ gap: "30px", height: "auto" }}>
                {/* left Part */}



                <div
                    style={{ border: "1px solid rgba(214, 221, 235, 1)", minWidth: "300px", width: "40%", padding: "12px 20px" }}>

                    {/* profile */}

                    <div className='flex flex-col gap-5  items-center'>
                        <span className='flex flex-row justify-center items-center'
                            style={{
                                border: "1px solid black", height: "70px", width: "70px",
                                borderRadius: "50%"
                            }}>
                            <FaUserAlt fontSize={"30px"} />

                        </span>
                        <div className='flex flex-row gap-1 items-center justify-between w-full' >
                            <span
                                style={{
                                    fontFamily: "Clash Display", fontSize: "22px",
                                    color: "rgba(37, 50, 75, 1)",
                                    fontWeight: "700",
                                }}
                            >{studentDetails.name}</span>
                            <div className='flex flex-row gap-1 justify-center items-center'
                                style={{ width: "70px" }}>
                                <FaStar fontSize={"19px"} color='rgba(255, 184, 54, 1)' />
                                <span>4.2</span>

                            </div>
                        </div>
                    </div>

                    {/* First Box */}

                    <div className='w-full flex flex-col'
                        style={{
                            backgroundColor: "rgba(248, 248, 253, 1)", margin: "22px 0px",
                            padding: "10px 15px"
                        }}
                    >
                        <div className='flex flex-row justify-between py-3'
                            style={{ borderBottom: "1px solid rgba(214, 221, 235, 1)", fontFamily: "Epilogue", fontWeight: "400" }}
                        >
                            <span
                                style={{ color: "rgba(37, 50, 75, 1)" }}
                            >Applied</span>
                            <span style={{ color: "rgba(124, 132, 147, 1)" }}
                            >2 days Ago</span>
                        </div>
                        <div className='flex flex-col gap-2 py-3'>
                            <span style={styles.large}

                            >Product Development</span>

                            <div className='flex flex-row gap-2 items-center'
                                style={styles.small}>
                                <span>Marketing</span>
                                <span
                                    style={{
                                        height: "7px", width: "7px", borderRadius: "50%",
                                        backgroundColor: "rgba(81, 91, 111, 1)"
                                    }}
                                ></span>
                                <span>FullTime</span>
                            </div>

                        </div>

                    </div>

                    {/* second Box */}

                    <div className='flex flex-col'
                        style={{ backgroundColor: "rgba(248, 248, 253, 1)", padding: "10px 15px" }}>

                        <div className='flex flex-row justify-between items-center'>
                            <span style={{ ...styles.small, color: "rgba(37, 50, 75, 1)" }}>
                                Stage
                            </span>

                            <div className='flex flex-row gap-1 items-center'>
                                <span
                                    style={{ height: "9px", width: "9px", borderRadius: "50%" }}
                                    className='intervieww'></span>

                                <span className='interview1'>Interview</span>

                            </div>

                        </div>
                        <div className='stage flex flex-row gap-1 my-3'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    {/* Contacts */}

                    <div
                        className='py-3'
                        style={{ borderTop: "1px solid rgba(214, 221, 235, 1)" }}>

                        <span style={{ ...styles.large, fontSize: '20px', fontWeight: "600" }}>Contact</span>

                        {/* Email */}

                        <div className='flex flex-row' style={{ margin: "8px 0px", gap: "10px" }}>
                            <MdOutlineMail fontSize={"20px"}
                                color='rgba(124, 132, 147, 1)' stroke='2px' />
                            <div className='flex flex-col'>
                                <span style={styles.small}>Email</span>
                                <span style={styles.small}>{studentDetails.email}</span>
                            </div>


                        </div>

                        {/* Phone Number */}

                        <div className='flex flex-row' style={{ margin: "8px 0px", gap: "10px" }}>
                            <IoMdPhonePortrait fontSize={"20px"}
                                color='rgba(124, 132, 147, 1)' stroke='2px' />
                            <div className='flex flex-col'>
                                <span style={styles.small}>Phone</span>
                                <span style={styles.small}>+91 8797807957</span>
                            </div>


                        </div>

                        <div className='flex flex-row justify-start '
                            style={{ fontSize: "20px", color: "rgba(124, 132, 147, 1)", gap: "14px" }}>
                            <FaInstagram />
                            <CiTwitter />
                            <CiGlobe />
                            <FaLinkedin />

                        </div>

                    </div>





                </div>














                {/* Right Part */}
                <div className='py-3 px-2'
                    style={{
                        border: "1px solid rgba(214, 221, 235, 1)",
                        minWidth: "calc(100% - 330px)", height: "100%", width: "58%"
                    }}
                >

                </div>














            </div>



        </div>
    )
}

export default StudentApplication
