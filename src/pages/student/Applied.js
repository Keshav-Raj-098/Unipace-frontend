import { Container, Typography, Grid, CardContent, Card, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import JobListing from '../../components/student/JobListing';
import logo from './logo.png';
import { useQuery } from '@tanstack/react-query';
import frame from "../../assets/Frame 68 (1).png"
import '../../components/student/buttonstyle.css'
import { total_jobs, applied_jobs, jobs_data } from './HomeCalc';







// TODO : security and performance issue in the way student is varified if he/she has applied
// TODO : error handling


const checkStatus = (studentsApplied, studentId) => {
  for (let i = 0; i < studentsApplied.length; i++) {
    if (studentsApplied[i].studentId === studentId) {
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
      designation: oneJsonData.designation,
      stipend: oneJsonData.stipend,
      deadline: oneJsonData.deadline,
      location: oneJsonData.jobLocation,
      status: checkStatus(oneJsonData.studentsApplied, studentId),
      details: oneJsonData.id,
      apply: {
        jobId: oneJsonData.id,
        status: checkStatus(oneJsonData.studentsApplied),
        deadline: oneJsonData.deadline,
      },
    };
    jsonDataArray.push(convertedJsonData);
  }
  console.log(jsonDataArray);
  return jsonDataArray;
};

const getOpportunityList = async (BASE_URL, type, studentId) => {
  const response = await fetch(`${BASE_URL}/api/student/jobs?type=${type}`)
  const data = await response.json()
  const jobList = data.jobs
  return convertToTableRows(jobList, studentId)
};

export default function Dashboard({ BASE_URL, studentDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const [applyColor, setapplyColor] = useState("All")
  const [status, setStatus] = useState(['Applied', 'Shortlisted', 'Selected', 'Not shortlisted', 'Not selected'])
  const type = useLocation().state?.type || "Internship";
  const navigate = useNavigate();
  const [selected, setselected] = useState(0);
  const [notSelected, setNotSelected] = useState(0);
  const [notShortlisted, setNotShortlisted] = useState(0);
  const [shortlisted, setShortlisted] = useState(0);
  const [Applied, setApplied] = useState(0);
  const [all, setall] = useState(0);
  const [Loading, setLoading] = useState(true);





  const { isLoading, data } = useQuery(
    {
      queryKey: [`opportunites`, type],
      queryFn: () => getOpportunityList(BASE_URL, type, studentDetails.id)
    }
  );

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const opportunityList = await getOpportunityList(BASE_URL, "Internship", studentDetails.id);

        setApplied(jobs_data(opportunityList, "Applied"));
        setShortlisted(jobs_data(opportunityList, "Shortlisted"));
        setNotShortlisted(jobs_data(opportunityList, "Not shortlisted"));
        setselected(jobs_data(opportunityList, "Selected"));
        setNotSelected(jobs_data(opportunityList, "Not selected"))
        setall(applied_jobs(opportunityList))
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL, studentDetails.id]);




  const Statusbtn = ({ text, num }) => (
    <span
      style={{
        fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
        fontFamily: "Epilogue, sans-seri", height: "30px",
        borderBottom: applyColor === `${text}` && "2px solid #1987d2",
        color: applyColor === `${text}` && "rgba(37, 50, 75, 1)",
        // fontWeight: applyColor === `${text}` && "bold"
      }}
      className={` hover:cursor-pointer px-3 py-2`}
      onClick={() => {
        setapplyColor(`${text}`)

        if (text === "All") {
          setStatus(['Applied', 'Shortlisted', 'Selected', 'Not shortlisted', 'Not selected'])
        }
        else if (text === "Shortlisted") { setStatus("Shortlisted") }
        else if (text === "Applied") { setStatus("Applied") }
        else if (text === "Selected") { setStatus("Selected") }
        else if (text === "Not Shortlisted") { setStatus("Not shortlisted") }
        else if (text === "Not Selected") { setStatus("Not selected") }
      }}

    ><span>{`${text} (`}<span
    style={{color:"#1986d2",fontWeight:"600"}}
    >{`${num}`}</span>{')'}</span></span>
  )





  //  Function(react component) that will load after the deadline

  const loaderfunction = () => {
    return (

      <div className='py-2 px-6 h-full w-full'>

        <div className=" px-2 h-12 pb-3 flex flex-row justify-start items-center"
          style={{
            fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
            borderBottom: "1px solid grey", lineHeight: "35.4px", width: "100%",
            fontFamily: "Epilogue, sans-seri"
          }}
        >
          My Applications</div>

        <div className="w-auto px-2 py-3 flex flex-col justify-start"

        >
          <p
            style={{ fontSize: "19px", fontFamily: "Epilogue, sans-seri", fontWeight: "600", color: "#25324b", lineHeight: "28.8px" }}
          >Keep it up ,{studentDetails.name}</p>
          <p
            style={{
              fontSize: "14px", fontWeight: "500",
              fontFamily: "Epilogue, sans-seri", color: "rgba(124, 132, 147, 1)",
              lineHeight: "22.8px"
            }}
          > Here is your application's status,</p>




        </div>

        <div className='h-auto w-full'>
          {Loading ?

            <Box
              sx={{
                height: 370.5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box> :
            <>


              <div
                className='w-full flex flex-row justify-start gap-8 mt-7'
                style={{ paddingBottom:"6px",borderBottom: "1px solid #d6ddeb"}}
              >

                <Statusbtn num={all} text={"All"} />
                <Statusbtn num={selected} text={"Selected"} />
                <Statusbtn num={shortlisted} text={"Shortlisted"} />
                <Statusbtn num={Applied} text={"Applied"} />
                <Statusbtn num={notShortlisted} text={"Not Shortlisted"} />
                <Statusbtn num={notSelected} text={"Not Selected"} />
              </div>

              <div
                style={{
                  fontSize: "20px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
                  fontFamily: "Epilogue, sans-seri"
                }}
                className='w-full py-5 mt-5'
              >Application History

              </div>
              <div>

                <span></span>

              </div>



              {isLoading ? (
                <Box
                  sx={{
                    height: 370.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {data.map((internship, index) => (

                    <Grid item xs={12} key={internship.id}>

                      {status.includes(internship.status) &&

                        <JobListing
                          logo={logo}
                          companyName={internship.company}
                          mission={internship.mission}
                          role={internship.designation}
                          salary={internship.stipend}
                          deadline={internship.deadline}
                          location={internship.location}
                          changeColor={index % 2 === 0}
                          type={type}
                          status={internship.status}
                          hasApplied={internship.status === 'Applied'}
                          detailsButtonClick={() => {
                            navigate('../details', { state: { jobId: internship.details } });
                          }}

                        />
                      }
                    </Grid>
                  ))}
                </>
              )}</>}
        </div>


      </div>)
  }












  return (
    <>
      {loaderfunction() ? loaderfunction() :
        <div>You haven't applied for any oppurtunity yet</div>

      }

    </>
  );
}
