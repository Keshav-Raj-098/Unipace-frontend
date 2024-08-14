import { Container, Typography, Card, CardContent, TextField, Grid, Button, CircularProgress, Box, MenuItem, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userimg from "../../assets/user.svg"
import Uploader from "../../components/student/Uploadimg"
import { DetailsButton, DetailsDrop } from '../../components/student/account';
import DatePicker from "../../components/startUp/Datepicker"
import { IoMdAdd, IoMdClose } from "react-icons/io";

const sectorItems = ['SAAS', 'Fin-Tech', 'Ed-Tech', 'Health-Tech', 'E-Commerce', 'Logistics', 'Other'];

export default function Account({ BASE_URL, startUpDetails, setStartUpDetails, setShowAlert, setAlertMessage, setAlertSeverity }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [selectedImgFile, setSelectedImgFile] = useState(null);
  const [website, setWebsite] = useState(startUpDetails.website);
  const [tracxn, setTracxn] = useState(startUpDetails.tracxn);
  const [social, setSocial] = useState(startUpDetails.social);
  const [cruchbase, setCruchbase] = useState(startUpDetails.cruchbase);

  const [companyVision, setCompanyVision] = useState(startUpDetails.companyVision);

  const updateOrSave = startUpDetails.location === '' || startUpDetails.location === undefined ? 'Save' : 'Update';

  const [applyColor, setapplyColor] = useState("overview");
  const [update, setUpdate] = useState("Update")

  const [foundedDate, setFoundedDate] = useState(startUpDetails.foundedDate || "");
  const [aboutCompany, setAboutCompany] = useState(startUpDetails.foundedDate || "");

  const companyName = startUpDetails.companyName;
  const companyEmail = startUpDetails.email;
  const [twitter, setTwitter] = (startUpDetails.twitter || "")
  const [Facebook, setFacebook] = (startUpDetails.facebook || "")
  const [insta, setInsta] = (startUpDetails.instagram || "")
  const [youtube, setYoutube] = (startUpDetails.youtube || "")
  const [linkedIn, setLinkedIn] = useState(startUpDetails.linkedIn);
  const [founder, setFounder] = useState(startUpDetails.founder);
  const [hrName, setHrName] = useState(startUpDetails.hrName);
  const [hrEmail, setHrEmail] = useState(startUpDetails.hrEmail);
  const [hrLinkedin, setHrLinkedin] = useState(startUpDetails.hrLinkedin);
  const [hrDesignation, setHrDesignation] = useState(startUpDetails.hrDesignation);
  const [sector, setSector] = useState(startUpDetails.sector);
  const [noOfEmployees, setNoOfEmployees] = useState(startUpDetails.noOfEmployees);
  const [location, setLocation] = useState(startUpDetails.location || ["Delhi", "Banglore"]);













  const updateAccountDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      linkedIn: linkedIn,
      website: website,
      twitter: twitter,
      instagram: insta,
      youtube: youtube,
      facebook: Facebook,
      founded: foundedDate,
      tracxn: tracxn,
      sector: sector,
      noOfEmployees: noOfEmployees,
      companyVision: companyVision,
      founder: founder,
      hrName: hrName,
      hrEmail: hrEmail,
      hrDesignation: hrDesignation,
      social: social,
      cruchbase: cruchbase,
      // image:selectedImgFile
    };
    console.log(formData)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.localStorageStartUpToken,
      },
      body: JSON.stringify(formData),
    };
    const url = `${BASE_URL}/api/startUp/register/${startUpDetails.id}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setStartUpDetails(data.startUpDetails);
            setLoading(false);
            setAlertMessage(`Account details ${updateOrSave + 'd'} successfully.`);
            setAlertSeverity('success');
            setShowAlert(true);
            navigate('../internship', { state: { type: 'Internship' } });
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addFounder = () => {
    setFounder((current) => [...current, { id: current.length + 1, name: '', bio: '' }]);
  };

  const removeFounder = () => {
    setFounder(founder.slice(0, -1));
  };

  const updateFounderName = (value, id) => {
    const newState = founder.map((obj) => {
      return obj.id === id ? { ...obj, name: value } : obj;
    });
    setFounder(newState);
  };

  const updateFounderBio = (value, id) => {
    const newState = founder.map((obj) => {
      return obj.id === id ? { ...obj, bio: value } : obj;
    });
    setFounder(newState);
  };
  const updateFounderLinkedIn = (value, id) => {
    const newState = founder.map((obj) => {
      return obj.id === id ? { ...obj, linkedIn: value } : obj;
    });
    setFounder(newState);
  };
  useEffect(() => {
    if (founder.length === 0) addFounder();
  }, []);


  const styles = {
    large: {
      fontSize: "14px", fontWeight: "600", color: "#202430",
      lineHeight: "35.4px", width: "100%",
    },
    small: { fontFamily: "Epilogue, sans-seri", fontSize: "14px", fontWeight: "400", color: "#515B6F", }

  }

 









  return (

    <div className='py-2 px-4 w-full'>

      <div className=" px-4 h-12 pb-3 flex flex-row justify-start items-center"
        style={{
          fontSize: "25px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",
          lineHeight: "35.4px", width: "100%",
          fontFamily: "Epilogue, sans-seri"
        }}
      >
        Settings</div>

      <div
        className='w-full h-auto pb-1 px-2 flex flex-row justify-between '
        style={{ borderBottom: "1px solid #f4f6fa", gap: "15px" }}
      >
        <div>


          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "#25324B",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `overview` && "3px solid #1987d2",
              color: applyColor === `overview` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("overview")
              // setPage("profile")
            }}


          >OverView</span>


          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `links` && "3px solid #1987d2",
              color: applyColor === `links` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("links")
              // setPage(false)
            }}


          >Social Links</span>

          <span
            style={{
              fontSize: "14px", fontWeight: "400", color: "rgba(124, 132, 147, 1)",
              fontFamily: "Epilogue, sans-seri", height: "30px",
              borderBottom: applyColor === `hr` && "3px solid #1987d2",
              color: applyColor === `hr` && "rgba(37, 50, 75, 1)",

            }}
            className={` hover:cursor-pointer px-3 py-2`}
            onClick={() => {
              setapplyColor("hr")
              // setPage(false)
            }}


          >Recruiter Details </span>
        </div>

        <div style={{ position: "relative", bottom: "10px" }}>
          {(update === "Update") ? (<span className=' hover:cursor-pointer'
          style={{padding:"9px 20px",backgroundColor:"#4640de",color:"white",fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "400",}}
            onClick={() => {

              setUpdate("save Changes")
              setLoading(true)


            }}
          >{update}</span>)
            :
            (<div className=' hover:cursor-pointer'
              style={{padding:"9px 20px",backgroundColor:"#4640de",color:"white",fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "400",}}
              onClick={() => { }}
            >{update}</div>)}
        </div>



      </div>


      {applyColor === "overview" &&

        <div className='px-4 py-3'>
          {/* Basic information */}
          <div className='flex flex-col w-full pb-3'
            style={{ fontFamily: "Epilogue, sans-seri", borderBottom: "2px solid #f4f6fa" }}>
            <span style={{
              fontSize: "16px", fontWeight: "600", color: "#202430",
            }}>  Basic Information</span>
            <div className='flex flex-row justify-between align-middle'>
              <span
                style={{
                  fontSize: "14px", fontWeight: "400", color: "#515B6F",
                  lineHeight: "35.4px",
                }}

              >This is company information that you can update anytime.</span>



            </div>
          </div>

          {/* Photo Section */}

          <div className='flex flex-row w-full py- justify-start'
            style={{
              fontFamily: "Epilogue, sans-seri", borderBottom: "1px solid #f4f6fa",
              gap: "20px"
            }}>

            <div className='flex flex-col' style={{ width: "35%" }}>
              <span style={styles.large}>Company Logo</span>

              <span
                style={styles.small}

              >This image will be shown publicly as company logo.</span>
            </div>

            <div className='flex flex-row  justify-between items-center'>

              <div
                className="flex flex-row justify-center items-center"
                style={{
                  height: "105px", width: "105px", borderRadius: "50%", overflow: "hidden",
                  border: !startUpDetails.imglink && "1px solid black"


                }}>

                <img src={startUpDetails.imglink || userimg} alt="userimg" />
              </div>



            </div>

            <Uploader selectedFile={selectedImgFile} setSelectedFile={setSelectedImgFile} />

          </div>


          {/* Details Section */}

          <div className='flex flex-row w-full py-3 justify-start'
            style={{
              fontFamily: "Epilogue, sans-seri", borderBottom: "1px solid #f4f6fa",
              gap: "20px"
            }}>

            <div className='flex flex-col' style={{ width: "35%" }}>
              <span style={styles.large}>Company Details</span>

              <span
                style={styles.small}

              >Introduce your company core info quickly to users by fill up company details</span>
            </div>

            <div className='flex flex-col'
              style={{ width: "60%", gap: "40px" }}
            >

              <DetailsButton
                title={"Company Name"} data={companyName}
                width={80} disable={true} />

              <DetailsButton
                title={"Company Email"} data={companyEmail}
                width={80} disable={true} />

              <DatePicker width={"60%"} title={"Company Founded"}
                selectedDate={foundedDate} setSelectedDate={setFoundedDate} />

              <div className='flex flex-row'>

                <DetailsButton
                  title={"Employee"} data={noOfEmployees}
                  width={40} disable={false} type={"number"}
                  setFunction={setNoOfEmployees} />

                <DetailsDrop title={"Sector"} data={sector} setFunction={setSector}
                  menu={sectorItems} width={35} />

              </div>



            </div>



          </div>


          {/* About Section */}

          <div className='flex flex-row w-full py-3 justify-start'
            style={{
              fontFamily: "Epilogue, sans-seri", borderBottom: "1px solid #f4f6fa",
              gap: "20px"
            }}>

            <div className='flex flex-col' style={{ width: "35%" }}>
              <span style={styles.large}>About Company </span>

              <span
                style={styles.small}

              >Brief description for your company. URLs are hyperlinked.</span>
            </div>

            <div className='flex flex-col'
              style={{ minWidth: "400px", width: "60%" }}

            >
              <textarea
                value={aboutCompany}
                onChange={(e) => { setAboutCompany(e.target.value) }}
                style={{
                  outline: "none", padding: "7px 10px", width: "100%", height: "150px",
                  border: "1px solid rgba(214, 221, 235, 1)", color: "rgba(37, 50, 75, 1)", marginBottom: "5px", overflowY: "auto", scrollbarWidth: "none",
                  msOverflowStyle: "none", resize: 'none'
                }}
                placeholder='Enter Company Description'
              ></textarea>
              <span
                style={{
                  fontSize: "14px", fontWeight: "400",
                  color: "rgba(81, 91, 111, 1)",
                }}
              >
                At max 500 characters allowed
              </span>
            </div>
          </div>
        </div>

      }

      {applyColor === "links" &&


        <div className='flex flex-col w-full py-3 justify-start'
          style={{
            fontFamily: "Epilogue, sans-seri", borderBottom: "1px solid #f4f6fa",
            gap: "20px"
          }}>

          <div className='flex flex-col' style={{ width: "100%" }}>
            <span style={styles.large}>Basic Information</span>

            <span
              style={styles.small}

            >Add elsewhere links to your company profile. You can add only username without full https links.</span>
          </div>

          <div className='flex flex-col'
            style={{ width: "100%", gap: "40px" }}
          >
            <div className='flex flex-row justify-around'>

              <DetailsButton
                title={"Website"} data={website} setFunction={setWebsite}
                width={50} disable={false} type={"link"} />

              <DetailsButton
                title={"CrunchBase"} data={cruchbase}
                width={50} disable={false} setFunction={setCruchbase} />
            </div>

            <div className='flex flex-row'>

              <DetailsButton
                title={"Linkedin"} data={linkedIn}
                width={50} disable={false} setFunction={setLinkedIn} />

              <DetailsButton
                title={"Twitter"} data={twitter} setFunction={setTwitter}
                width={50} disable={false} />
            </div>

            <div className='flex flex-row'>

              <DetailsButton
                title={"Instagram"} data={insta} setFunction={setInsta}
                width={50} disable={false} />

              <DetailsButton
                title={"Facebook"} data={Facebook} setFunction={setFacebook}
                width={50} disable={false} />
            </div>
            <DetailsButton
              title={"YouTube"} data={youtube} setFunction={setYoutube}
              width={50} disable={false} />

          </div>
        </div>
      }


      {applyColor === "hr" &&

        <div className='flex flex-col w-full py-3 px-4 justify-start'
          style={{
            fontFamily: "Epilogue, sans-seri", borderBottom: "1px solid #f4f6fa",

          }}>

          <div className='flex flex-col pb-3 gap-5' style={{ borderBottom: "2px solid #f4f6fa" }}>

            <div className='flex flex-row justify-between items-center ' style={{ width: "100%" }}>

              <div className='flex flex-col ' style={{ width: "95%" }} >

                <span style={styles.large}>Founder </span>

                <span
                  style={styles.small}

                > Add details of the founder of your company and the vision they pursue.
                </span>
              </div>

              <Icon addField={addFounder} deleteField={removeFounder} />



            </div>

            <div className='flex flex-col'
              style={{ width: "100%", gap: "40px" }}
            >

              {founder.map((value, key) => (

                <div className='w-full flex flex-col gap-2'>



                  <div className='flex flex-row full justify-between'>
                    <Input title={"Founder Name"}
                      value={value.name}
                      onChange={(e) => {
                        updateFounderName(e.target.value, value.id)
                      }} />

                    <Input title={"Founder Linkedin"} value={value.linkedIn}

                      onChange={(e) => {
                        updateFounderLinkedIn(e.target.value, value.id);
                      }} />

                  </div>
                  <div className='flex flex-col'
                    style={{ minWidth: "400px", width: "100%" }}

                  >
                    <textarea
                      style={{
                        outline: "none", padding: "7px 10px", width: "100%", height: "150px",
                        border: "1px solid rgba(214, 221, 235, 1)", color: "rgba(37, 50, 75, 1)", marginBottom: "5px", overflowY: "auto", scrollbarWidth: "none",
                        msOverflowStyle: "none", resize: 'none'
                      }}
                      maxLength={500}
                      value={value.bio}
                      onChange={(e) => {
                        updateFounderBio(e.target.value, value.id);
                      }}
                      placeholder='Enter Founder Bio'
                    ></textarea>
                    <span
                      style={{
                        fontSize: "14px", fontWeight: "400",
                        color: "rgba(81, 91, 111, 1)",
                      }}
                    >
                      At max 500 characters allowed
                    </span>
                  </div>

                </div>
              ))}

            </div>
          </div>



          <div className='flex flex-col' style={{ width: "100%" }}>

            <div className='flex flex-col py-2 pb-3 justify-start'  >

              <span style={styles.large}>Team/POC</span>

              <span
                style={styles.small}

              >Add details of your hiring team.</span>
            </div>

            <div className='w-full flex flex-col gap-2'>

              <div className='flex flex-row full justify-between'>
                <Input title={"HR Name"}
                  value={hrName}
                  onChange={(e) => {
                    setHrName(e.target.value)
                  }} />

                <Input title={"HR Email"} value={hrEmail}

                  onChange={(e) => {
                    setHrEmail(e.target.value);
                  }} />

              </div>

              <div className='flex flex-row full justify-between'>
                <Input title={"HR Designation"}
                  value={hrDesignation}
                  onChange={(e) => {
                    setHrDesignation(e.target.value)
                  }} />

                <Input title={"HR Linkedin"} value={hrLinkedin}

                  onChange={(e) => {
                    setHrLinkedin(e.target.value);
                  }} />

              </div>


            </div>





          </div>

        </div>}



    </div>

  );
}

const Icon = ({ addField, deleteField }) => (

  <div className='flex flex-row gap-1' style={{ width: "100px" }}>
    <span
      style={{ backgroundColor: "#e9ebfd", padding: "5px", borderRadius: "50%", cursor: "pointer" }}
      onClick={addField}
    >
      <IoMdAdd size={"18px"} color='#707785' />
    </span>
    <span
      style={{ backgroundColor: "#fde9e9", padding: "5px", borderRadius: "50%", cursor: "pointer" }}
      onClick={deleteField}
    >
      <IoMdClose size={"18px"} color='#e57373' />
    </span>
  </div>
)

const Input = ({ title, onChange, value, width }) => (
  <div className='flex flex-col'>

    <span
      style={{
        fontSize: "16px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
        fontFamily: "Epilogue, sans-seri"
      }}
    >{title}</span>
    <input type="text" style={{
      height: "40px", width: "100%", minWidth: "450px", outline: "none",
      border: "1px solid rgba(214, 221, 235, 1)", padding: "3px 8px",
      color: "rgba(81, 91, 111, 1)"
    }}
      value={value}
      onChange={onChange}
    />
  </div>
)