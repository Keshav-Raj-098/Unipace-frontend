import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box, Button } from '@mui/material';
import Logo from '../assets/Asset 4.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Popup } from 'reactjs-popup'
import { PiStudentFill } from "react-icons/pi";
import { IoBusinessSharp } from "react-icons/io5";
import { TiCancel } from "react-icons/ti";
import { Slideshow, } from './student/popupwindow';
import SignIn from "../pages/signIn.js"



export default function ResponsiveAppBar({ mode, setMode }) {

  const navigate = useNavigate();
  const [x, setx] = useState(false)
  const [user, setUser] = useState("")
  const [btn, setbtn] = useState(true)
  const [Page, setPage] = useState(false)



  const [hover2, sethover2] = useState(false);

  const styles = {

    container1: {
      backgroundColor: "#3e88d2fa", margin: "5px 35px",
      padding: "10px 35px", borderRadius: "5px ", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "14px", color: "black", width: "fit-content", display: "flex", gap: "10px"
    },
    container2: {
      backgroundColor: hover2 && "#3e88d2fa",

      padding: "8px 15px", borderRadius: "5px ", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "14px", color: "black"
    }
  }

  return (
    <AppBar position="fixed" >
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: 1
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              height={100}
              width={150}

              style={{ cursor: 'pointer', position: "relative", top: "20px" }}
              onClick={() => {
                navigate('/');
              }}

            />
            <Box

              sx={{
                padding: "5px",
                display: "flex",
                gap: "15px"
              }}
            >



              <Button className="hover"
                style={{ padding: "8px 15px", borderRadius: "5px ", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "14px", color: "black" }}

                onClick={() => {

                  if (x === false) { setx(true) }
                  else { setx(false) }

                }}
              >Login</Button>






              <Popup


                open={x}
                container={window}
                position="fixed"

              >
                <Box sx={{
                  // border: "1px solid black",
                  backgroundColor: "white",
                  height: "fit-content",
                  width: "fit-content",
                  marginLeft: "150px",
                  marginRight: "150px",
                  borderRadius: "10px",
                  marginTop: "15vh",
                  boxShadow:"0px 0px 15px 3px black"


                }}>



                  {
                    btn && (
                      <Box sx={{
                        margin: "15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",

                      }}>
                        <span style={{ width: "50%", display: "flex", justifyContent: "right", marginLeft: "50%" }}>

                          <TiCancel
                            className='opacity-0 hover:opacity-100'
                            onClick={() => {
                              if (x === true) { setx(false) }
                            }} size={25} />
                        </span>

                        <Button variant='text'
                          style={styles.container1}
                          onClick={() => {
                            setbtn(false)
                            setUser("Student")
                            setPage(true)
                          }}>
                          <PiStudentFill size={20} />Student</Button>

                        <Button className='hover'
                          style={styles.container1}
                          onClick={() => {
                            setbtn(false)
                            setUser("Startup")
                            setPage(true)

                          }}
                        >

                          <IoBusinessSharp size={20} /> StartUp</Button>


                      </Box>

                    )}



                  {
                    Page && (

                      <div className='flex flex-row'>

                        <Slideshow />
                        <div style={{ width: "70%", padding: "10px" }}>

                          <span style={{ width: "100%", display: "flex", justifyContent: "right", }}>

                            <TiCancel className='opacity-0 hover:opacity-100'
                              onClick={() => {
                                if (x === true) { setx(false) }
                              }} size={25}

                            />
                          </span>

                          <SignIn user={user} setx={setx}/>
                        </div>
                      </div>
                    )

                  }

                </Box>
              </Popup>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
