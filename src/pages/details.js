import { CircularProgress, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { openLink } from '../utils.js';
import internshipImage from '../assets/internshipImage.svg';
import cofounderImage from '../assets/cofounderImage.svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Dot, Line, Paragraphs } from './student/apply.js';
import "../components/student/buttonstyle.css"


// Things to set :
// jobStartUpDetails.stage, jobStartUpDetails.companyPhoto, jobStartUpDetails.socials
// jobStartUpDetails.founderImage
export default function Details({ BASE_URL, startUpDetails }) {
  const { jobId, applied, positions } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [jobDetails, setJobDetails] = useState([]);
  const [jobStartUpDetails, setJobStartUpDetails] = useState(startUpDetails);
  const [isadmin, setisadmin] = useState(false);
  const [percent, setPercent] = useState();
  const createdAtMoment = moment(jobDetails.createdAt, 'YYYY-MM-DD')
  const Deadline = moment(jobDetails.deadline, 'YYYY-MM-DD')

  const navigate = useNavigate();

  const checkadmin = async () => {
    const adminCode = localStorage.getItem('adminCode');
    if (adminCode) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: adminCode }),
      };
      const url = `${process.env.REACT_APP_ADMIN_URL}/auth`;
      try {
        await fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            if (data.message === 'approved') {
              setisadmin(true);
            } else {
              console.log(data);
            }
          });
      } catch (error) {
        console.log('error');
      }
    }
  };
  const getStartUpDetails = async (startUpId) => {
    setLoading2(true);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/startUp/register/${startUpId}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setJobStartUpDetails(data.startUpDetails);
            setLoading2(false);
            console.log(data);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getJobDetails = async (e) => {
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = `${BASE_URL}/api/student/jobs/${jobId}`;
   
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            if (jobStartUpDetails === null) {
              getStartUpDetails(data.jobDetails.startUpId);

            }
            setJobDetails(data.jobDetails);
            let x = parseInt(data.jobDetails.totalApplications)
            let y = parseInt(applied)
            setPercent((y / x) * 100);
            setLoading(false);
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
    console.log(jobDetails);
    console.log(jobStartUpDetails);

    checkadmin();
  }, []);


  return (
    loading ? (<div className='w-full h-full flex flex-row justify-center items-center'>
      <CircularProgress />
    </div>) :

      <div>
        <div
          className='py-3 px-4 flex flex-row items-center'
          style={{ borderBottom: "1px solid gray" }}
        >
          <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
            onClick={() => {
              navigate("/student/applied", {
                state: {
                  type: "Internship"
                  , color: "applied"
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
          >Job Details</span>
        </div>



        {/* Card */}

        <div className='w-full p-5 h-auto'>
          <div
            className='flex flex-row justify-center items-center'
            style={{ backgroundColor: "#f8f8fd", padding: "50px" }}
          >

            <div
              className='w-full p-8 flex flex-row items-center justify-between'
              style={{
                height: "100px", border: "1px solid rgba(214, 221, 235, 1)",
                backgroundColor: "white"
              }}
            >
              <div className='flex flex-row gap-5'>
                <img src={internshipImage} alt="Company Icon" height="55px" width="55px" />

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
              <span className='apply hover:cursor-pointer flex flex-row justify-center items-center'
                style={{ width: "130px" }}
                onClick={() => {
                  navigate('../company', { state: { StartUpDetails: jobStartUpDetails,
                     color: "applied" } });
                }}
              >About Us</span>

            </div>

          </div>
        </div>

        <div className='px-6 flex flex-row justify-between'

        >


          {/* left */}
          <div style={{
            width: "calc(100% - 275px)"
          }}

          >
            {/* Main Content */}
            <Paragraphs title={"Responsibilities"} paragraph={jobDetails.responsibilities} />
            <Paragraphs title={"Nice-to-haves"} paragraph={jobDetails.skillsRequired} />
            <Paragraphs title={"Selection Process"} paragraph={jobDetails.selectionProcess} />
            <Paragraphs title={"Assignment"} paragraph={jobDetails.assignment} />


          </div>


          {/* Right */}
          <div className='flex flex-col align-baseline'>
            {/* About this Role */}
            <div className='flex flex-col'
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
                        backgroundColor: 'rgba(86, 205, 173, 1)'
                      },
                    }}
                  /></span>
                <p
                  style={{ fontSize: "14px", fontWeight: "500", textAlign: "center", color: "#7c8493", fontFamily: "Epilogue, sans-seri", marginTop: "5px" }}
                ><span className='font-bold text-black'>{applied} applied </span> of
                  {` ` + jobDetails.noOfOffers} capacity</p>

              </div>

              {Deadline && <Line start={"Apply Before"} end={Deadline.format('MMM DD YYYY')} />}
              {createdAtMoment && <Line start={"Job Posted On"}
                end={createdAtMoment.format('MMM DD YYYY')} />}
              {jobDetails.salary && <Line start={"Salary"} end={jobDetails.salary} />}
              {jobDetails.duration && <Line start={"Duration"} end={jobDetails.duration} />}


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

      </div>
  );
}



