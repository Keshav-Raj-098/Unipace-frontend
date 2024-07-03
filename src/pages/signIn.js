import { Card, CardContent, CardHeader, Container, Typography, TextField, CardActions, Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPVerify from './otpVerify';
import AlertSnackbar from "../components/snackbar.js"
import Signup from "./signUp.js"

const BASE_URL = process.env.REACT_APP_BACKEND_URL_PRODUCTION || process.env.REACT_APP_BACKEND_URL;

export default function SignIn({ user,setx }) 

{
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [passotp, setpassotp] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [startUpDetails, setStartUpDetails] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Showing alert!');
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [loading, setLoading] = useState(false);
  const [signin, setsignin] = useState(true);


  const [name, setName] = useState("");
  const [signInOrSignUp, setsignInOrSignUp] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { username: adminUsername, password: adminPassword };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    const url = `${process.env.REACT_APP_ADMIN_URL}/auth/login`;
    try {
      const data = await fetch(url, requestOptions);
      const data1 = await data.json();
      if (data.status === 200) {
        setAlertMessage('Approved');
        setAlertSeverity('success');
        setShowAlert(true);
        localStorage.adminCode = data1.token;
        localStorage.userID = data1.userID;
        navigate('../admin/dashboard', {
          state: { user: 'Admin', signInOrSignUp: 'SignIn' },
        });
      } else if (data.status === 401 || data.status === 404) {
        setAlertMessage('Wrong login credentials, please try again');
        setLoading(false);
        setAlertSeverity('error');
        setShowAlert(true);
      } else console.log(data);
    } catch (error) {
      setAlertMessage('Wrong login credentials, please try again');
      setAlertSeverity('error');
      setShowAlert(true);
      setLoading(false);
    }
  };

  const loginStudent = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      email: email,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/student/login`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            setpassotp(true);
            setsignInOrSignUp("SignIn");
            setName(data.studentDetails.name);
            setEmail(data.studentDetails.email);
          } else if (data.status === 401) {
            setLoading(false);
            setAlertMessage("Account doesn't exist. Please signup.");
            setAlertSeverity('info');
            setShowAlert(true);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const loginStartUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      email: email,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/startUp/login`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            navigate('../otpVerify', {
              state: {
                user: 'Startup',
                signInOrSignUp: 'SignIn',
                email: data.startUpDetails.email,
                name: data.startUpDetails.companyName,
              },
            });
          } else if (data.status === 401) {
            setLoading(false);
            setAlertMessage("Account doesn't exist. Please signup.");
            setAlertSeverity('info');
            setShowAlert(true);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }

  };

    const getStudentAccountDetails = async () => {
      setLoading(true);
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BASE_URL}/api/student/register/${localStorage.getItem('localStorageStudentId')}`;
      try {
        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setStudentDetails(data.studentDetails);
              setLoading(false);
            } else {
              console.log(data);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
  
    const getStartUpAccountDetails = async () => {
      setLoading(true);
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BASE_URL}/api/startUp/register/${localStorage.getItem('localStorageStartUpId')}`;
      try {
        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setStartUpDetails(data.startUpDetails);
              setLoading(false);
            } 
            else {
              console.log(data);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (localStorage.getItem('localStorageStudentId')) getStudentAccountDetails();
      else if (localStorage.getItem('localStorageStartUpId')) getStartUpAccountDetails();
      else setLoading(false);
    }, []);
  



  return (
    <Container maxWidth="sm">
      
      {
      user === 'Admin' ? (
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
        </form>
     
    
    
    
    ) 
      
      
      
      : 
      (passotp === false ? (


        signin ? (
        
        <form onSubmit={user === 'Student' ? loginStudent : loginStartUp}>
          <Card>
            <CardHeader title={user + ' Sign In'} subheader="Enter your email ID to sign in" />
            <TextField
              type="email"
              label={'Email'}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <CardActions sx={{ ml: 1 }}>
              <Button type="submit" variant="contained" sx={{ width: 120, height: 40 }}>
                {loading ? <CircularProgress sx={{ color: 'white' }} size={25} /> : <Typography>Sign In</Typography>}
              </Button>
            </CardActions>
            <CardActions sx={{ ml: 1, }}>
              <Typography>
                Don't have an Account?{' '}
                <Typography
                  color="primary"
                  display="inline"
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: 2,
                  }}
                  onClick={() => {
                    setsignin(false)
                  }}
                >
                  Sign Up
                </Typography>
              </Typography>
            </CardActions>
          </Card>
        </form>) :
        <Signup user={user} BASE_URL={BASE_URL} setShowAlert={setShowAlert} setAlertSeverity={setAlertSeverity} setAlertMessage={setAlertMessage} setpassotp={setpassotp}
        setsignin={setsignin} setName={setName} setEmail={setEmail}
        />
      ) : (
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
          setx={setx}
        />
      ))
    }
      {showAlert ? <AlertSnackbar message={alertMessage} severity={alertSeverity} timer={3000} setShowAlert={setShowAlert} /> : <></>}
    </Container>
  );
}
