import React from 'react'
import { useState } from 'react';
import OTPVerify from '../pages/otpVerify.js';
import SignIn from "../pages/signIn.js"
import SignUp from "../pages/signUp.js"
import { Slideshow, } from './student/popupwindow'
import { Popup } from 'reactjs-popup'
import { Box, Button } from '@mui/material';
import { Card, CardContent, CardHeader, Typography, IconButton } from '@mui/material';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import student from "../assets/student.png"
import startup from "../assets/startup.png"
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';




function Loadpopup({ BASE_URL, setStudentDetails, setStartUpDetails, setShowAlert, setAlertMessage, setAlertSeverity, loadPopup, setloadPopup }) {


  const [user, setUser] = useState("")
  const [btn, setbtn] = useState(true)
  const [Page, setPage] = useState(false)
  const [state, setstate] = useState("signin")
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [signInOrSignUp, setsignInOrSignUp] = useState("");


  const styles = {

    container1: {
      backgroundColor: "black", marginTop: "7px",
      padding: "10px 25px", borderRadius: "25px ", border: "none", cursor: "pointer"
    },
    cancel: {
      width: "100%", display: "flex", justifyContent: "right",

    },
    cancel2: {
      width: "100%", display: "flex", justifyContent: "right",
      alignItems: "center", paddingLeft: "4px"

    },
    cancel3: {
      width: "100%", display: "flex", justifyContent: "space-between",
      alignItems: "center", paddingLeft: "4px"

    },


  }
  const handleClick = (x) => {
    setbtn(false)
    setUser(`${x}`)
    setPage(true)
  }

  function handlePage() {
    if (loadPopup === true) {
      setloadPopup(false);
      setbtn(true);
      setPage(false)
    }
  }

  return (
    <Popup open={loadPopup} container={window}
      position="fixed" closeOnDocumentClick={false}>

      <Box
        sx={{
          backgroundColor: "white",
          height: "fit-content",
          width: "fit-content",
          borderRadius: "10px",
          marginTop: "15vh",
          boxShadow: "0px 0px 15px 3px black",
          maxHeight: "500px",

        }}>



        {
          btn &&
          (
            <Box sx={{
              margin: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              paddingBottom: "10px",
              maxHeight: "500px"



            }}>

              <span style={styles.cancel}>

                <IconButton className='opacity-0 cursor-pointer hover:opacity-100'
                color='warning'

                  onClick={() => { if (loadPopup === true) { setloadPopup(false) } }}
                >
                  <CancelOutlinedIcon/>
                </IconButton>

              </span>
              <div className='flex flex-row gap-2'>


                <Card sx={{ maxHeight: "450px" }} >
                  <CardHeader title="Student"
                    titleTypographyProps={{ fontSize: "24px", fontWeight: "bolder" }}

                  />
                  <CardContent>
                    <Typography sx={{
                      fontSize: "18px"
                    }}>
                      Start your journey to success today
                    </Typography>
                    <Button variant='text'
                      style={styles.container1}
                      onClick={() => { handleClick("Student") }}><FaArrowRight color='white' size={20} /></Button>
                    <div className='w-full flex flex-row justify-center '>

                      <img src={student} alt="student" width="150px" style={{
                        height: "200px",
                        position: "relative", bottom: "-25px"
                      }} />
                    </div>
                  </CardContent>
                </Card>

                <Card sx={{ maxHeight: "450px" }}>
                  <CardHeader title="Startup"
                    titleTypographyProps={{ fontSize: "24px", fontWeight: "bolder" }} />
                  <CardContent>
                    <Typography sx={{
                      fontSize: "18px"
                    }}>
                      Build your team for the success
                    </Typography>
                    <Button className='hover'
                      style={styles.container1}
                      onClick={() => { handleClick("Startup") }}><FaArrowRight color='white'
                        size={20} /></Button>
                    <div className='w-full flex justify-center align-bottom'>

                      <img src={startup} alt="startup" width="150px" style={{
                        height: "200px",
                        position: "relative", bottom: "-25px"
                      }} />
                    </div>
                  </CardContent>
                </Card>


              </div> </Box>

          )
        }

        {
          Page &&
          (

            <div className='flex flex-row'>

              <div style={{ width: "350px" }}>
                <Slideshow />
              </div>

              <div style={{
                width: "80vh", maxWidth: "450px", minWidth: "350px",
                padding: "10px"
              }}>

                <span style={(state === ("otp")) ? styles.cancel3 : styles.cancel2}>

                  {state === ("otp") &&

                    (

                      <FaArrowLeft
                        className='opacity-0  cursor-pointer hover:opacity-100'
                        onClick={() => {
                          if (signInOrSignUp === ("SignIn")) { setstate("signin") }
                          else if (signInOrSignUp === ("SignUp")) { setstate("signup") }


                        }}
                        size={16} />)
                  }

                  <IconButton className='opacity-0 cursor-pointer hover:opacity-100'
                    size='small'  color='warning'
                    onClick={handlePage}

                  >
                    <CancelOutlinedIcon />
                  </IconButton>
                </span>


                {
                  (state === "signin") &&
                  <SignIn
                    BASE_URL={BASE_URL}
                    user={user}
                    email={email}
                    name={name}
                    setName={setName}
                    setEmail={setEmail}
                    setstate={setstate}
                    setsignInOrSignUp={setsignInOrSignUp}
                    setAlertMessage={setAlertMessage}
                    setAlertSeverity={setAlertSeverity}
                    setShowAlert={setShowAlert}

                  />
                }


                {
                  (state === "signup") &&
                  <SignUp user={user}
                    BASE_URL={BASE_URL}
                    setShowAlert={setShowAlert}
                    setAlertSeverity={setAlertSeverity}
                    setAlertMessage={setAlertMessage}
                    setName={setName}
                    setEmail={setEmail}
                    setstate={setstate}
                    setsignInOrSignUp={setsignInOrSignUp}
                  />


                }


                {
                  (state === "otp") &&
                  <OTPVerify
                    BASE_URL={BASE_URL}
                    setStartUpDetails={setStartUpDetails}
                    setStudentDetails={setStudentDetails}
                    setShowAlert={setShowAlert}
                    setAlertSeverity={setAlertSeverity}
                    setAlertMessage={setAlertMessage}
                    user={user}
                    email={email}
                    name={name}
                    signInOrSignUp={signInOrSignUp}

                  />
                }

              </div>
            </div>
          )

        }

      </Box>
    </Popup>
  )
}

export default Loadpopup
