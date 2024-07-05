import { Card, CardContent, CardHeader, Container, Typography, TextField, CardActions, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';


export default function SignUp({ user, BASE_URL, setShowAlert, setAlertMessage, setAlertSeverity,setName,setEmail,setstate,setsignInOrSignUp}) {
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
  const [loading, setLoading] = useState(false);


  const registerStudent = async (e) => {
    e.preventDefault();
    setLoading(true);
      const formData = {
        name: name1,
        email: email1,
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
      const url = `${BASE_URL}/api/student/register`;
      try {
        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 200) {
              setLoading(false);
              setstate("otp")
              setsignInOrSignUp("SignUp")
              setName(data.studentDetails.name)
              setEmail(data.studentDetails.email)
            } else if (data.status === 401) {
              setLoading(false);
              setAlertMessage('Account already exist. Please signin.');
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

  const registerStartUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      companyName: name1,
      email: email1,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/startUp/register`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            setstate("otp")
            setsignInOrSignUp("SignUp")
            setName(data.startUpDetails.companyName)
            setEmail(data.startUpDetails.email)
            
          } else if (data.status === 401) {
            setLoading(false);
            setAlertMessage('Account already exist. Please signin.');
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

      <form onSubmit={user === 'Student' ? registerStudent : registerStartUp}>
        <Card >
          <CardHeader className='text-center' subheader="Enter your details to create account" />
          <CardContent >
            <TextField
              type="text"
              label={user === 'Student' ? 'Name' : 'Company Name'}
              variant="outlined"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              fullWidth
              required
            />
            <TextField
              type="email"
              label={'Email'}
              variant="outlined"
              fullWidth
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              sx={{ mt: 2 }}
              required
            />
          </CardContent>
          <CardActions sx={{ ml: 1 }}>
            <Button type="submit" variant="contained" sx={{ width: 120, height: 40 }}>
              {loading ? <CircularProgress sx={{ color: 'white' }} size={25} /> : <Typography>Sign Up</Typography>}
            </Button>
          </CardActions>
          <CardActions sx={{ ml: 1, mb: 1 }}>
            <Typography>
              Already have an Account?{' '}
              <Typography
                color="primary"
                display="inline"
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: 2,
                }}
                onClick={() => {
                  setstate("signin")
                  // navigate('../signIn', { state: { user: user } });
                }}
              >
                Sign In
              </Typography>
            </Typography>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}
