import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import StudentOrStartUp from './pages/studentOrStartUp';
import Error404 from './pages/error404';
import StudentIndex from './pages/student/index';
import StudentApply from './pages/student/apply';
import StartUpIndex from './pages/startUp/index';
import StartUpInternship from './pages/startUp/internship';
import StudentAccount from './pages/student/account';
import JobPortalIndex from './pages/index';
import StartUpAccount from './pages/startUp/account';
import StartUpAddNew from './pages/startUp/addNew';
import JobDetails from './pages/details';
import StudentsApplied from './pages/startUp/studentsApplied';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import AlertSnackbar from '../src/components/snackbar';
import AdminSignInRedirect from './pages/admin/AdminSignInRedirect';
import AdminDashboard from './pages/admin/dashboard';
import AdminIndex from './pages/admin/index';
import ReactGA from 'react-ga';
import TeleportLanding from './pages/landing';
import StudentDashbaord from "./pages/student/dashboard"
import Trial from "./pages/student/dashboard/opportunityTable"
import Blogs from "./pages/student/blogpage"
import Community from "./pages/student/community"
import Popup from "./components/Loadpopup.js"
import Apply from "./pages/student/Applied.js"
import AIpopup from "./components/startUp/AI/Aipopup.js"



const trackingId = 'G-1D3RFBNRQV';
ReactGA.initialize(trackingId);

const BASE_URL = process.env.REACT_APP_BACKEND_URL_PRODUCTION || process.env.REACT_APP_BACKEND_URL;
const timer = 3000;


