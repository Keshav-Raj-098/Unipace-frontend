import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box} from '@mui/material';
import Logo from '../assets/UNI.png';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveAppBar({ mode, setMode }) {
  const navigate = useNavigate();

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('colorMode', 'light');
    } else {
      setMode('dark');
      localStorage.setItem('colorMode', 'dark');
    }
  };

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              width={300}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
              }}
            />
          </Box>
          {/* <Box color="inherit" onClick={() => changeMode()}>
            {mode === 'dark' ? (
              <Button sx={{ color: 'white' }}>
                <WbSunnyIcon sx={{ mr: 1 }} /> {'Light'}
              </Button>
            ) : 
            (
              <Button sx={{ color: 'white' }}>
                <Brightness2Icon sx={{ mr: 1 }} />
                {'Dark'}
              </Button>
            )}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
