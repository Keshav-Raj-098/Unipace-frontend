import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import logo from './logo.png';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import '../../components/student/buttonstyle.css'
import tick from "../../assets/greentick.svg"
import { LinearProgress, Box, CircularProgress } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const Dot = () => (
  <span
    style={{
      height: "7px", width: "7px", borderRadius: "50%",
      backgroundColor: "rgba(81, 91, 111, 1)"
    }}
  ></span>
)


const Paragraphs = ({ title, paragraph }) => (
  <div>

    <span style={{
      fontSize: "22px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
      fontFamily: "Clash Display,serif",

    }}>{title}</span>

    <div className='py-3'>
      {paragraph?.map((sentence, index) => (
          <React.Fragment key={index}>
            <div className='flex flex-row gap-1 items-start'
              style={{
                fontSize: "16px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue,serif", lineHeight: "25.5px"

              }}
            >
              <img src={tick} alt="icon" height={18} width={18} style={{position:"relative",top:"5px"}} />

              <p style={{ margin: "2px 4px",paddingTop:"0px" }}>
                {sentence.trim()}.<br />
              </p>
            </div>
          </React.Fragment>
        ))}
    </div>

  </div>
)

const Line = ({ start, end }) => (<div
  className='flex flex-row justify-between '
  style={{
    fontSize: "13px", fontWeight: "500", color: "rgba(81, 91, 111, 1)",
    fontFamily: "Epilogue,serif", textAlign: "center", padding: "0px 8px 13px 8px"
  }}

>
  <span>{start}</span>
  <span
    style={{ fontWeight: "600", color: "black" }}
  >{end}</span>
</div>)

