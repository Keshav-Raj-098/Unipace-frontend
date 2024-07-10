import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box, Button } from '@mui/material';
import Logo from '../assets/Asset 4.svg';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';



export default function ResponsiveAppBar({ mode, setMode, loadPopup, setloadPopup }) {

  const navigate = useNavigate();




  return (
    <AppBar position="fixed"
      sx={{
        backgroundColor: "white",
        height: "65px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)"
      }}


    >
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
            <Box sx={{
              display:"flex",flexDirection:"row",gap:"15px"
            }}>
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              height={90}
              width={150}

              style={{ cursor: 'pointer', position: "relative", top: "17px" }}
              onClick={() => {
                navigate('/');
              }}

            />
             <Button
                variant='text'

                sx={{
                  color: "black",
                  position: "relative", top: "-6px",
                  height:"fit-content",
                  width:"fit-content",
                  alignSelf:"center"

                }}>

                <a href="http://blogs.unipace.in" target='_blank'>Blogs</a>
              </Button>
              </Box>
            <Box

              sx={{
                padding: "5px",
                display: "flex",
                gap: "15px"
              }}
            >

             


              <Button
                variant="outlined"
                sx={{
                  color: "#1976d2", borderColor: "black", color: "black", fontWeight: "bold", borderRadius: "7px",
                  position: "relative", top: "-6px"
                }}
                onClick={() => {

                  if (loadPopup === false) { setloadPopup(true) }
                  else { setloadPopup(false) }

                }}

                startIcon={<LoginIcon />}
              >
                Login/ Signup
              </Button>

            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
