import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
// import JobDetails from "../../components/startUp/applicants/Jobdetails.js"
// import StudentsApplied from "./studentsApplied.js"



const Applicant = ({ BASE_URL,setShowAlert, setAlertMessage, setAlertSeverity}) => {

    const navigate =  useNavigate()

  

    const {jobId,applied} = useLocation().state;
    // console.log(applicant);
    
  return (
    <div>
        {/* <JobDetails  BASE_URL={ BASE_URL} jobId={jobId} /> */}
        {/* <StudentsApplied  BASE_URL={ BASE_URL} setAlertMessage={setAlertMessage} setAlertSeverity={setAlertSeverity} setShowAlert={setShowAlert} jobId={jobId} /> */}
      
      
    </div>
  )
}

export default Applicant
