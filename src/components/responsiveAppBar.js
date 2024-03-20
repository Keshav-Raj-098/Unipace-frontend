import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box} from '@mui/material';
import Logo from '../assets/NAV-INPLACE.png';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveAppBar({ mode, setMode }) {
  const navigate = useNavigate();


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
              width={60}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
