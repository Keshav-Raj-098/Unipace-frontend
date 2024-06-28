
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { FaUser, FaBriefcase, FaFileAlt, FaPenNib, } from "react-icons/fa";
import userimg from "../../assets/user.svg"

const Sidebar = ({ studentName, setStudentDetails }) => {

  const navigate = useNavigate()

 
 
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    // logout: {
    //   color: "black",
    //   fontSize: "17px",
    //   width: "100%",
    //   height: "40px",
    //   padding: "5px 10px",
    //   display: "flex",
    //   justifyContent: "start",
    //   alignItems: "center",
    //   position: "relative",
    //   bottom: "5px",
    // },
    box:{
      height:"100vh",width:"14vw",backgroundColor:"white",paddingTop:"90px",
      display:"flex",flexDirection:"column",justifyContent:"space-between"

    }
    
  }



  return (
    <div style={styles.box}>



      <div>

        <div style={{ width:"100%",display: "flex", flexDirection: "column",alignItems:"center", marginBottom: "8px" }}>

          {/* user profile img */}
        
            <span style={{borderRadius: "50%",height: "80px", width: "80px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: "#ebebeb",
              boxShadow:"black 0px 0px 5px 0px"
            }}>

      <img src={userimg} alt="user" />
            </span>
            

          {/* user Name */}
          <div style={{
            display: "flex", justifyContent: "center",border:"1px solid black",fontSize:"16px",
            fontWeight:"bolder",marginTop:"20px",borderRadius:"15px",padding:"3px 20px"}}
          >{studentName}</div>

        </div> </div>



        <div className='mb-2'>


        <div className=" hover:bg-blue-600 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/account", { state: { type: "Account" } }) }}>

          <FaUser /> Account </div>


        <div className=" hover:bg-blue-600 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/dashboard", { state: { type: "Internship" } }) }}>

          <FaBriefcase /> Internship </div>



        <div className=" hover:bg-blue-600 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/resume", { state: { type: "resume" } }) }}>

          <FaFileAlt /> Resume </div>


        <div className=" hover:bg-blue-600 cursor-pointer" style={styles.tab}
          onClick={() => { navigate("/student/blog") }}>

          <FaPenNib /> Blogs </div>

      <div onClick={logOut} className='hover:bg-red-600 text-white cursor-pointer '
        style={styles.tab}>

        <LogoutIcon  /> {'Logout'}


      </div>
          </div>

    </div>
  )
}

export default Sidebar
