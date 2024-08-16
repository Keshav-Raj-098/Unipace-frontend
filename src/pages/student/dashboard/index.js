import { Container, Typography, Grid, CardContent, Card, Box, CircularProgress } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JobListing from '../../../components/student/JobListing';
import '../../../components/student/buttonstyle.css';
import logo from './../logo.png';
import { useQuery } from '@tanstack/react-query';
import Timer from "../../../components/timer"
import frame from "../../../assets/Frame 65 (1).png"
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import logo2 from "../../../assets/internshipImage.svg"
import { SearchBar, Click } from '../../../components/student/internship';




// TODO : security and performance issue in the way student is varified if he/she has applied
// TODO : error handling

const checkStatus = (studentsApplied, studentId) => {
  for (let i = 0; i < studentsApplied.length; i++) {
    if (studentsApplied[i]?.studentId === studentId) {
      return studentsApplied[i].status;
    }
  }
  return 'Not Applied';
};

const convertToTableRows = (jsonData, studentId) => {
  const jsonDataArray = [];
  for (let i = 0; i < jsonData.length; i++) {
    const oneJsonData = jsonData[i];
    const convertedJsonData = {
      id: i + 1,
      company: oneJsonData.companyName,
      role: oneJsonData.title,
      // location: oneJsonData.jobLocation,
      totalPositions: oneJsonData.totalApplications,
      totalApplied: oneJsonData.studentsApplied?.length,
      status:oneJsonData.studentsApplied ? checkStatus(oneJsonData.studentsApplied) : null,
      details: oneJsonData.id,
      apply: {
        jobId: oneJsonData.id,
        status: oneJsonData.studentsApplied ? checkStatus(oneJsonData.studentsApplied) : null,
        deadline: oneJsonData.deadline,
      },
    };
    jsonDataArray.push(convertedJsonData);
  }

  return jsonDataArray;
};

const getOpportunityList = async (BASE_URL, type, studentId) => {
  const response = await fetch(`${BASE_URL}/api/student/jobs?type=${type}`)
  const data = await response.json()
  const jobList = data.jobs
  
  
  return convertToTableRows(jobList, studentId)
};
;


export default function Dashboard({ BASE_URL, studentDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const type = useLocation().state?.type || "Internship";
  const navigate = useNavigate();
  const [typeImage, setTypeImage] = useState([]);
  const [role, setRole] = useState()
  const [company, setCompany] = useState()
  const [location, setLocation] = useState()
  const [data,setdata] = useState()
  const [isLoading,setLoading] = useState()

 

  const handleSearch = (role, company, location,internship) => {
     
     if((internship.company===company)&&(internship.status==="Not Applied")){
      return true
     }

  }
  console.log(studentDetails.id);
  useEffect(() => {
    const fetchJobs = async () => {
        try {
            const jobs = await getOpportunityList(BASE_URL, type, studentDetails.id);
            setdata(jobs);  // make sure `setdata` is correctly spelled as `setData`
            console.log(data);
            
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchJobs();
}, []);

   console.log(data);
   


  //  Function(react component) that will load after the deadline

  // const loaderfunction = () => {
  //   return (
      
  // }


  return (
    <div className='py-2 h-full w-full'>

        <div className=" px-8 h-12 pb-3 flex flex-row justify-start items-center"
          style={{
            fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
            borderBottom: "1px solid #eaeef5", lineHeight: "35.4px", width: "100%",
            fontFamily: "Epilogue, sans-seri"
          }}
        >
          Find Internships</div>

        <div className=' py-6 px-3 my-3 mx-6 flex flex-row justify-between items-center'
          style={{ border: "1px solid #eaeef5" }}
        >
          <div className='flex flex-row justify-start '>

            <SearchBar icon={<SearchIcon />} placeholder={"Role"}
              setFunction={setRole} />
            <SearchBar icon={<BusinessIcon />} placeholder={"Company"}
              setFunction={setCompany} />
            <SearchBar icon={<LocationOnIcon />} placeholder={"Location"}
              setFunction={setLocation} />
          </div>

          <span className='search hover:cursor-pointer '
            onClick={() => { handleSearch(role, company, location) }}
          >Search</span>
        </div>






        <div className='mx-6 flex flex-row gap-2' >
          <div
            className='flex flex-col justify-start items-start px-1'
            style={{ width: '162px', }}
          >
            <span
              style={{
                fontWeight: "600", color: "rgba(37, 50, 75, 1)",
                fontFamily: "Epilogue, sans-seri", fontSize: "14px", paddingBottom: "5px"

              }}
            >Type Of Employment</span>
            <Click name={"Remote"} />
            <Click name={"Full-Time"} />
            <Click name={"Part-Time"} />
            <Click name={"Remote"} />
            <Click name={"Remote"} />
          </div>

          {isLoading ? (
            <Box
              sx={{
                height: "320px",
                width: 'calc(100% - 170px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) :
            (<div
              style={{ width: 'calc(100% - 170px)' }}
            >
              {data?.map((internship, index) => (


                <Grid item xs={12} key={internship.id}>




                  {/* {

                    internship.status === "Not Applied" && */}

                    <JobListing
                      logo={logo2}
                      companyName={internship.company}
                      role={internship.role}
                      location={internship.location}
                      totalAvailable={internship.totalPositions}
                      totalApplied={internship.totalApplications}
                      changeColor={index % 2 === 0}
                      status={internship.status}
                      detailsButtonClick={() => {
                        navigate('../details', { state: { jobId: internship.details } });
                      }}
                      applyButtonClick={() => {
                        // Handle the apply button click
                        if (internship.status in ['Applied', 'Shortlisted', 'Selected', 'Not Shortlisted', 'Not Selected']) {
                          setShowAlert(true);
                          setAlertMessage('You have already applied for this job');
                          setAlertSeverity('warning');
                          navigate('../dashboard', { state: { type: type }
                            ,color:"dashboard" });
                        } else {
                          navigate('../apply', { state: { jobId: internship.details, type: type ,color:"dashboard",totalApplied:internship.totalApplied} });
                        }
                      }}
                    />
                  {/* } */}
                </Grid>
              ))
              }</div>
            )}
        </div>

      </div>
  );
}

export { getOpportunityList }

// put hr in 24-hr format
//  <Timer deadlinedate={1} month={6} year={2024} hour={12} minutes={0}
// newscript={loaderfunction()} />