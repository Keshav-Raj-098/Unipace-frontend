import React from 'react'
import { Box, CircularProgress, TextField,Grid } from '@mui/material';
import AppliedCard from '../../components/student/HomeComponent/job_applied'
import StatusAppliedCard from '../../components/student/HomeComponent/job_applied_status'
import { getOpportunityList } from './dashboard';
import { useEffect, useState } from 'react';
import { total_jobs, applied_jobs, jobs_data } from './HomeCalc';
import JobListing from '../../components/student/JobListing';
import logo from './logo.png';
import { useNavigate } from 'react-router-dom';



const Home = ({ studentDetails, BASE_URL }) => {

  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [applied, setapplied] = useState();
  const [selected, setselected] = useState();
  const [notSelected, setNotSelected] = useState();
  const [notShortlisted, setNotShortlisted] = useState();
  const [shortlisted, setShortlisted] = useState();
  const [Applied, setApplied] = useState();
  const [isLoading, setisLoading] = useState(true);

  const type = "Intenship"
  const navigate = useNavigate()

  const msg = () => {
    const date = new Date();
    const hour = date.getHours();

    

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else if (hour >= 18 && hour < 21) {
      return "Good Evening";
    } else {
      return "Hello";
    }
  };

 
 useEffect(() => {
    const fetchData = async () => {
      try {
        const opportunityList = await getOpportunityList(BASE_URL, "Internship", studentDetails.id);
        setData(opportunityList)
        setTotal(total_jobs(opportunityList));
        setapplied(applied_jobs(opportunityList));
        setApplied(jobs_data(opportunityList,"Applied"));
        setShortlisted(jobs_data(opportunityList,"Shortlisted"));
        setNotShortlisted(jobs_data(opportunityList,"Not shortlisted"));
        setselected(jobs_data(opportunityList,"Selected"));
        setNotSelected(jobs_data(opportunityList,"Not selected"));
      } catch (error) {
        console.error(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL, studentDetails.id]);

  console.log(data);
 



  return (

    <>
     {isLoading ? (
          <Box
          sx={{
            height: '100vh',
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <CircularProgress />
          </Box>
        ):(
    
        <div
      className='py-2 px-6 h-full w-full'
    >

      <div className=" px-2 h-12 pb-3 flex flex-row justify-start items-center"
        style={{
          fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
          borderBottom: "1px solid grey", lineHeight: "35.4px", width: "100%"
        }}
      >
        Home</div>

      <div className="w-auto px-2 py-3 flex flex-col justify-start"

      >
        <p
          style={{ fontSize: "19px", fontWeight: "600", color: "#25324b", lineHeight: "28.8px" }}
        > {msg()}, {studentDetails.name}</p>
        <p
          style={{ fontSize: "14px", fontWeight: "500",
            fontFamily: "Epilogue, sans-seri",color: "rgba(124, 132, 147, 1)",
             lineHeight: "22.8px" }}
        > Here is what's happening with your job Search,</p>

        <div className='py-4 flex flex-row gap-5'>

          <div className='flex flex-col gap-2'>

            <AppliedCard title={"Total Internship Available"} number={total} />
            <AppliedCard title={"Total Internship Applied"} number={applied} />
          </div>

          <StatusAppliedCard 
          notselected={notSelected} notshortlisted={notShortlisted} 
          selected={selected} applied={Applied} shortlisted={shortlisted}/>



        </div>
        <div>
          <div
          className='my-5 ps-3 pb-3'
          style={{fontSize:"16px",fontWeight:"600",color:"rgba(37, 50, 75, 1)",
            fontFamily: "Epilogue, sans-seri",borderBottom:"1px solid #d6ddeb"
          }}
          >Recent Opportunities</div>

          {
            
            data?.map((internship,index)=>(

             
             <Grid item xs={12} key={internship.id}>
                       { 
                 
                 (!['Applied', 'Shortlisted', 'Selected', 'Not shortlisted', 
                  'Not selected'].includes(internship.status))  &&

                    <JobListing
                    logo={logo}
                    companyName={internship.company}
                    role={internship.role}
                    location={internship.location}
                    totalAvailable={internship.totalPositions}
                    totalApplied={internship.totalApplied}
                    changeColor={index % 2 === 0}
                    status={internship.status}
                    hasApplied={internship.status === 'Applied'}
                    detailsButtonClick={() => {
                      navigate('../details', { state: { jobId: internship.details } });
                    }}
                    applyButtonClick={() => {
                      // Handle the apply button click
                     
                        navigate('../apply', { state: { jobId: internship.details, type: type } });
                      
                    }}
                    />
                    
  }
                      
                    </Grid>

            ))
          }



        </div>
        </div>

    </div>)}
    
    </>
  )
}

export default Home
