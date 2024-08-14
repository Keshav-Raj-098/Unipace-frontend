
import React, { useEffect } from 'react'

import { useNavigate,useLocation } from 'react-router-dom'
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from "../../assets/Asset 4.svg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';





const Sidebar = ({setStartUpDetails}) => {

  const  applyColor= useLocation().state?.color || "dashboard";
  // const [applyColor, setapplyColor] = useState(applyto)



  const navigate = useNavigate()




  const logOut = () => {
    setStartUpDetails(null);
    localStorage.removeItem('localStorageStartUpId');
    localStorage.removeItem('localStorageStartUpToken');
    navigate('/');
  };

  

  const Sidebtn = ({icon,navigateto,title,type})=>(
  
    <div className="  text-gray-600 border-l-4 border-transparent
    hover:cursor-pointer hover:border-l-4 hover:border-blue-500 pl-2 h-10 hover:text-blue-500"
  
       style={{ borderLeft: applyColor === `${navigateto}` && "4px solid #3b82f6" }}
  
       onClick={() => {
        //  setapplyColor(`${navigateto}`)
         if(title==="Help Center"){
          window.open('https://unipace-helpcenter.tawk.help/', '_blank');
          // setapplyColor("null")

         }
         else{
         navigate(`/startUp/${navigateto}`, { state: { type: `${type}`,
          color:`${navigateto}` } })}
       }}>
       <span
        style={{ backgroundColor: applyColor ===`${navigateto}` && "#bfdbfe",
          color: applyColor === `${navigateto}` && "#3b82f6"
         }}
         className='flex flex-row justify-start items-center gap-2 hover:bg-blue-200 h-full p-4'
       >{icon} {title}</span>
     </div>
  )


  const styles = {
    box: {
      height: "100vh",
      backgroundColor: "#F8F8FD",
      paddingTop: "20px",
      paddingRight: "10px",
      paddingBottom: "5px",

      display: "flex", flexDirection: "column",
      justifyContent: "space-between",
      overflowY: "scroll", scrollbarWidth: "none", position: "relative",
      width: "200px",





    }

  }







  return (
    <div style={styles.box}
    >



      <div className='flex flex-col'>

        <div className='flex flex-row justify-center h-14'>


          <img src={Logo} alt="Logo" loading="lazy" height={45} width={120}

            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('home');
            }} />   </div>





        <div className='mb-2 flex flex-col gap-1'
        style={{position:"relative",top:"-15px",paddingBottom:"15px",
          borderBottom:"2px solid grey"
        }}
        >

      <Sidebtn title={"Dashboard"} icon={<DashboardIcon fontSize='17px'/>}
       navigateto={"dashboard"} type={"Account"} />
     
      
      <Sidebtn title={"Company Profile"} icon={<BusinessIcon fontSize='17px'/>} 
      navigateto={"companyprofile"} type={"Internship"} />


      <Sidebtn title={"All Applicants"} icon={<GroupsIcon fontSize='17px'/>}
       navigateto={"applicants"} type={"Internship"} />
      
      <Sidebtn title={"Job List"} icon={ <ListAltIcon fontSize='17px'/>}
       navigateto={"joblist"} type={"Internship"} />
      

          <div></div>

        </div> 

        <div className='flex flex-col gap-1'
        style={{position:"relative",top:"-20px"}}
        >
        <Sidebtn title={"Setting"} icon={ <SettingsIcon fontSize='17px'/>} 
        navigateto={"account"} type={"Account"} />
        <Sidebtn title={"Help Center"} icon={ <InfoIcon fontSize='17px'/>} navigateto={"Help Center"}  />

 
          
        </div>


         </div>


      <div onClick={() => {
        logOut()
        // setapplyColor("None")
      }    
      } style={styles.tab}
        className=' text-gray-600 border-l-4 border-transparent
         hover:cursor-pointer hover:border-l-4 hover:border-red-300 pl-2 h-10 hover:text-red-500'
      >
        <span
          className='flex flex-row justify-start items-center gap-2 hover:bg-red-300 h-full p-4'
        >    <LogoutIcon /> {'Logout'} </span>




      </div>

    </div>
  )
}

export default Sidebar
