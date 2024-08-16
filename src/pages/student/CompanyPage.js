import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import internshipImage from '../../assets/internshipImage.svg';
import { CircularProgress } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';



const Line = ({ start, end }) => (<div
  className='flex flex-row justify-between '
  style={{
    fontSize: "15px", fontWeight: "600", color: "#25324b",
    fontFamily: "Epilogue,serif", textAlign: "center", gap: "15px"
  }}

>
  <span>{start}</span>
  <span
    style={{ fontWeight: "400", color: "rgba(37, 50, 75, 1)" }}
  >{end}</span>
</div>)

const Line2 = ({ title, text }) => (
  <div className={` flex flex-row w-full`}
    style={{ marginTop: "6px" }}
  >
    <span
      style={{ color: "#25324b", fontSize: "20", fontWeight: "400", }}
    >{title}<ArrowRightIcon style={{ position: "relative", right: "6px" }} /></span>
    <span
      style={{ fontSize: "17px", fontWeight: "400", textOverflow: "wordwrap", whiteSpace: "normal", wordWrap: "break-word", }}
    >{text}</span>
  </div>
)



const CompanyPage = () => {

  const navigate = useNavigate();
  const startUpDetails = useLocation().state?.StartUpDetails;
  const [Loading, setLoading] = useState(true)

  console.log(startUpDetails);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const directTo = (address) => {
    if (address) { window.open(address, '_blank');}};


  return (

    Loading ? (<div className='w-full h-full flex flex-row justify-center items-center'>
      <CircularProgress />
    </div>)

      :
      <div>
        <div
          className='py-3 px-4 flex flex-row items-center'
          style={{ borderBottom: "1px solid gray" }}
        >
          <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
            onClick={() => {
              navigate(-1, {
                state: {
                  type: "Internship"
                  , color: "applied"
                }
              })
            }}
          />
          <span
            style={{
              fontSize: "27px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
              lineHeight: "35.4px", width: "100%",
              fontFamily: "Clash Display,serif", marginLeft: "15px"
            }}
          >Company Details</span>
        </div>

        {/* card */}
        <div className='w-full p-2 h-auto'>
          <div
            className='flex flex-row justify-between items-start'
            style={{ backgroundColor: "#f8f8fd", padding: "25px 16px" }}
          >

            <div className='flex flex-col items-start justify-start'
              style={{
                width: "calc(100% - 175px)", color: "rgba(37, 50, 75, 1)",
                fontFamily: "Clash Display,serif",
              }}
            >
              <span
                style={{ fontSize: "24px", fontWeight: "600", color: "rgba(37, 50, 75, 1)" }}
              >{startUpDetails?.companyName}</span>

              <p style={{ fontSize: "18px", fontWeight: "400", }}>{startUpDetails?.companyVision}</p>

              <p className='mt-5'>
                {startUpDetails?.sector && <Line start={"Sector"} end={startUpDetails?.sector} />}
                {startUpDetails?.noOfEmployees &&
                  <Line start={"No. of Employees"} end={startUpDetails?.noOfEmployees} />}
              </p>

            </div>


            <img src={internshipImage} alt="companyImg" height="125px" width="150px" />




          </div>
        </div>



        {/* Main Content */}
        <div className='px-2 pb-4 flex flex-col gap-2'>

          {/* Founder */}
          {startUpDetails?.founder[0].name &&
            <div className='px-4'
              style={{ backgroundColor: "#f8f8fd" }}
            >

              <span style={{
                fontSize: "23px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
                fontFamily: "Clash Display,serif",

              }}>Founder</span>

              <div className='flex flex-col'
                style={{
                  fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                  fontFamily: "Epilogue,serif", lineHeight: "25.5px", marginTop: "5px"
                }}
              >
                <div className='flex flex-row'>

                  <Line2 title={"Name"} text={startUpDetails.founder[0]?.name} />

                  <div className={` flex flex-row w-full`}
                    style={{ marginTop: "6px" }}
                  >
                    <span
                      style={{ color: "#25324b", fontSize: "20", fontWeight: "400", }}
                    >Linkedin
                      <ArrowRightIcon style={{ position: "relative", right: "6px" }} /></span>
                    <LinkedInIcon 
                    className='hover:cursor-pointer'
                    onClick={()=>{directTo(startUpDetails.founder[0]?.linkedIn)}} />
                  </div>

                  <div className={` flex flex-row w-full`} style={{ marginTop: "6px" }}>
                    <span style={{ color: "#25324b", fontSize: "20", fontWeight: "400", }}
                    >Website
                      <ArrowRightIcon style={{ position: "relative", right: "6px" }} /></span>
                    <LanguageIcon
                    className='hover:cursor-pointer'
                    onClick={()=>{directTo(startUpDetails.founder[0]?.website)}} />
                  </div>
                </div>

              </div>

              <div className={` flex flex-col w-full`}
                style={{ marginTop: "6px" }}
              >
                <span
                  style={{ color: "#25324b", fontSize: "20", fontWeight: "400", }}
                >Bio<ArrowRightIcon style={{ position: "relative", right: "6px" }} /></span>
                <span
                  style={{ fontSize: "17px", fontWeight: "400", textOverflow: "wordwrap", whiteSpace: "normal", wordWrap: "break-word", }}
                >{startUpDetails.founder[0]?.bio}</span>
              </div>




            </div>
          }


          {/* HR Details */}

          <div
            className='px-4'
            style={{ backgroundColor: "#f8f8fd" }}
          >

            <span style={{
              fontSize: "23px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
              fontFamily: "Clash Display,serif"

            }}>HR Details</span>

            <div className='flex flex-row'
              style={{
                fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue,serif", lineHeight: "25.5px", marginTop: "5px"
              }}
            >

              <Line2 title={"Name"} text={startUpDetails?.hrName} />
              <Line2 title={"Designation"} text={startUpDetails?.hrDesignation} />

              <div className={` flex flex-row w-full`}
                style={{ marginTop: "6px" }}
              >
                <span
                  style={{ color: "#25324b", fontSize: "20", fontWeight: "400", }}
                >E-mail
                  <ArrowRightIcon style={{ position: "relative", right: "6px" }} /></span>
                <MailIcon
                  className='hover:cursor-pointer'
                  onClick={()=>{directTo(startUpDetails?.hrEmail)}} />
              </div>



            </div>



          </div>


          {/* Contact Us */}

          <div className=' flex flex-row items-center'
            style={{ backgroundColor: "#f8f8fd",gap:"30px",padding:"40px 16px" }}>

            <span style={{
              fontSize: "23px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
              fontFamily: "Clash Display,serif",

            }}>Contact Us</span>

            <div className='flex flex-row justify-center self-center'
              style={{
                fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue,serif", lineHeight: "25.5px", 
                gap:"15px"
              }}
            >

              

              <InstagramIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.social)}} />

              <LinkedInIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.linkedIn)}} />
              <LanguageIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.website)}} />
              <MailIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.email)}} />
                {/* Tracxn */}
              <InstagramIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.tracxn)}} />
                {/* cruchbase */}
              <InstagramIcon className='hover:cursor-pointer'
                onClick={()=>{directTo(startUpDetails.cruchbase)}} />

            </div>



          </div>
        </div>
      </div >


  )
}

export default CompanyPage
