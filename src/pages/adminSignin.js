import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, TextField, CardActions, Button, CircularProgress } from '@mui/material';

const AdminSignin = ({ user,setAlertMessage,setAlertSeverity,setShowAlert}) => {

    
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
    return (
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
}

export default AdminSignin
