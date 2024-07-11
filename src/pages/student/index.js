import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../../components/student/responsiveAppBar';
import { Box, CircularProgress } from '@mui/material';
import Sidebar from "../../components/student/sidebar"

import "../../components/student/sidebar.css"

export default function Index({ studentDetails, setStudentDetails }) {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState('');
  const [className,setClassName ] = useState("Initial")

  useEffect(() => {
    if (studentDetails === null) {
      navigate('/');
    } else {
      setStudentName(studentDetails.name);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if(sidebar===true){setClassName("widthDecrease")}
    else if(sidebar===false) {setClassName("widthIncrease")}
       
         return () => {
           setClassName("")
         }
       }, [sidebar])
       
       

  return (
    <>
    <div className='flex flex-row'>

   <Sidebar studentName={studentName} setStudentDetails={setStudentDetails} sidebar={sidebar} />
    <div className='flex flex-col'>

      <ResponsiveAppBar setSidebar={setSidebar} sidebar={sidebar}/>
      <div
        id='maincontent'
        className={className}
        style={{
          overflowY: 'auto',
          position: 'absolute',
          backgroundColor:"white",
          width: '100%',
          height: '100%',
          right:"0vw"

          
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