export default function App() {
  // localStorage.clear()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('light');
  const [startUpDetails, setStartUpDetails] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Showing alert!');
  const [alertSeverity, setAlertSeverity] = useState('info');
  const [loadPopup, setloadPopup] = useState(false)
  const [IsOpen, setIsOpen] = useState(false)
  const [newJD, setnewJD] = useState("")
  const [loading2, setloading2] = useState(false)




  const colorTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
        }),
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: '#1976d2',
      },
    },
  });

  const getStudentAccountDetails = async () => {
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/student/register/${localStorage.getItem('localStorageStudentId')}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setStudentDetails(data.studentDetails);
            setLoading(false);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getStartUpAccountDetails = async () => {
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = `${BASE_URL}/api/startUp/register/${localStorage.getItem('localStorageStartUpId')}`;
    try {
      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            setStartUpDetails(data.startUpDetails);
            setLoading(false);
          } else {
            console.log(data);
          }
        });
    } catch (error) {
      // TODO :: if there is an error, the loading screen should stop and user should recieve a error dialog box like ("please check your internet connection and try again")
      // I guess using setShowAlert, and setAlertMessage and setAlertSeverity
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('localStorageStudentId')) getStudentAccountDetails();
    else if (localStorage.getItem('localStorageStartUpId')) getStartUpAccountDetails();
    else setLoading(false);
  }, []);

  useEffect(() => {


    console.log(newJD);


  }, [newJD])


  // console.log(IsOpen);

  // useEffect(() => {
  //   const colorMode = localStorage.getItem('colorMode');
  //   if (colorMode === 'dark') setMode('dark');
  //   else if (colorMode === 'light') setMode('light');
  //   else setMode(prefersDarkMode ? 'dark' : 'light');
  // }, []);

  const setAlertProps = { setShowAlert, setAlertMessage, setAlertSeverity };

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      {loading ? (
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          { }
          <BrowserRouter>
            <Routes>
              {/* TODO IF i WRITE http://localhost:3000/signIn or http://localhost:3000/signUp, etc than teh site crashes, we need to add a redirect in such cases*/}
              <Route
                path="/"
                element={
                  <JobPortalIndex
                    mode={mode}
                    setMode={setMode}
                    startUpDetails={startUpDetails}
                    studentDetails={studentDetails}
                    setloadPopup={setloadPopup}
                    loadPopup={loadPopup}
                  />

                }
              >
                {/* <Route path="/" element={<StudentOrStartUp BASE_URL={BASE_URL} {...setAlertProps} />} /> */}
                <Route path="/" element={
                  <>
                    <TeleportLanding BASE_URL={BASE_URL} {...setAlertProps} />

                    {/* {loadPopup &&  */}
                    <Popup
                      BASE_URL={BASE_URL}
                      setStartUpDetails={setStartUpDetails}
                      setStudentDetails={setStudentDetails}
                      {...setAlertProps}
                      setloadPopup={setloadPopup}
                      loadPopup={loadPopup}
                    />

                  </>} />


                <Route path="details" element={<JobDetails BASE_URL={BASE_URL} startUpDetails={null} />} />{' '}</Route>



              <Route
                path="student"
                element={<StudentIndex mode={mode} setMode={setMode} studentDetails={studentDetails} setStudentDetails={setStudentDetails} />}
              >
                <Route path='blog' element={<Blogs />} />
                <Route path='community' element={<Community />} />
                <Route path='applied' element={<Apply BASE_URL={BASE_URL} studentDetails={studentDetails} {...setAlertProps} />} />

                <Route path="dashboard" element={<StudentDashbaord BASE_URL={BASE_URL} studentDetails={studentDetails} {...setAlertProps} />} />
                <Route path="trial" element={<Trial BASE_URL={BASE_URL} studentDetails={studentDetails} {...setAlertProps} />} />
                <Route
                  path="account"
                  element={
                    <StudentAccount BASE_URL={BASE_URL} studentDetails={studentDetails} setStudentDetails={setStudentDetails} {...setAlertProps} />
                  }
                />
                <Route path="details" element={<JobDetails BASE_URL={BASE_URL} startUpDetails={null} />} />{' '}
                {/* TODO check if  shouldn't there be an alert property here also? */}
                <Route path="apply" element={<StudentApply BASE_URL={BASE_URL} studentDetails={studentDetails} {...setAlertProps} />} />
              </Route>

              <Route
                path="startUp"
                element={<StartUpIndex mode={mode} setMode={setMode} startUpDetails={startUpDetails} setStartUpDetails={setStartUpDetails} />}
              >
                <Route path="internship" element={<StartUpInternship BASE_URL={BASE_URL} startUpDetails={startUpDetails} {...setAlertProps} />} />
                <Route
                  path="account"
                  element={
                    <StartUpAccount BASE_URL={BASE_URL} startUpDetails={startUpDetails} setStartUpDetails={setStartUpDetails} {...setAlertProps} />
                  }
                />
                <Route path="addNew" element={
                  <>
                    <AIpopup IsOpen={IsOpen} setIsOpen={setIsOpen} setnewJD={setnewJD}
                    loading={loading2} setloading={setloading2}
                    />
                    <StartUpAddNew BASE_URL={BASE_URL} {...setAlertProps}
                      IsOpen={IsOpen} setIsOpen={setIsOpen} newJD={newJD} 
                      loading3={loading2} setloading3={setloading2} />
                  </>} />

                <Route path="studentsApplied" element={<StudentsApplied BASE_URL={BASE_URL} {...setAlertProps} />} />
                <Route path="details" element={<JobDetails BASE_URL={BASE_URL} startUpDetails={startUpDetails} />} />{' '}
                {/* TODO check if  shouldn't there be an alert property here also? */}
              </Route>
              <Route path="admin" element={<AdminIndex mode={mode} setMode={setMode} />}>
                <Route path="" element={<AdminSignInRedirect />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="details" element={<JobDetails BASE_URL={BASE_URL} startUpDetails={null} />} />
              </Route>

              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
          {showAlert ? <AlertSnackbar message={alertMessage} severity={alertSeverity} timer={timer} setShowAlert={setShowAlert} /> : <></>}
        </>
      )}
    </ThemeProvider>
  );
}