export default function Apply({ BASE_URL, studentDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const navigate = useNavigate();
  const { jobId,totalApplied } = useLocation().state;
  console.log(jobId,totalApplied);
  
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [whyShouldWeHireYou, setWhyShouldWeHireYou] = useState('');
  const [jobDetails, setJobDetails] = useState([]);
  const [jobStartUpDetails, setJobStartUpDetails] = useState({});

    
  const getStartUpDetails = async (startUpId) => {

    try {
      await fetch(`${BASE_URL}/api/startUp/register/${startUpId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setJobStartUpDetails(data.startUpDetails);
            
            


          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getJobDetails = async (e) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/student/jobs/${jobId}`;

    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            
            setJobDetails(data.jobDetails);
            let x = parseInt(data.jobDetails.totalApplications) 
            let y = parseInt(totalApplied) 
            setPercent((y/x)*100);
            getStartUpDetails(data.jobDetails.startupId);
            
            setLoading(false);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

    
  const submitResume = async (e) => {
    e.preventDefault();
    const formData = {
      studentId: studentDetails.id,
      name: studentDetails.name,
      email: studentDetails.email,
      course: studentDetails.course,
      college: studentDetails.college,
      department: studentDetails.department,
      year: studentDetails.year,
      cgpa: studentDetails.cgpa,
      linkedIn: studentDetails.linkedIn,
      resumeLink: studentDetails.resumeLink,
      // whyShouldWeHireYou: whyShouldWeHireYou,
      status: 'Applied',
    };
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.localStorageStudentToken,
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/student/jobs/${jobId}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {

            setAlertMessage('Applied successfully.');
            setAlertSeverity('success');
            setShowAlert(true);
            navigate(-1);
          } else if (data.status === 401) {

            setAlertMessage(data.message);
            setAlertSeverity('error');
            setShowAlert(true);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobDetails();

  }, []);
  const createdAtMoment = moment(jobDetails?.createdAt, 'YYYY-MM-DD')
  const Deadline = moment(jobDetails?.deadline, 'YYYY-MM-DD')
  
  


  return (


    
    loading ? 
  (<div className='w-full h-full flex flex-row justify-center items-center'>
    <CircularProgress />
  </div>) :
    (<>
      {/* Title of page */}
      <div
        className='py-3 px-4 flex flex-row items-center'
        style={{ borderBottom: "1px solid gray" }}
      >
        <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
          onClick={() => {
            navigate("/student/dashboard", {
              state: {
                type: "Internship"
                , color: "dashboard"
              }
            })
          }}
        />
        <span
          style={{
            fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
            lineHeight: "35.4px", width: "100%",
            fontFamily: "Clash Display,serif", marginLeft: "15px"
          }}
        >Job Description</span>
      </div>



      {/* apply section with the card */}

      <div className='w-full p-5 h-auto'>
        <div
          className='flex flex-row justify-center items-center'
          style={{ backgroundColor: "#f8f8fd", padding: "50px" }}
        >
          {/* card */}
          <div
            className='w-full p-8 flex flex-row items-center justify-between'
            style={{
              height: "100px", border: "1px solid rgba(214, 221, 235, 1)",
              backgroundColor: "white"
            }}
          >
            <div className='flex flex-row gap-5'>
              <img src={logo} alt="Company Icon" height="55px" width="55px" />

              <div
                className='flex flex-col justify-start mx-4'
              >
                <span
                  style={{
                    fontSize: "21px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
                    fontFamily: "Clash Display,serif",
                  }}>
                  {jobDetails.title}
                </span>

                <div
                  className='flex flex-row items-center '
                  style={{
                    fontSize: "15px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                    fontFamily: "Epilogue,serif", gap: "6px"
                  }}

                >
                  <span>{jobDetails.companyName}</span>
                  <Dot />
                  <span>{jobDetails.jobLocation}</span>
                  <Dot />
                  <span>Full-time</span>


                </div>

              </div>
            </div>
            <div className='flex flex-row items-center'>
              <span className='flex flex-row gap-2'
                style={{ paddingRight: "15px", borderRight: "2px solid #f0f3f8" }}
              >
                <OpenInNewIcon className='hover:cursor-pointer'
                
                onClick={()=>{ navigate('../company', 
                  { state: { StartUpDetails: jobStartUpDetails,
                  color: "dashboard" } })}}
                />
                <ShareOutlinedIcon className='hover:cursor-pointer' />
              </span>
              <span
                className='apply hover:cursor-pointer flex flex-row justify-center items-center'
                style={{ width: "130px" }}
                onClick={submitResume}
              > Apply
              </span>
            </div>

          </div>

        </div>
      </div>



      {/* main Content */}

      <div className='px-6 flex flex-row justify-between'

      >


        {/* left */}
        <div style={{
          width: "calc(100% - 275px)"
        }}

        >

          
          {/* Main Content */}
          <Paragraphs title={"Description"} paragraph={[`${jobDetails.description}`]} />
          <Paragraphs title={"Responsibilities"} paragraph={jobDetails.responsibilities} />
          <Paragraphs title={"Nice-to-haves"} paragraph={jobDetails.skillsRequired} />
          <Paragraphs title={"Perks & Benifits"} paragraph={jobDetails.perks} />
          <Paragraphs title={"Selection Process"} paragraph={jobDetails.selectionProcess} />
          <Paragraphs title={"Assignment"} paragraph={jobDetails.assignment} />


        </div>


        {/* Right */}
        <div className='flex flex-col align-baseline'>
          {/* About this Role */}
          <div className='flex flex-col h-auto'
            style={{
              width: '275px',
              // border: "1px solid black", 
              paddingLeft: "10px",
              paddingRight: "10px",
              marginBottom: "15px"
            }}
          >
            <span
              style={{
                fontSize: "19px", fontWeight: "bold", color: "rgba(37, 50, 75, 1)",
                fontFamily: "Clash Display,serif", textAlign: "left", marginBottom: "10px"

              }}

            >About This Role</span>

            <div
              className='flex flex-col justify-center align-middle'
              style={{
                width: "100%",
                backgroundColor: "rgba(248, 248, 253, 1)",
                height: "70px",
                marginBottom: "15px"


              }}>



              <span className='px-4'>
                <LinearProgress variant="determinate" value={percent}
                  sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                      backgroundColor: 'rgba(86, 205, 173, 1)'},}}
                /></span>
              <p
                style={{ fontSize: "14px", fontWeight: "500", textAlign: "center", color: "#7c8493", fontFamily: "Epilogue, sans-seri", marginTop: "5px" }}
              ><span className='font-bold text-black'>{totalApplied} applied </span> of
                {` ` + jobDetails.totalApplications} capacity</p>

            </div>

            <Line start={"Apply Before"} end={Deadline.format('MMM DD YYYY')} />
            <Line start={"Job Posted On"} end={createdAtMoment?.format('MMM DD YYYY')} />
            <Line start={"Salary"} end={jobDetails.salary} />
            { jobDetails.duration && <Line start={"Duration"} end={jobDetails.duration} />}



          </div>

          {/* Categories */}

          <div className='flex flex-col'
            style={{
              width: '275px',
              // border: "1px solid black", 
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <span
              style={{
                fontSize: "19px", fontWeight: "bold", color: "rgba(37, 50, 75, 1)",
                fontFamily: "Clash Display,serif", textAlign: "left", marginBottom: "10px"

              }}

            >Categories</span>

            <div className='flex flex-row gap-2' >

              <span className={`basic2 Marketing`}>Marketing</span>
              <span className={`basic2 Design`}>Design</span>





            </div>
          </div>
        </div>

      </div>





    </>)
  );
}

export {Dot,Line,Paragraphs}




