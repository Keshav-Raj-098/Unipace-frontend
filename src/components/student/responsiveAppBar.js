import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Asset 4.svg";
import { Button } from '@mui/material';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{
      width: "100vw", height: "70px", backgroundColor: "white",

    }}>
      <Container>
        <Toolbar disableGutters sx={{
          justifyContent: {
            md: 'space-between',
            sm: "space-between"
          }
        }}>

          <Box
            sx={{
              height: '100%',
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              // backgroundColor:"red"
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              height={90}
              width={120}

              style={{ cursor: 'pointer', position: "relative", top: "20px" }}
              onClick={() => {
                navigate('dashboard', { state: { type: 'Internship' } });
              }}
            />


          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>


          <Box
            sx={{
              height: '100%',
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
              justifyContent: "start",
              flexGrow: 1,
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              width={100}
              height={90}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('dashboard', { state: { type: 'Internship' } });
              }}
            />

          </Box>

          <Button 
          variant='text'
          
              sx={{
                color:"black",

              }}>

            <a href="http://blogs.unipace.in" target='_blank'>Blogs</a>
            </Button>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
