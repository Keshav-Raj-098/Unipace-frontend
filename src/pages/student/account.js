import { DetailsButton, DetailsDrop, ResumeUloader } from "../../components/student/account"
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Uploader from "../../components/student/Uploadimg"
import '../../components/student/buttonstyle.css'
import { CircularProgress, TextField } from "@mui/material";
import Userimg from "../../assets/user.svg"





export default function Account({ BASE_URL, studentDetails, setStudentDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const navigate = useNavigate();
  console.log(studentDetails)
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [applyColor, setapplyColor] = useState("profile");
  const [page, setPage] = useState(true);
  const name = studentDetails.name;
  const email = studentDetails.email;
  const userimg = studentDetails.img || Userimg;
  const [Newname, setNewName] = useState("");
  const [Newemail, setNewEmail] = useState("");
  const [course, setCourse] = useState(studentDetails.course);
  const [college, setCollege] = useState(studentDetails.college);
  const [department, setDepartment] = useState(studentDetails.department);
  const [year, setYear] = useState(studentDetails.year);
  const [cgpa, setCgpa] = useState(studentDetails.cgpa);
  const [resumeLink, setResumeLink] = useState(studentDetails.resumeLink);
  const [linkedIn, setLinkedIn] = useState(studentDetails.linkedIn);
  const [update, setUpdate] = useState("Update");
  const form = useRef();


  const College = ["IIT-Delhi", "IIT-Bombay", "IIT-Madras"]
  const Course = ["BTech", "Dual", "MTech", "PhD", "MBA", "Other"]

  const Department = ["Applied Mechanics", "Biochemical Engineering and Biotechnology", "Chemical Engineering", "Chemistry", "Civil Engineering", "Computer Science and Engineering", "Design", "Electrical Engineering", "Energy Science and Engineering", "Humanities and Social Sciences", "Management Studies", "Materials Science and Engineering", "Mathematics", "Mechanical Engineering", "Physics", "Textile and Fibre Engineering"]


  const updateOrSave = studentDetails.resumeLink === '' || studentDetails.resumeLink === undefined ? 'Save' : 'Update';





  const updateStudentAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    // formData.append('name', name);
    // formData.append('email', email);
    formData.append('course', course);
    formData.append('college', college);
    formData.append('department', department);
    formData.append('year', year);
    formData.append('cgpa', cgpa);
    formData.append('resumeLink', resumeLink);
    formData.append('linkedIn', linkedIn);
    formData.append('image', selectedFile)
    // formData.append('resume', resumeFile);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: localStorage.localStorageStudentToken,
      },
      body: formData,
    };
    const url = `${BASE_URL}/api/student/register/${studentDetails.id}`;
    console.log(url);



    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setStudentDetails(data.studentDetails);
            setLoading(false);
            setAlertMessage(`Account details ${updateOrSave + 'd'} successfully.`);
            setAlertSeverity('success');
            setShowAlert(true);
            setUpdate("Update")
            setSelectedFile(null)
            setLoading(false)
            navigate('../account', { state: { type: 'Internship', color: "Account" } });
          } else {
            console.log(data);

          }
        });
    } catch (error) {
      console.log(error);


    }
  };

  const LoginDetails = () => (
    <div className="px-4 py-3">

      <div className='flex flex-col w-full pb-3'
        style={{ fontFamily: "Epilogue, sans-seri", borderBottom: "2px solid #f4f6fa" }}>
        <span style={{
          fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
         
        }}>  Basic Information</span>

        <span
          style={{
            fontSize: "14px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
            lineHeight: "35.4px",
          }}
        >This is login information that you can update anytime.</span>




      </div>

      {/* Update Name */}
      <div
        className="py-3 flex flex-row justify-start"
        style={{ fontFamily: "Epilogue, sans-seri", gap: "50px", borderBottom: "2px solid #f4f6fa" }}>
        <div className="flex flex-col gap-1" >
          <span style={{ fontSize: "16px", fontWeight: "600", color: "#202430", }}
          >
            Update Name</span>
          <span
            style={{
              fontSize: "14px", fontWeight: "400",
              color: "rgba(81, 91, 111, 1)",
            }}
          >Update your name so that you can be recognized</span>
        </div>


        <div>

          <div className="mb-4 flex flex-col">


            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#202430",
                paddingBottom:"6px"
               }}
            >{studentDetails.name}</span>
            <span style={{ fontSize: "14px", fontWeight: "400", 
              color: "rgba(81, 91, 111, 1)", }}>
              This is your Current Name</span>

            <div className="flex flex-col gap-1"
             style={{marginTop:"30px"}}
            >
              <span
                style={{ fontSize: "16px", fontWeight: "400", color: "rgba(81, 91, 111, 1)", }}
              >Update Name</span>
              <div className="flex flex-row gap-2 items-center">

                <TextField
                  label="Enter Your New Name"
                  value={Newname}
                  variant="outlined"
                  onChange={(e) => {
                    setNewName(e.target.value);
                    console.log("New Name:", e.target.value); // Debugging log
                  }}
                />
                <span className='update hover:cursor-pointer'>Update Name</span>


              </div>
            </div>


          </div>


        </div>

      </div>



      {/* Update Email */}
      <div
        className="py-3 flex flex-row justify-start"
        style={{ fontFamily: "Epilogue, sans-seri", gap: "50px", borderBottom: "2px solid #f4f6fa" }}>
        <div className="flex flex-col gap-1 " >
          <span style={{ fontSize: "16px", fontWeight: "600", color: "#202430", }}
          >
            Update Email</span>
          <span
            style={{
              fontSize: "14px", fontWeight: "400",
              color: "rgba(81, 91, 111, 1)",
            }}
          >Update your email address to make sure it is safe</span>
        </div>


        <div>

          <div className="mb-4 flex flex-col">


            <span
              style={{ fontSize: "16px", fontWeight: "600", color: "#202430",
                paddingBottom:"6px"
               }}
            >{studentDetails.email}</span>
            <span style={{ fontSize: "14px", fontWeight: "400", 
              color: "rgba(81, 91, 111, 1)", }}>
              This is your Current Email</span>

            <div className=" flex flex-col gap-1"
            style={{marginTop:"30px"}}
            >
              <span
                style={{ fontSize: "16px", fontWeight: "400", color: "rgba(81, 91, 111, 1)", }}
              >Update Email</span>
              <div className="flex flex-row gap-2 items-center">

                <TextField
                  label="Enter Your New Email"
                  value={Newemail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
                <span className='update hover:cursor-pointer'>Update Email</span>


              </div>
            </div>


          </div>


        </div>

      </div>



    </div>
  )

  return (

    <div className='py-2 h-full w-full'>

      <div className=" px-4 h-12 pb-3 flex flex-row justify-start items-center"
        style={{
          fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
          lineHeight: "35.4px", width: "100%",
          fontFamily: "Epilogue, sans-seri"
        }}
      >
        Settings</div>

      <div
        className='w-full h-auto pb-0 px-2 flex flex-row justify-start '
        style={{ border: "2px solid #f4f6fa", paddingTop: "20px", gap: "15px" }}
      >

        <span
          style={{
            fontSize: "14px", fontWeight: "400", color: "#25324B",
            fontFamily: "Epilogue, sans-seri", height: "30px",
            borderBottom: applyColor === `profile` && "3px solid #1987d2",
            color: applyColor === `profile` && "rgba(37, 50, 75, 1)",

          }}
          className={` hover:cursor-pointer px-3 py-2`}
          onClick={() => {
            setapplyColor("profile")
            setPage("profile")
          }}


        >My Profile</span>


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
            setPage(false)
          }}


        >Login Details</span>



      </div>
      {
        page ?

          (<form ref={form} onSubmit={updateStudentAccount} encType="multipart/form-data"
            className='px-4 py-3'
          >
            {/* TOP SECTION */}
            <div className='flex flex-col w-full pb-3'
              style={{ fontFamily: "Epilogue, sans-seri", borderBottom: "2px solid #f4f6fa" }}>
              <span style={{
                fontSize: "16px", fontWeight: "600", color: "#202430",
                lineHeight: "35.4px", width: "100%",
              }}>  Basic Information</span>
              <div className='flex flex-row justify-between align-middle'>
                <span
                  style={{
                    fontSize: "14px", fontWeight: "400", color: "#515B6F",
                    lineHeight: "35.4px",
                  }}

                >This is your presonal information you can update anytime</span>

                {(update === "Update") ? (<span className='save hover:cursor-pointer'
                  onClick={() => {

                    setUpdate("save")


                  }}
                >{update}</span>)
                  :
                  (<button className='save hover:cursor-pointer' type='submit'
                    onClick={() => { setLoading(true) }}
                  >{update}</button>)}

              </div>
            </div>

            {loading ? (<div
              style={{ height: "25vw" }}
              className="w-full flex flex-row justify-center align-middle items-center">
              <CircularProgress />
            </div>) :

              (<div>
                {/* Photo Section */}

                <div className='flex flex-row w-full py- justify-start'
                  style={{
                    fontFamily: "Epilogue, sans-seri", borderBottom: "2px solid #f4f6fa",
                    gap: "20px"
                  }}>

                  <div className='flex flex-col' style={{ width: "35%" }}>
                    <span style={{
                      fontSize: "14px", fontWeight: "600", color: "#202430",
                      lineHeight: "35.4px", width: "100%",
                    }}>  Profile photo</span>

                    <span
                      style={{
                        fontSize: "14px", fontWeight: "400", color: "#515B6F",
                      }}

                    >This image will be shown publicly as your profile picture, it will help recruiters recognize you!</span>
                  </div>

                  <div className='flex flex-row  justify-between items-center'>

                    <div
                      className="flex flex-row justify-center items-center"
                      style={{
                        height: "105px", width: "105px", borderRadius: "50%", overflow: "hidden",
                        border: !studentDetails.imglink && "1px solid black"


                      }}>

                      <img src={studentDetails.imglink || userimg} alt="userimg" />
                    </div>



                  </div>

                  <Uploader selectedFile={selectedFile} setSelectedFile={setSelectedFile} />

                </div>

                {/*2nd last BOTTOM SECTION */}

                <div className=' flex flex-col w-full '
                  style={{ borderBottom: "2px solid #f4f6fa", paddingBottom: "25px" }}
                >
                  <span style={{
                    fontSize: "16px", fontWeight: "600", color: "#202430",
                    lineHeight: "35.4px", width: "100%", marginBottom: "10px"
                  }}>Presonal Details</span>

                  <div className='flex flex-col'>
                    <div className='flex flex-row justify-start my-3'
                      style={{ marginTop: "20px" }}
                    >

                      <DetailsButton
                        title={"FullName"} data={name}
                        width={50} disable={true} />
                      <DetailsButton
                        title={"Email"} data={email}
                        width={50} disable={true} />


                    </div>

                    <div className='flex flex-row justify-start'
                      style={{ marginTop: "20px" }}
                    >

                      <DetailsButton
                        title={"Linkedin"} data={studentDetails.linkedIn}
                        width={50} disable={(update === "Update")} setFunction={setLinkedIn} />

                      <ResumeUloader
                        title={"Resume"} data={resumeFile}
                        width={50} disable={(update === "Update")} setFunction={setResumeFile}
                      />



                    </div>
                  </div>


                </div>


                {/* last BOTTOM SECTION */}

                <div className='mt-4 flex flex-col w-full pb-3'>
                  <span style={{
                    fontSize: "16px", fontWeight: "600", color: "#202430",
                    lineHeight: "35.4px", width: "100%", marginBottom: "10px"
                  }}>College Details</span>

                  <div className='flex flex-col'>
                    <div className='flex flex-row justify-start my-3'
                      style={{ marginTop: "20px" }}
                    >

                      <DetailsDrop
                        title={"College"} data={studentDetails.college}
                        width={50} menu={College} disable={(update === "Update")}
                        setFunction={setCollege} />
                      <DetailsDrop
                        title={"Department"} data={studentDetails.department}
                        width={50} menu={Department} disable={(update === "Update")}
                        setFunction={setDepartment} />


                    </div>

                    <div className='flex flex-row justify-start'
                      style={{ marginTop: "20px" }}
                    >

                      <DetailsButton
                        title={"Year"} data={studentDetails.year}
                        width={50} disable={(update === "Update")} setFunction={setYear} />

                      <DetailsDrop
                        title={"Course"} data={studentDetails.course}
                        width={50} menu={Course} disable={(update === "Update")}
                        setFunction={setCourse} />



                    </div>

                    <div className='flex flex-row justify-start'
                      style={{ marginTop: "20px" }}
                    >

                      <DetailsButton
                        title={"CGPA"} data={studentDetails.cgpa}
                        width={50} disable={(update === "Update")} setFunction={setCgpa} />







                    </div>
                  </div>


                </div>
              </div>
              )

            }</form>



          )

          :

          (
            <LoginDetails />
          )
      }
    </div>
  );
}
