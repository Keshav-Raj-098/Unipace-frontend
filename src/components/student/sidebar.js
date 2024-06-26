
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { FaUser, FaBriefcase, FaFileAlt, FaPenNib,} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Sidebar = ({ studentName, setStudentDetails }) => {

  const navigate = useNavigate()

  const pages = [
    {
      page: 'Account',
      route: '/student/account',
    },
    {
      page: 'Internship',
      route: '/student/dashboard',
    },
    {
      page: 'Resumes',
      route: '/student/resume',
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 

  const logOut = () => {
    handleCloseUserMenu();
    setStudentDetails(null);
    localStorage.removeItem('localStorageStudentId');
    localStorage.removeItem('localStorageStudentToken');
    navigate('/');
  };


  const styles = {
    tab: {
      color: "black",
      fontSize: "17px",
      width: "100%",
      height: "40px",
      padding: "5px 10px",
      display: "flex",
      gap: "8px",
      justifyContent: "start",
      alignItems: "center"
    },

    logout: {
      color: "black",
      fontSize: "17px",
      width: "100%",
      height: "40px",
      padding: "5px 10px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      position: "relative",
      bottom: "5px",
    },
    box: {
      height: "100vh ",
       width: '13vw', 
       backgroundColor: "white",
       paddingTop: "74px", 
       display: "flex", 
       flexDirection: "column",
       justifyContent: "space-between"
    }}



  return (
    <div style={styles.box}>



      <div>

        <div className=" hover:bg-blue-400 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/account", { state: { type: "Account" } }) }}>

          <FaUser /> Account </div>


        <div className=" hover:bg-blue-400 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/dashboard", { state: { type: "Internship" } }) }}>

          <FaBriefcase /> Internship </div>



        <div className=" hover:bg-blue-400 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/resume", { state: { type: "resume" } }) }}>

          <FaFileAlt /> Resume </div>


        <div className=" hover:bg-blue-400 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/blog") }}>

          <FaPenNib /> Blogs </div>


      </div>












      <div onClick={logOut} className='hover:bg-blue-400 cursor-pointer '
        style={styles.logout}>

        <LogoutIcon sx={{ mr: 1 }} /> {'Logout'}


      </div>

    </div>
  )
}

export default Sidebar
