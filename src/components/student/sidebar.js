
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaUser, FaBriefcase, FaFileAlt } from "react-icons/fa";
import userimg from "../../assets/user.svg"
import { FaDiscord } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";


const Sidebar = ({ studentName, setStudentDetails }) => {

  const [applyColor, setapplyColor] = useState("Intern")
  

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
      fontSize: "17px",
      width: "100%",
      height: "40px",
      padding: "5px 10px",
      display: "flex",
      gap: "8px",
      justifyContent: "start",
      alignItems: "center",

    },
    click: {
      fontSize: "17px",
      width: "100%",
      height: "40px",
      padding: "5px 10px",
      display: "flex",
      gap: "8px",
      justifyContent: "start",
      alignItems: "center",
      color:"white",
      backgroundColor:"rgb(37 99 235)"

    },
    box: {
      height: "100vh", width: "14vw", backgroundColor: "white", paddingTop: "100px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      overflowY:"scroll",scrollbarWidth:"none"
      

    }

  }



  return (
    <div style={styles.box}>


        <div className='flex flex-col gap-5'>
      <div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "8px" }}>

          {/* user profile img */}

          <span style={{
            borderRadius: "50%", height: "80px", width: "80px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ebebeb",
            boxShadow: "black 0px 0px 5px 0px",
          }}>

            <img src={userimg} alt="user" />
          </span>


          {/* user Name */}
          <div style={{
            display: "flex", justifyContent: "center", border: "1px solid black", fontSize: "16px",
            fontWeight: "bolder", marginTop: "20px", borderRadius: "15px", padding: "3px 20px"
          }}
          >{studentName}</div>

        </div> </div>



      <div className='mb-2 flex flex-col gap-1'>


        <div className=" hover:bg-blue-600 cursor-pointer text-black hover:text-white" 
        style={(applyColor==="Account") ? styles.click : styles.tab}
          onClick={() => { 
            setapplyColor("Account")
            navigate("/student/account", { state: { type: "Account" } }) }}>

          <FaUser /> Account </div>


        <div className=" hover:bg-blue-600 cursor-pointer text-black hover:text-white" 
         style={(applyColor==="Intern") ? styles.click : styles.tab}
          onClick={() => { 
            setapplyColor("Intern")
            navigate("/student/dashboard", { state: { type: "Internship" } }) }}>

          <FaBriefcase /> Internship </div>


        <div className=" hover:bg-blue-600 cursor-pointer text-black hover:text-white" 
       style={(applyColor==="Applied") ? styles.click : styles.tab}
          onClick={() => {
            setapplyColor("Applied")
            navigate("/student/applied", { state: { type: "Internship" } }) }}>

          <FaRegHourglassHalf /> Applied </div>



        <div className=" hover:bg-blue-600 cursor-pointer text-black hover:text-white"
      style={(applyColor==="Resume") ? styles.click : styles.tab} 
          onClick={() => { 
            setapplyColor("Resume")
            navigate("/student/resume", { state: { type: "resume" } }) }}>

          <FaFileAlt /> Resume </div>


       

        <div className=" hover:bg-blue-600 cursor-pointer text-black hover:text-white" 
          style={(applyColor==="Community") ? styles.click : styles.tab}
          onClick={() => { 
            setapplyColor("Community")
            navigate("/student/community") }}>

          <FaDiscord /> Community </div>

        <div></div>

      </div>  </div>


      <div onClick={()=>{logOut()
        setapplyColor("None")}
      } style={styles.tab}
        className='mb-2 hover:bg-red-600 hover:text-white cursor-pointer text-red-600 '
      >

        <LogoutIcon /> {'Logout'}


      </div>

    </div>
  )
}

export default Sidebar
