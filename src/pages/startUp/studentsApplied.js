import { CardContent, Container, Typography, Card, Button, Box, CircularProgress, Modal, CardActions } from '@mui/material';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StudentAppliedTable from '../../components/table';
import React, { useEffect, useState } from 'react';
import PopOver from '../../components/startUp/popOver';
import { useLocation, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import JobDetails from "../../components/startUp/Jobdetails.js"
import "../../components/startUp/buttonstyle.css"
// import { openLink } from '../../utils';
import SearchIcon from '@mui/icons-material/Search';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment/moment";

export default function StudentsApplied({ BASE_URL, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const navigate = useNavigate();



  const { applied, designation, jobId,required } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [studentsAppliedTableRow, setStudentsAppliedTableRow] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [coverLetter, setCoverLetter] = useState('coverLetter');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeLink, setResumeLink] = useState('');
  const [applyColor, setapplyColor] = useState("applicants");
  const Applieddate = moment(new Date()).format('DD MMM YYYY');

  console.log(studentsAppliedTableRow);




  const openLink = (value) => {
    setResumeLink(value);
    setResumeOpen(true);
  };

  const closeResumeModal = () => {
    setResumeOpen(false);
    setResumeLink('');
  };

  const getStudentsAppliedList = async () => {
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/startUp/jobs/${applied}`;
    try {
      console.log(applied);

      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            convertToTableRows(data.jobDetails.studentsApplied);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const convertToTableRows = (studentsApplied) => {
    const jsonDataArray = [];

    for (let i = 0; i < studentsApplied.length; i++) {
      const oneJsonData = studentsApplied[i].student;
      const x = studentsApplied[i];
      const convertedJsonData = {
        id: i + 1,
        name: oneJsonData.name,
        email: oneJsonData.email,
        course: oneJsonData.course,
        college: oneJsonData.college,
        department: oneJsonData.department,
        year: oneJsonData.year,
        cgpa: oneJsonData.cgpa,
        imglink: oneJsonData.imglink,
        whyShouldWeHireYou: x.whyShouldWeHireYou,
        resumeId: oneJsonData.resumeId,
        linkedIn: oneJsonData.linkedIn,
        statusUpdate: { status: x.status, studentId: x.studentId },
        resumeLinkId: `https://drive.google.com/file/d/${oneJsonData.resumeId}/preview`,
        resumeLink : oneJsonData.resumeLink,
      };
      jsonDataArray.push(convertedJsonData);
    }
    setStudentsAppliedTableRow(jsonDataArray);
    setLoading(false);
  };

  const openWhyShouldWeHireYou = (value) => {
    setCoverLetter(value);
    handleOpen();
  };

  const studentsAppliedTableColumn = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'course',
      headerName: 'Course',
      flex: 1,
    },
    {
      field: 'college',
      headerName: 'College',
      flex: 1,
    },
    {
      field: 'department',
      headerName: 'Department',
      flex: 1,
    },
    {
      field: 'year',
      headerName: 'Year',
      flex: 1,
    },
    {
      field: 'cgpa',
      headerName: 'CGPA',
      flex: 1,
    },
    {
      field: 'whyShouldWeHireYou',
      headerName: 'Cover Letter',
      flex: 1,
      renderCell: ({ value }) => {
        return (
          <Button size="small" onClick={() => openWhyShouldWeHireYou(value)}>
            <HistoryEduIcon />
          </Button>
        );
      },
    },
    {
      field: 'resumeLinkId',
      headerName: 'Resume',
      flex: 1,
      renderCell: ({ value }) => {
        return (
          <Button size="small" onClick={() => openLink(value)} rel="noopener noreferrer">
            <LibraryBooksRoundedIcon />
          </Button>

        );
      },
    },
    {
      field: 'linkedIn',
      headerName: 'linkedIn',
      flex: 1,
      renderCell: ({ value }) => {
        return value === '' || value === undefined ? (
          '_'
        ) : (
          <Button size="small" href={value} target="_blank">
            <LinkedInIcon />
          </Button>
        );
      },
    },
    {
      field: 'statusUpdate',
      headerName: 'Update Status',
      width: 180,
      renderCell: ({ value }) => {
        return (
          <PopOver
            status={value.status}
            studentId={value.studentId}
            applied={applied}
            BASE_URL={BASE_URL}
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
            setAlertSeverity={setAlertSeverity}
          />
        );
      },
    },
  ];

  useEffect(() => {
    getStudentsAppliedList();
  }, []);

  const styles = {
    large: { fontSize: "23px", fontWeight: "600", color: "rgba(37, 50, 75, 1)" },
    small: {
      fontSize: "16px", fontWeight: "400",
      fontFamily: "Epilogue, sans-seri", color: "rgba(37, 50, 75, 1)",
    }
  }

  

  const name = ({ status }) => {
    switch (status) {
      case "Selected":
        return "Hired";
      case "Applied":
        return "In Review";
      case "Not Selected":
        return "Declined";
      default:
        return status;
    }
  };


  return (
    <div className='py-2 px-6 w-full'
      style={{ paddingBottom: "40px" }}>


      {/* Title */}

      <div className="w-auto  py-3 flex flex-row justify-start items-center "
        style={{ gap: "15px" }}
      >

        <KeyboardBackspaceIcon fontSize='large' className='hover:cursor-pointer'
          onClick={() => { navigate(-1) }} />
        <div className='flex flex-col justify-center'>
          <span style={styles.large}>{designation}</span>
          <div className='flex flex-row items-center gap-2' style={styles.small}>
            <span>Design</span><Dot />
            <span>Full-Time</span><Dot />
            <span className='flex flex-row'
            >4/ <p style={{ color: "rgba(124, 132, 147, 1)" }}>{`${required}`} Hired</p></span>
          </div>
        </div>


      </div>

      {/* Line Bar */}

      <div
        className='w-full h-auto pb-1 px-2 flex flex-row justify-between '
        style={{ borderBottom: "1px solid #f4f6fa", gap: "15px" }}
      >
        <div>


          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "#25324B",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `applicants` && "3px solid #1987d2",
              color: applyColor === `applicants` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("applicants")

            }}


          >Applicants</span>


          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `details` && "3px solid #1987d2",
              color: applyColor === `details` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("details")
              // setPage(false)
            }}


          >Job Details</span>

          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `analytics` && "3px solid #1987d2",
              color: applyColor === `analytics` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("analytics")
              // setPage(false)
            }}


          >Analytics </span>
        </div>
      </div>

      <div className='my-1'>

        {applyColor === "details" && <JobDetails BASE_URL={BASE_URL} jobId={jobId} applied={studentsAppliedTableRow.length}/>}
        {applyColor === "applicants" &&

          <div
            style={{ padding: "30px 20px" }}>

            <div className=' flex flex-row justify-between' >
              <div>
                <span
                  style={{
                    color: "rgba(37, 50, 75, 1)", fontSize: "20px", fontWeight: "600",
                    fontFamily: "Clash Display"
                  }}
                > Total Applicant: {`${studentsAppliedTableRow.length}`}</span>
              </div>

              <div className='flex flex-row gap-0 h-7 w-20 p-2'
                style={{ border: "1px solid rgba(214, 221, 235, 1)" }}>
                <SearchIcon style={{ marginRight: "4px" }} />

                <input type="text"
                  style={{ outline: "none", width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className='my-5 flex flex-row justify-between'
              style={{
                border: "1px solid rgba(214, 221, 235, 1)", padding: "12px"
              }}>

              <TitleBox width={"230px"} naame={"Full Name"} />
              <TitleBox width={"70px"} naame={"Score"} />
              <TitleBox width={"130px"} naame={"Hiring Stage"} />
              <TitleBox width={"140px"} naame={"Applied Date"} />
              <TitleBox width={"210px"} naame={"Action"} />


            </div>

            <div className='my-5 flex flex-col gap-2'
              style={{ border: "1px solid rgba(214, 221, 235, 1)", }}>

              {studentsAppliedTableRow.map((student, index) => {

                const status =name({ status: student.statusUpdate.status });

                return <div className='w-full flex flex-row justify-between items-center'
                  style={{
                    backgroundColor: (index % 2 === 0) && "rgba(248, 248, 253, 1)",
                    padding: "8px 12px"
                  }}>
                  {/* Photo and name */}
                  <div className='flex flex-row items-center gap-2'
                    style={{ width: "230px" }}>
                    <span className='flex flex-row justify-center items-center'
                      style={{
                        border: !student.imglink && "1px solid black", height: "50px", width: "50px", overflow: "hidden",
                        borderRadius: "50%"
                      }}>
                      {student.imglink ? <img src={student.imglink} alt="profile" /> :

                        <FaUserAlt fontSize={"21px"} />

                      }
                    </span>

                    <span>{student.name}</span>

                  </div>

                  {/* Score */}

                  <div className='flex flex-row gap-1 justify-center items-center'
                    style={{ width: "70px" }}>
                    <FaStar fontSize={"19px"} color='rgba(255, 184, 54, 1)' />
                    <span>4.2</span>

                  </div>

                  {/* hiring stage */}

                  <div className='flex flex-row justify-center items-center'
                    style={{ width: "16%" }}>

                    <div className={`basic ${(status || "").replace(/\s+/g, '')}`}>
                      {status}
                    </div>

                  </div>
                  {/* applied date */}
                  <div
                    style={{ width: "140px", fontFamily: "Epilogue", color: "rgba(37, 50, 75, 1)", fontWeight: "500", fontSize: "16px" }}
                  >{Applieddate}</div>

                  {/* see Application */}

                  <div style={{ width: "210px" }}>

                    <span style={{
                      padding: "6px 12px", border: "1px solid rgba(70, 64, 222, 1)",
                      color: "rgba(70, 64, 222, 1)", backgroundColor: "#e9ebfd", cursor: "pointer",
                      fontWeight: "700", fontSize: "14px"

                    }}

                      onClick={() => {
                        navigate("../application", { state: { studentDetails: student, color: "joblist", jobId: jobId } })
                      }}

                    >
                      See Application
                    </span>
                  </div>

                </div>
              })}



            </div>










          </div>}

      </div>



    </div>
  );
}



const Dot = () => (
  <span
    style={{
      height: "7px", width: "7px", borderRadius: "50%",
      backgroundColor: "rgba(81, 91, 111, 1)"
    }}
  ></span>
)

const TitleBox = ({ width, naame }) => (
  <div className='flex flex-row items-center'
    style={{
      width: `${width}`, gap: "2px", color: "rgba(124, 132, 147, 1)", fontSize: "14px", fontWeight: "400",
      fontFamily: "Epilogue"
    }}>
    {naame}
    <RiExpandUpDownFill /></div>
    
)
//href={`https://drive.google.com/file/d/${value}/preview`}