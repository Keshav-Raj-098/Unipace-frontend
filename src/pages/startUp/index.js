import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../components/startUp/responsiveAppBar';
import { Box, CircularProgress } from '@mui/material';
import Sidebar from "../../components/startUp/sidebar"

export default function Index({ mode, setMode, startUpDetails, setStartUpDetails }) {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (startUpDetails === null) {
      navigate('/');
    } else {
      setCompanyName(startUpDetails.companyName);
      setLoading(false);
    }
  }, []);

  return (
    <>
    <div className='flex flex-row'>

   <Sidebar  setStartUpDetails={setStartUpDetails} 
    />
    <div className='flex flex-col'>

      <div
        id='maincontent'
        style={{
          overflowY: 'auto',
          position: 'absolute',
          backgroundColor:"white",
          width: "83%",
          height: '100%',
          // right:"0vw",
          
          

          
        }}
        >
        {loading ? (
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
          <Outlet />
        )}
        </div>
      </div>
        </div>
    </>
  );
}
