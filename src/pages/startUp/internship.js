import { Container, Typography, Grid, CardContent, Card, Box, Button, CircularProgress } from '@mui/material';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
// import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
// import PendingIcon from '@mui/icons-material/Pending';
import React, { useState, useEffect } from 'react';
import InternshipImage from '../../assets/internshipImage.svg';
import ProjectImgage from '../../assets/projectImage.svg';
import JobImage from '../../assets/jobImage.svg';
import { useNavigate, useLocation } from 'react-router-dom';
// import moment from 'moment';
import JobListing from "../../components/startUp/StudentListing"
import Header from "../../components/startUp/Header"

export default function Internship({ BASE_URL, startUpDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const { type } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [internshipTableRow, setInternshipTableRow] = useState([]);
  const [typeImage, setTypeImage] = useState([]);
  const [typeDescription, setTypeDescription] = useState([]);
  const navigate = useNavigate();

  const convertToTableRows = (jsonData) => {
    const jsonDataArray = [];
    for (let i = 0; i < jsonData.length; i++) {
   
      
      const oneJsonData = jsonData[i];
      console.log(oneJsonData.studentsApplied);
      const convertedJsonData = {
        id: i + 1,
        company: oneJsonData.companyName,
        title: oneJsonData.title,
        type: oneJsonData.type,
        deadline: oneJsonData.deadline,
        details: oneJsonData.id,
        update: oneJsonData.id,
        studentsApplied: oneJsonData.id,
        approval: oneJsonData.approval || 'pending',
        createdAt:oneJsonData.createdAt,
        deadline:oneJsonData.deadline,
        totalRequired:oneJsonData.totalRequired,
        totalApplications:oneJsonData.totalApplications,
        
      };
      jsonDataArray.push(convertedJsonData);
    }

    setInternshipTableRow(jsonDataArray);
  };


  const getInternship = async () => {
    setLoading(true);
    if (type === 'Internship') {
      setTypeImage(InternshipImage);
      setTypeDescription('Need intern who can witness a 0-1 jouney of a startup and get first hand experience of working in a startup.');
    } else if (type === 'Job') {
      setTypeImage(JobImage);
      setTypeDescription('Need employee to work in a fast paced environment for your startup.');
    } else {
      setTypeImage(ProjectImgage);
      setTypeDescription('Need the right freelancer for your work.');
    }
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.localStorageStartUpToken,
      },
    };
    console.log(startUpDetails.id);
    
    const url = `${BASE_URL}/api/startUp/jobs?startUpId=${startUpDetails.id}&type=${type}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setLoading(false);
            convertToTableRows(data.jobs);
            console.log(internshipTableRow);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const internshipTableColumn = [
  //   {
  //     field: 'designation',
  //     headerName: 'Designation',
  //     flex: 1,
  //   },
  //   {
  //     field: 'stipend',
  //     headerName: 'Stipend',
  //     flex: 1,
  //   },
  //   {
  //     field: 'deadline',
  //     headerName: 'Deadline',
  //     flex: 1,
  //     renderCell: ({ value }) => {
  //       return value < moment().format('YYYY-MM-DDThh:mm') ? 'Deadline passed' : moment(value).format('MMMM Do, h:mm a');
  //     },
  //   },
  //   {
  //     field: 'approval',
  //     headerName: 'Approval Status',
  //     flex: 1,
  //     renderCell: ({ value }) => {
  //       return <Typography color={approvalStatusTypoColor(value)}>{value}</Typography>;
  //     },
  //   },
  //   {
  //     field: 'details',
  //     headerName: 'Details',
  //     flex: 1,
  //     renderCell: ({ value }) => {
  //       return (
  //         <Button
  //           size="small"
  //           onClick={() => {
  //             navigate('../details', { state: { jobId: value } });
  //           }}
  //         >
  //           <VisibilityRoundedIcon />
  //         </Button>
  //       );
  //     },
  //   },
  //   {
  //     field: 'studentsApplied',
  //     headerName: 'Students Applied',
  //     flex: 1,
  //     renderCell: ({ value }) => {
  //       return (
  //         <Button
  //           size="small"
  //           onClick={() => {
  //             navigate('../studentsApplied', { state: { jobId: value } });
  //           }}
  //         >
  //           <PeopleAltRoundedIcon />
  //         </Button>
  //       );
  //     },
  //   },
  // ];

  const addNew = () => {
    if (startUpDetails.sector === undefined) {
      setAlertMessage('Please complete account details before adding');
      setAlertSeverity('info');
      setShowAlert(true);
    } else {
      navigate('../addNew', {
        state: {
          type: type,
          companyName: startUpDetails.companyName,
          startUpId: startUpDetails.id,
        },
      });
    }
  };

  useEffect(() => {
    getInternship();
   
    
  }, [type]);

  const styles = {
    large: { fontSize: "19px", fontWeight: "600", color: "#25324b" },
    small: {
      fontSize: "14px", fontWeight: "400",
      fontFamily: "Epilogue, sans-seri", color: "rgba(124, 132, 147, 1)",
    }
  }

  return (
    <div className='py-2 px-6 w-full'
    style={{paddingBottom:"40px"}}
    
    
    >

      <div className="w-auto px-2 py-3 flex flex-col justify-start"
      >
        <p
          style={styles.large}
        >Job Listing</p>
        <p
          style={styles.small}
        >Here is your job listings status,</p>
      </div>



      <div className='mx-2'
        style={{ border: "1px solid rgba(214, 221, 235, 1)" }}
      >
        <p className='py-5 px-4'
          style={{
            fontSize: "17px", fontWeight: "600", color: "#25324b",
            borderBottom: "1px solid rgba(214, 221, 235, 1)"
          }}
        >Job List</p>


        <div className='py-5 px-4 flex flex-row'
          style={{borderBottom:"1px solid rgba(214, 221, 235, 1)",fontSize: "14px", fontWeight: "400",
            fontFamily: "Epilogue, sans-seri", color: "rgba(124, 132, 147, 1)"}}
        >
          <span
            style={{ width: "30%", minWidth: "200px" }}
          >Role</span>
          <div
            style={{ width: '70%', display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

            <span style={{width:"80px",textAlign:"center"}}>Status</span>
            <span className='flex flex-row justify-center'
            style={{width:"140px",}}
            >Date Posted</span>
            <span
            style={{width:"100px",textAlign:"center"}}
            >Due Date</span>
            <span
            style={{width:"80px",textAlign:"center"}}
            >Job Type</span>
            <span 
            style={{width:"80px",textAlign:"center"}}
            >Applicants</span>
            <span 
            style={{width:"80px",textAlign:"center"}}
            >Needs</span>
            <span 
            style={{width:"40px",textAlign:"center",opacity:0}}
            ></span>
          </div>

        </div>

        {loading ? (
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
            {internshipTableRow.map((internship, index) => (

              <Grid item xs={12} key={internship.id}>

                <JobListing
                  
                  type={internship.type}
                  status={internship.status}
                  designation={internship.title}
                  PostDate ={internship.createdAt}
                  deadline={internship.deadline}
                  // studentsAppliedClick={() => { navigate('../studentsApplied', { state: { jobId: internship.studentsApplied } }); }}
                  totalRequired={internship.totalRequired}
                  totalApplications={internship.totalApplications}
                  approval={internship.approval}
                  index={index}
                  detailsButtonClick={() => {
                    navigate('../Jobapplicant', { state: { jobId: internship.details,applied: internship.studentsApplied,color:"joblist",required:internship.totalRequired,
                      designation:internship.title } });
                  }}
                />
              </Grid>
            ))}
          </>
        )}






      </div>








    </div>
  );
}
