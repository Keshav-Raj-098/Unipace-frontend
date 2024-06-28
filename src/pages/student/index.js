import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../../components/student/responsiveAppBar';
import { Box, CircularProgress } from '@mui/material';
import Sidebar from "../../components/student/sidebar"

export default function Index({ studentDetails, setStudentDetails }) {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentDetails === null) {
      navigate('/');
    } else {
      setStudentName(studentDetails.name);
      setLoading(false);
    }
  }, []);

  return (
    <>
    <div className='flex flex-row'>

   <Sidebar studentName={studentName} setStudentDetails={setStudentDetails}  />
    <div className='flex flex-col'>

      <ResponsiveAppBar studentName={studentName} setStudentDetails={setStudentDetails} />
      <div
        id='maincontent'
        style={{
          overflowY: 'auto',
          position: 'absolute',
          backgroundColor:"white",
          width: '86vw',
          height: '100%',
          
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
