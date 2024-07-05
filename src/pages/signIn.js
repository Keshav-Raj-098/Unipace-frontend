import { Card, CardContent, CardHeader, Container, Typography, TextField, CardActions, Button, CircularProgress } from '@mui/material';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function SignIn({ BASE_URL,user,setAlertMessage,setAlertSeverity,setShowAlert,setstate,setName,setEmail,setsignInOrSignUp,email,}) 

{
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  
 

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
            setsignInOrSignUp("SignIn");
            setstate("otp");
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
            setsignInOrSignUp("SignIn");
            setstate("otp");
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



  return (
    <Container style={{width:"100%"}}>
      
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
       (


        
        <form onSubmit={user === 'Student' ? loginStudent : loginStartUp}>
          <Card sx={{p:2}}>
            <CardHeader className='text-center'  subheader="Enter your email ID to sign in" />
            <TextField
              type="email"
              label={'Email'}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ml:1}}
            />
            <CardActions>
              <Button type="submit" variant="contained" sx={{ width: 120, height: 40 }}>
                {loading ? <CircularProgress sx={{ color: 'white' }} size={25} /> : <Typography>Sign In</Typography>}
              </Button>
            </CardActions>
            <CardActions>
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
                    setstate("signup")
                  }}
                >
                  Sign Up
                </Typography>
                
              </Typography>
              
            </CardActions>
          </Card>
        </form>
      //  
      // : (
      //   <OTPVerify
      //     BASE_URL={BASE_URL}
      //     setStartUpDetails={setStartUpDetails}
      //     setStudentDetails={setStudentDetails}
      //     setShowAlert={setShowAlert} 
      //     setAlertSeverity={setAlertSeverity} 
      //     setAlertMessage={setAlertMessage}
      //     user={user}
      //     email={email}
      //     name={name}
      //     signInOrSignUp={signInOrSignUp}
      //   />
      // )
    )
    }
      
    </Container>
  );
}
