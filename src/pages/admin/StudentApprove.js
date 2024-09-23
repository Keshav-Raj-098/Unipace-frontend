import { Container, Typography, CardContent, Card, Box, Button, CircularProgress } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import React, { useState, useEffect } from 'react';
import InternshipTable from '../../components/table';
import { useNavigate, useLocation } from 'react-router-dom';
import ConfirmApprovalDialogBox from '../../components/admin/confirmApprovalDialogBox';
// import PopOver from '../../components/student/popOver';

export default function AdminDashboard({ setShowAlert, setAlertMessage, setAlertSeverity }) {
  const [loading, setLoading] = useState(true);
  const [internshipTableRow, setInternshipTableRow] = useState([]);
  const navigate = useNavigate();

  const convertToTableRows = (jsonData) => {
    const jsonDataArray = [];
    
    for (let i = 0; i < jsonData.length; i++) {
      const oneJsonData = jsonData[i];
      console.log(oneJsonData);
      const convertedJsonData = {
        id: i + 1,
        name: oneJsonData.name,
        department: oneJsonData.department,
        year: oneJsonData.year,
        cgpa: oneJsonData.cgpa,
        imglink: oneJsonData.imglink,
        resumelink:oneJsonData.resumelink,
        approval: oneJsonData.approval || 'pending',
      };
      jsonDataArray.push(convertedJsonData);
    }
    setInternshipTableRow(jsonDataArray);
  };

  const getInternship = async () => {
    const formData = {
      code: localStorage.adminCode,
      userID: localStorage.userID,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.adminCode,
      },
      body: JSON.stringify(formData),
    };
    const url = `${process.env.REACT_APP_ADMIN_URL}/student`;
    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        convertToTableRows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error: ', error);
      });
  };

  const internshipTableColumn = [
    {
      field: 'imglink',
      headerName: 'Photo',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1.8,
    },
    {
      field: 'department',
      headerName: 'Department',
      flex: 1.5,
    },
    {
      field: 'year',
      headerName: 'Year',
      flex:0.7,
    },
    {
      field: 'cgpa',
      headerName: 'CGPA',
      flex:0.5,
    },
    {
        field: 'resumelink',
        headerName: 'Resume',
        flex: 1,
        
        
      },
    {
      field: 'approval',
      headerName: 'Approval Status',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <ConfirmApprovalDialogBox
            row={row}
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
            setAlertSeverity={setAlertSeverity}
            internshipTableRow={internshipTableRow}
            setInternshipTableRow={setInternshipTableRow}
          />
        );
      },
    },
   
  ];

  useEffect(() => {
    getInternship();
  },[]);

  return (
    <Container sx={{ py: 2, mt: 9 }}>
      {/* <ConfirmApprovalDialogBox/> */}
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
           Students
          </Typography>
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
            <InternshipTable column={internshipTableColumn} row={internshipTableRow} />
          )
          }
        </CardContent>
      </Card>
    </Container>
  );
}
