import React, { useState, useEffect } from 'react';
import { CircularProgress, Box } from '@mui/material';
import AddButton from '../../components/startUp/AddButton';
import SearchIcon from '@mui/icons-material/Search';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Allapplicant = ({ BASE_URL, startUpDetails }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [studentsAppliedTableRow, setStudentsAppliedTableRow] = useState([]);

  async function fetchStudentsByStartupId(startupId) {
    try {
      const response = await fetch(`${BASE_URL}/api/startUp/jobs/allApplication/${startupId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data?.status === 200) {
        setStudentsAppliedTableRow(data.applicant);
        console.log('Updated studentsAppliedTableRow:', data.applicant);
      } else {
        console.log('Error in response:', data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (startUpDetails.id) {
      fetchStudentsByStartupId(startUpDetails.id);
    }
  }, [startUpDetails.id]);

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
    <div>
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
      ) : (
        <div className='py-1 px-3'>
          <div style={{ padding: "30px 20px" }}>
            <div className='flex flex-row justify-between'>
              <div>
                <span
                  style={{
                    color: "rgba(37, 50, 75, 1)",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Clash Display",
                  }}
                >
                  Total Applicant: {studentsAppliedTableRow.length}
                </span>
              </div>

              <div className='flex flex-row gap-0 h-7 w-20 p-2'
                style={{ border: "1px solid rgba(214, 221, 235, 1)" }}>
                <SearchIcon style={{ marginRight: "4px" }} />
                <input type="text" style={{ outline: "none", width: "100%", height: "100%" }} />
              </div>
            </div>

            <div className='my-5 flex flex-row justify-between'
              style={{
                border: "1px solid rgba(214, 221, 235, 1)",
                padding: "12px"
              }}>
              <TitleBox width={"180px"} naame={"Full Name"} />
              <TitleBox width={"70px"} naame={"Score"} /> 
              <TitleBox width={"110px"} naame={"Hiring Stage"} />
              <TitleBox width={"120px"} naame={"Applied Date"} />
              <TitleBox width={"180x"} naame={"Job Role"} /> 
              <TitleBox width={"150px"} naame={"Action"} />
            </div>

            <div className='my-5 flex flex-col gap-2'
              style={{ border: "1px solid rgba(214, 221, 235, 1)" }}>
              {studentsAppliedTableRow?.map((e, index) => {
                const status = name({ status: e.job.status });
                

                return (
                  <div className='w-full flex flex-row justify-between items-center'
                    style={{
                      backgroundColor: index % 2 === 0 ? "rgba(248, 248, 253, 1)" : "transparent",
                      padding: "8px 12px"
                    }}
                    key={e.student.id} // Add a unique key for each item
                  >
                    {/* Photo and name */}
                    <div className='flex flex-row items-center gap-2'
                      style={{ width: "180px" }}>
                      <span className='flex flex-row justify-center items-center'
                        style={{
                          border: !e.student.imglink && "1px solid black",
                          height: "50px",
                          width: "50px",
                          overflow: "hidden",
                          borderRadius: "50%"
                        }}>
                        {e.student.imglink ? <img src={e.student.imglink} alt="profile" /> :
                          <FaUserAlt fontSize={"21px"} />
                        }
                      </span>
                      <span>{e.student.name}</span>
                    </div>

                    {/* Score */}
                    <div className='flex flex-row gap-1 justify-center items-center'
                      style={{ width: "70px" }}>
                      <FaStar fontSize={"19px"} color='rgba(255, 184, 54, 1)' />
                      <span>4.2</span>
                    </div>

                    {/* Hiring Stage */}
                    <div className='flex flex-row justify-center items-center'
                      style={{ width: "16%" }}>
                      <div className={`basic ${( status || "").replace(/\s+/g, '')}`}>
                        {status}
                      </div>
                    </div>

                    {/* Applied Date */}
                    <div
                      style={{ width: "120px", fontFamily: "Epilogue", color: "rgba(37, 50, 75, 1)", fontWeight: "500", fontSize: "16px" }}
                    >
                      {e.job.applied ? moment(e.job.applied).format('MMM D, YYYY') : 'N/A'}
                    </div>

                    {/* Title*/}
                    <div
                      style={{ width: "140px", fontFamily: "Epilogue", color: "rgba(37, 50, 75, 1)", fontWeight: "500", fontSize: "16px" }}
                    >
                      {e.job.title}
                    </div>

                    {/* See Application */}
                    <div style={{ width: "150px" }}>
                      <span
                        style={{
                          padding: "6px 12px",
                          border: "1px solid rgba(70, 64, 222, 1)",
                          color: "rgba(70, 64, 222, 1)",
                          backgroundColor: "#e9ebfd",
                          cursor: "pointer",
                          fontWeight: "700",
                          fontSize: "14px"
                        }}
                        onClick={() => navigate("../application", { state: { student: e.student, color: "applicants",jobId:e.job.id,Status:e.job.status } })}
                      >
                        See Application
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TitleBox = ({ width, naame }) => (
  <div className='flex flex-row items-center justify-center'
    style={{
      width: width,
      gap: "2px",
      color: "rgba(124, 132, 147, 1)",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Epilogue",
      textAlign:"start"
    }}>
    {naame}
    <RiExpandUpDownFill />
  </div>
);

export default Allapplicant;
