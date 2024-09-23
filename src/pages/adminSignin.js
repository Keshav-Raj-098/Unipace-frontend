import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, TextField, CardActions, Button, CircularProgress } from '@mui/material';

const AdminSignin = ({ user, setAlertMessage, setAlertSeverity, setShowAlert }) => {


  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [superUserCode, setsuperUserCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [signin_signup, setsignin_signup] = useState("signin");



  
  
  const loginAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = { username: adminUsername, password: adminPassword, superUserCode: superUserCode };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
  
    const url = `${process.env.REACT_APP_ADMIN_URL}/auth/login`;
  
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (response.status === 201) {
        setAlertMessage('Approved');
        setAlertSeverity('success');

        setShowAlert(true);
        localStorage.adminCode = data.token;
        localStorage.userID = data.userID;
        navigate('/admin/dashboard')
  
      } else if (response.status === 401 || response.status === 404) {
        setAlertMessage('Wrong login credentials, please try again');
        setLoading(false);
        setAlertSeverity('error');
        setShowAlert(true);
      } else {
       console.log(data);
       
      }
    } catch (error) {
      setAlertMessage('Wrong login credentials, please try again');
      setAlertSeverity('error');
      setShowAlert(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };





  const registerAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = { username: adminUsername, password: adminPassword, superUserCode: superUserCode };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
  
    const url = `${process.env.REACT_APP_ADMIN_URL}/auth/register`;
  
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (response.status === 201) {
        setAlertMessage('Approved');
        setAlertSeverity('success');
        setShowAlert(true);
        
        // Store adminCode and userID in localStorage if they exist in the response
        if (data.token) {
          localStorage.setItem('adminCode', data.token);
        }
        if (data.userID) {
          localStorage.setItem('userID', data.userID);
        }
  
        // Navigate to admin dashboard
        navigate('../admin/dashboard', {
          state: { user: 'Admin', signInOrSignUp: 'SignIn' },
        });
  
      } else if (response.status === 401 || response.status === 404) {
        setAlertMessage('Wrong login credentials, please try again');
        setAlertSeverity('error');
        setShowAlert(true);
      } else {
        setAlertMessage('An unexpected error occurred');
        setAlertSeverity('error');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage('Request failed. Please check your connection and try again.');
      setAlertSeverity('error');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };
  













  return (
    <>
      {(signin_signup === "signin") ?
        <form onSubmit={loginAdmin}>
          <Card>
            <CardHeader title={user + ' Sign In'} subheader="Kindly enter the code" />
            <CardContent>
              <TextField
                type="text"
                label={'Username'}
                variant="outlined"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                fullWidth
                required
              />
            </CardContent>

            <CardContent>
              <TextField
                type="password"
                label={'Password'}
                variant="outlined"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                fullWidth
                required
              />
            </CardContent>
            <CardActions sx={{ ml: 1 }}>
              <Button type="submit" variant="contained" sx={{ width: 120, height: 40 }}>
                {loading ? <CircularProgress sx={{ color: 'white' }} size={25} /> : <Typography>Sign In</Typography>}
              </Button>
            </CardActions>
          </Card>
          <p>Not an admin,Please Sign Up first ------{`>`} <span className='text-blue-500 cursor-pointer'
          onClick={()=>{setsignin_signup("signup")}}
          >Sign Up</span></p>
        </form>

        :
        // For registration
        <form onSubmit={registerAdmin}>
          <Card>
            <CardHeader title={user + ' Sign In'} subheader="Kindly enter the code" />
            <CardContent>
              <TextField
                type="text"
                label={'Username'}
                variant="outlined"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                fullWidth
                required
              />
            </CardContent>

            <CardContent>
              <TextField
                type="password"
                label={'Password'}
                variant="outlined"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                fullWidth
                required
              />
            </CardContent>

            <CardContent>
              <TextField
                type="text"
                label={'SecretCode'}
                variant="outlined"
                value={superUserCode}
                onChange={(e) => setsuperUserCode(e.target.value)}
                fullWidth
                required
              />
            </CardContent>
            <CardActions sx={{ ml: 1 }}>
              <Button type="submit" variant="contained" sx={{ width: 120, height: 40 }}>
                {loading ? <CircularProgress sx={{ color: 'white' }} size={25} /> : <Typography>Sign Up</Typography>}
              </Button>
            </CardActions>
          </Card>
          <p>Already and an admin------{`>`} <span className='text-blue-500 cursor-pointer'
          onClick={()=>{setsignin_signup("signin")}}
          >Sign In</span></p>
        </form>
      }
     
    </>

  )
}

export default AdminSignin
