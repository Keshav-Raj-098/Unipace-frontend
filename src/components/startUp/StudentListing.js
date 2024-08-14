import React from "react";
import { Typography, Button, Grid, Card, CardContent, Container } from "@mui/material";
import { fontFamily, minWidth, width } from "@mui/system";
// import InternshipTable from '../../components/table';
import  "./buttonstyle.css"
import moment from "moment/moment";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';




function JobListing({ deadline,detailsButtonClick, designation, studentsAppliedClick, approval,index }) {
  const isDisapproved = approval === 'disapproved';
  const isPending = approval === 'pending';
  const styles = {
    role:{
     fontSize: "16px", fontWeight: "500", color: "rgba(37, 50, 75, 1)",minWidth:"200px",width:"30%"

    }
  }
  const Duedate = moment(deadline).format('DD MMM YYYY');
  const posteddate = moment(new Date()).format('DD MMM YYYY');


  return (
   <div className="flex flex-row px-4"
   style={{backgroundColor:((index+1)%2===0) && "rgba(248, 248, 253, 1)",paddingTop:"25px",
    paddingBottom:"25px"
   }}
   >
    <span style={styles.role}>{designation}</span>

    <div  style={{ width: '70%', display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
      
      <span
      className={`Live`}
      style={{width:"80px",textAlign:"center"}}
      >Live</span>

      <span
      style={{width:"140px",textAlign:"center",fontFamily:"Inter",color:"rgba(37, 50, 75, 1)",fontWeight:"400",fontSize:"16px"}}
      >{posteddate}</span>

      <span 
      style={{width:"100px",fontFamily:"Inter",color:"rgba(37, 50, 75, 1)",fontWeight:"400",fontSize:"16px"}}
      >{Duedate}</span>

      <span 
      className="Freelance"
      style={{width:"80px",textAlign:"center"}}
      >Freelance</span>

      <span
       style={{width:"80px",textAlign:"center"}}
      >50</span>
      <span
      style={{width:"80px",textAlign:"center"}}
      >5/50</span>

      <span style={{width:"40px"}}><MoreHorizIcon 
      className="hover:cursor-pointer"
      onClick={detailsButtonClick}
      /></span>

    </div>

   </div>
  );
}

export default JobListing;