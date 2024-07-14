import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Asset 4.svg";
import { Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function ResponsiveAppBar({setSidebar,sidebar}) {
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
      width: "100vw", height: "70px", backgroundColor: "white", zIndex:"15001"

    }}>
      <Container>
        <Toolbar disableGutters sx={{
          justifyContent: "space-between"}}>


            

           <IconButton
            onClick={()=>{

              if(sidebar===null){setSidebar(false)}
              else {(sidebar===true) ? setSidebar(false) : setSidebar(true)}
            }}>
               { sidebar ? <CloseOutlinedIcon/>  : <MenuIcon/>}
            </IconButton>

         

            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              height={90}
              width={120}

              style={{ cursor: 'pointer', position: "relative", top: "20px" }}
              onClick={() => {
                navigate('dashboard', { state: { type: 'Internship' } });
              }}/>

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
