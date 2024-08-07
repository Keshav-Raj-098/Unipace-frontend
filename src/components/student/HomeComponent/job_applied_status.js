import React from 'react'
// import pdf from '../../../assets/pdf.svg'
import { PieChart } from '@mui/x-charts/PieChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


const Job_applied = ({selected,notselected,notshortlisted,shortlisted,applied}) => {

  const navigate = useNavigate()

  const data = [
    { value: `${selected}`, label: 'Selected',color:"rgba(86, 205, 173, 1)"},
    { value: `${shortlisted}`, label: 'Shortlisted',color:"rgba(70, 64, 222, 1)" },
    { value: `${applied}`, label: 'Applied',color:"rgba(255, 184, 54, 1)" },
    { value: `${notshortlisted}`, label: 'Not Shortlisted',color:"rgba(255, 101, 80, 1)" },
    { value: `${notselected}`, label: 'Not Selected',color:"#e32108" },
  ];
  
  const size = {
    width: 370,
    height: 190,
  };
  

  return (

<div
      className='p-5 border-solid overflow-hidden'
      style={{
        height: "228px", width: "280px", color: "#25324b", 
        borderColor: "#d6ddeb",
        borderWidth: "0.8px"
      }}
    >
      <span
        className='w-full'
        style={{ fontSize: "17px", fontWeight: "bolder", }}
      >Applied Status</span>

      <div className='w-full h-full flex flex-col py-3 justify-center items-center'>
       
      <PieChart series={[{ data,outerRadius:80,innerRadius:65,cx:90, cy:80 }]} {...size}></PieChart>
      

      <span
      className='flex flex-row items-center hover:cursor-pointer'
      style={{
        fontSize: "14px", fontWeight: "600", color: "#1976d2",
        //  fontFamily: "Epilogue, sans-seri"
      }}
      onClick={() => { navigate("../applied", 
        { state: { text: "applied", type:"Internship",color:"applied"} }) }}
      >View All Applications<ArrowForwardIcon/></span>

      </div>

      



    </div >
  )
}

export default Job_applied
