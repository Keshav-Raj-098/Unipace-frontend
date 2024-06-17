import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box} from '@mui/material';
// import Logo from '../assets/NAV-UNIPACE.png';
import Logo from '../assets/Asset 4.svg';
import { useNavigate } from 'react-router-dom';


export default function ResponsiveAppBar({ mode, setMode }) {
  const navigate = useNavigate();


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
             
              width={150}
              height={40}
              style={{ cursor: 'pointer',marginTop:"28px",transform: "scale(1.5)" }}
              onClick={() => {
                navigate('/');
              }}
            />
            <Box
            
            sx={{
              padding:"5px",
              display:"flex",
              gap:"15px"
              // backgroundColor:"red"
            }}
            >
           

          <button 
           
           style={{padding:"5px 10px", borderRadius:"15px ",border:"none",fontWeight:"bold", cursor:"pointer"

            ,backgroundColor:"whitesmoke",color:"#1976d2"
           }}
           
          onClick={() => {
                navigate('/signin',{ state: { user: 'Student'}})}} >Student</button>
          <button 
           
           style={{padding:"5px 10px", borderRadius:"15px ",border:"none",fontWeight:"bold", cursor:"pointer"

            ,backgroundColor:"whitesmoke",color:"#1976d2"
           }}
           
          onClick={() => {
                navigate('/signin', { state: { user: 'Startup'}})}} >StartUp</button>




            </Box>

        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
