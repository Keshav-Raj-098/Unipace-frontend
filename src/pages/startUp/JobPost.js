import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import Header from '../../components/startUp/Header';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IoBriefcase } from "react-icons/io5";
import { FaClipboardList, FaGift } from "react-icons/fa6";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Step1 from '../../components/startUp/JobPostPages.js/Page1';
import { Step2 } from '../../components/startUp/JobPostPages.js/Page2';
import Step3 from '../../components/startUp/JobPostPages.js/Page3';
import { dateCalendarClasses } from '@mui/x-date-pickers';



const MoveOrNot = (values, setFunction) => {
  return Object.values(values).every(value => value !== undefined && value !== null && value !== '');
 
};









export default function AddNew({ BASE_URL, setShowAlert, setAlertMessage, setAlertSeverity, IsOpen, setIsOpen, loading3, setloading3, newJD }) {
  const navigate = useNavigate();
  const { type, companyName, startUpId, jobId } = useLocation().state;
  const [designation, setDesignation] = useState('');
  const [duration, setDuration] = useState('');
  const [stipend, setStipend] = useState('');
  const [noOfOffers, setNoOfOffers] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  // const [responsibilities, setResponsibilities] = useState('');
  const [assignment, setAssignment] = useState('');
  // const [selectionProcess, setSelectionProcess] = useState('');
  const [hoursType, setHoursType] = useState('fulltime'); // either parttime or fulltime
  const [jobLocation, setJobLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const updateOrAdd = jobId !== '' && jobId !== undefined ? 'Update' : 'Add';
  
  const [step, setStep] = useState("one");
  
  
  
  
  const [title, setTitle] = useState('');
  const [Type, setType] = useState('');
  const [Salary, setSalary] = useState('');
  const [deadline, setDeadline] = useState();
  const [category, setCategory] = useState();
  const [addSkill, setAddSkill] = useState(["Graphic", "Media"]);
  const [description, setDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [skills, setSkills] = useState([]);
  const [perks, setPerks] = useState([]);
  const [selectionProcess, setSelectionProcess] = useState([]);
  const [totalApplications, setTotalApplications] = useState();
  const [totalRequired, setTotalRequired] = useState("");
  const [currency, setCurrency] = useState('INR');
  const [salary, setsalary] = useState('INR');

  useEffect(() => {
    setSalary(`${currency} ${salary}`)
  }, [salary, currency])

  

  const Step1Values = { title, Type, salary,currency,category, addSkill, deadline, totalApplications, totalRequired }
  const Step1Function = { setTitle, setType, setSalary, setCategory, setAddSkill, setDeadline, setTotalApplications, setTotalRequired,setsalary,setCurrency }

  const Step2Values = { description, responsibilities, qualification, skills, selectionProcess }
  const Step2Function = { setDescription, setResponsibilities, setQualification, setSkills, setSelectionProcess }
   
  const move1 = MoveOrNot(Step1Values)
  const move2 = MoveOrNot(Step2Values)
  const move3 = perks.length !== 0; 

 console.log();
 
 

  const addNewOpportunity = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      companyName: companyName,
      title:title,
      type: "Part-Time",
      // duration: duration,
      category:category,
      salary: Salary,
      category:category,
      addSkill:addSkill,
      description:description,
      // jobLocation: jobLocation,
      responsibilities: responsibilities,
      skills:skills,
      perks:perks,
      qualification:qualification,
      assignment: assignment,
      deadline: deadline,
      selectionProcess: selectionProcess,
      totalApplications:totalApplications,
      totalRequired:totalRequired,
      startUpId: "884c8085-ccba-4bf6-9494-f15001d57472",
      createdAt: moment(new Date()).format('YYYY-MM'),
    };
    console.log(startUpId);
    
    
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.localStorageStartUpToken,
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/startUp/jobs`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 201) {
            setLoading(false);
            setAlertMessage('Opportunity added successfully.');
            setAlertSeverity('success');
            setShowAlert(true);
            setStep("one")
            navigate("../jobPost")
          } else if (data.status === 400) {
            setLoading(false);
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
    console.log(formData);
    
  };

  const updateOpportunity = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      designation: designation,
      duration: duration,
      stipend: stipend,
      noOfOffers: noOfOffers,
      skillsRequired: skillsRequired,
      responsibilities: responsibilities,
      assignment: assignment,
      deadline: deadline,
      selectionProcess: selectionProcess,
      hoursType: hoursType,
      jobLocation: jobLocation,
      createdAt: moment(new Date()).format('YYYY-MM'),
    };
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.localStorageStartUpToken,
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/startUp/jobs/update/${jobId}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            setAlertMessage('Opportunity updated successfully.');
            setAlertSeverity('success');
            setShowAlert(true);
            navigate(-1);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getJobDetails = async (jobId) => {
    setLoading2(true);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/startUp/jobs/${jobId}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading2(false);
            setDesignation(data.jobDetails.designation);
            setAssignment(data.jobDetails.assignment);
            setDeadline(data.jobDetails.deadline);
            setDuration(data.jobDetails.duration);
            setNoOfOffers(data.jobDetails.noOfOffers);
            setResponsibilities(data.jobDetails.responsibilities);
            setSelectionProcess(data.jobDetails.selectionProcess);
            setSkillsRequired(data.jobDetails.skillsRequired);
            setStipend(data.jobDetails.stipend);
            setHoursType(data.jobDetails.hoursType || 'fulltime');
            setJobLocation(data.jobDetails.jobLocation);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addorUpdateOpportunity = async (e) => {
    if (jobId !== '' && jobId !== undefined) {
      updateOpportunity(e);
    } else {
      addNewOpportunity(e);
    }
  };

  useEffect(() => {
    if (jobId !== '' && jobId !== undefined) {
      getJobDetails(jobId);
    } else {
      setLoading2(false);
    }
  }, []);

  function makeList(arr) {

    if ((arr !== undefined) && (arr !== null)) {

      return arr.join('\n')
    }
    else { return arr }

  }



  useEffect(() => {
    setDesignation(newJD.designation)
    setDuration(newJD.duration)
    setStipend(newJD.stipend)
    setNoOfOffers(newJD.noOfOffers)
    setSkillsRequired(makeList(newJD.skillsRequired))
    setResponsibilities(makeList(newJD.responsibilitie))
    setAssignment(makeList(newJD.assignment))
    setDeadline(newJD.deadline)
    setSelectionProcess(makeList(newJD.selectionProcess))
    if (newJD.hoursType == "true") { setHoursType("fulltime") }
    else { setHoursType("parttime") }
    setJobLocation(newJD.jobLocation)
    setloading3(false)
    setIsOpen(false)

    return () => {
      setDesignation("")
      setDuration("")
      setStipend("")
      setNoOfOffers("")
      setSkillsRequired("")
      setResponsibilities("")
      setAssignment("")
      setDeadline("")
      setSelectionProcess("")
      setHoursType("")
      setJobLocation("")
    }
  }, [newJD])

  const handleclickForward = () => {



    if (step === "one") { 
      if(move1){setStep("two")}
      else{
        setAlertMessage('All fields Required');
            setAlertSeverity('failed');
            setShowAlert(true);
      }
     }
    else if (step === "two") { 
      if(move2){setStep("three")}
    else{ setAlertMessage('All fields Required');
      setAlertSeverity('failed');
      setShowAlert(true);} }
  }


  const handleclickBackward = () => {



    if (step === "two") { setStep("one") }
    else if (step === "three") { setStep("two") }
  }



  return (

    <div className='py-2 px-6 h-full w-full'>


      <div
        className='py-3 flex flex-row items-center'

      >
        <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
          onClick={() => {
            navigate(-1, {
              state: {
                color: "dashboard"
              }
            })
          }}
        />
        <span
          style={{
            fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
            fontFamily: "Clash Display,serif", marginLeft: "7px"
          }}
        >Post a Job</span>
      </div>

      {/* Steps Showcase */}
      <div className='p-2 flex flex-row w-full items-center justify-between'
        style={{ border: "1px solid rgba(214, 221, 235, 1)" }}

      >
        <StepStatus icon={<IoBriefcase 
        color={((step === "one")|| move1) ? "white" : "#707785"}
          fontSize="22px" />} number={1} title={"Job Information"} status={step === "one"} 
          CompletedorNot={move1} />

        <StepStatus icon={<FaClipboardList color={((step === "two")|| move1) ? "white" : "#707785"}
          fontSize="22px" />} number={2} title={"Job Description"} status={step === "two"} 
          CompletedorNot={move2}/>


        <StepStatus icon={<FaGift color={((step === "three")|| move3) ? "white" : "#707785"}
          fontSize="22px" />} number={3} title={"Perks & Benifits"} status={step === "three"}
          CompletedorNot={move3} />
      </div>

      {step === "one" && <Step1 {...Step1Values} {...Step1Function} />}
      {step === "two" && <Step2 {...Step2Values} {...Step2Function} />}
      {step === "three" && <Step3 perks={perks} setPerks={setPerks} />}

      <div
        style={{
          display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
          paddingTop: "18px", paddingBottom: "22px", paddingRight: "45px"
        }}
      >

        <span className='flex  flex-row justify-center items-center cursor-pointer'
          style={{
            fontSize: "16px", fontWeight: "400", color: "rgba(37, 50, 75, 1)",
            fontFamily: "Epilogue, sans-seri", marginLeft: "7px", padding: "7px 20px",
            backgroundColor: "rgba(70, 64, 222, 1)", color: "white", gap: "4px",
            opacity: (step === "one") && "0"
          }}
          onClick={handleclickBackward}
        ><ArrowBackIcon />Previous Step</span>



       {step==="three" ? 
       
       <StepButton handleClick={addNewOpportunity} text={"Post"} />
      
      :
      <StepButton handleClick={handleclickForward} text={"Next Step"} />
      }



      </div>




    </div>
  );
}


















const StepStatus = ({ icon, status, title, number,CompletedorNot }) => (
  <div
    className='w-1/3 flex flex-row justify-center items-center'
    style={{ height: "75px", width: "30%" }}
  >

    <div
      className='flex flex-row justify-center items-center'
      style={{
        height: "50px", width: "50px", borderRadius: "50%",
        backgroundColor: (status || CompletedorNot) ? "#4640de" : "#e9ebfd",
      }}>
      {icon}
    </div>
    <div className='flex flex-col'
      style={{ fontFamily: "Epilogue", marginLeft: "8px" }}
    >
      <span style={{
        fontFamily: "Epilogue", fontSize: "14px", fontWeight: "400",
        color: status ? "rgba(70, 64, 222, 1)" : "rgba(168, 173, 183, 1)",
      }}>
        {`Step ${number || 1}/3`}
      </span>
      <span
        style={{
          fontFamily: "Epilogue", fontSize: "16px", fontWeight: "600",
          color: status ? "rgba(37, 50, 75, 1)" : "rgba(124, 132, 147, 1)",
        }}
      >{title}</span>

    </div>




  </div>
)

const StepButton = ({ handleClick, text }) => {

  return <span className='flex  flex-row justify-center items-center cursor-pointer'
    style={{
      fontSize: "16px", fontWeight: "400", color: "rgba(37, 50, 75, 1)",
      fontFamily: "Epilogue, sans-seri", marginLeft: "7px", padding: "7px 20px",
      backgroundColor: "rgba(70, 64, 222, 1)", color: "white", gap: "4px"
    }}
    onClick={handleClick}
  >{text}<ArrowForwardIcon /></span>
}






// <button
// onClick={() => {
//   IsOpen ? setIsOpen(false) : setIsOpen(true)}}
// className=" text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity text-sm"
// style={{backgroundColor:"#1976d2"}}
// >
// Build with AI
// </button>