import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box, Button } from '@mui/material';
import Logo from '../assets/Asset 4.svg';
import { useNavigate } from 'react-router-dom';


export default function ResponsiveAppBar({ mode, setMode,loadPopup,setloadPopup }) {

  const navigate = useNavigate();

 
  

  return (
    <AppBar position="fixed" sx={{backgroundColor:"white"}}>
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

                  if (loadPopup === false) { setloadPopup(true) }
                  else { setloadPopup(false) }

                }}
              >Login</Button>

            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
