import React from 'react';
import { BarChart } from '@mui/x-charts';
import { FaClipboardList } from "react-icons/fa6";
import { PieChart } from '@mui/x-charts';
import { Card, Typography, Box, Grid } from '@mui/material';


const data = [
  { day: 'Mon', view: 4000, applied: 2400 },
  { day: 'Tue', view: 3000, applied: 1398 },
  { day: 'Wed', view: 2000, applied: 1398 },
  { day: 'Thu', view: 7000, applied: 1398 },
  { day: 'Fri', view: 3000, applied: 1398 },
  { day: 'Sat', view: 3000, applied: 1398 },
  { day: 'Sun', view: 3000, applied: 1398 },

  // Add more data points as needed
];


const Barchart = () => {
  return (
    <div>
      <BarChart
        dataset={data}
        series={[
          // Down
          { dataKey: 'view', stack: 'assets', color: "rgba(123, 97, 255, 1)", label: "View" },
          //   Up
          { dataKey: 'applied', stack: 'assets', color: "rgba(255, 184, 54, 1)", label: "Applied" },
        ]}
        xAxis={[{
          scaleType: 'band', dataKey: 'day', barGapRatio: "0",
          tickLabelPlacement: "middle", tickPlacement: "middle"
        }]}
        yAxis={[{ disableLine: true, disableTicks: true, scaleType: "linear" }]}

        slotProps={{ legend: { hidden: true } }}
        width={400}
        height={350}
      />
    </div>
  );
};







// Jobs Applied

const Barchart2 = () => {
  return (
    <div>
      <BarChart
        dataset={data}
        series={[
          // Down
          { dataKey: 'view', stack: 'assets', color: "rgba(123, 97, 255, 1)", label: "View" },
        ]}
        xAxis={[{
          scaleType: 'band', dataKey: 'day', barGapRatio: "0",
          tickLabelPlacement: "middle", tickPlacement: "middle"
        }]}
        yAxis={[{ disableLine: true, disableTicks: true, scaleType: "linear" }]}

        slotProps={{ legend: { hidden: true } }}
        width={400}
        height={350}
      />
    </div>
  );
};


const Barchart3 = () => {
  return (
    <div>
      <BarChart
        dataset={data}
        series={[
          // Down
          { dataKey: 'applied', stack: 'assets', color: "rgba(123, 97, 255, 1)", label: "View" },
        ]}
        xAxis={[{
          scaleType: 'band', dataKey: 'day', barGapRatio: "0",
          tickLabelPlacement: "middle", tickPlacement: "middle"
        }]}
        yAxis={[{ disableLine: true, disableTicks: true, scaleType: "linear" }]}

        slotProps={{ legend: { hidden: true } }}
        width={400}
        height={350}
      />
    </div>
  );
};


const Boxx = ({ title, value, icon2, icon, percent, color, color2 }) => {

  return <div className='px-3 py-2 flex flex-col'
    style={{ border: "1px solid rgba(214, 221, 235, 1)", height: "150px", width: "230px" }}>

    <div className='flex flex-row justify-between items-center'>
      <span
        style={{ fontSize: "18px", fontFamily: "Epilogue", fontWeight: "600", color: "rgba(37, 50, 75, 1)" }}
      >{title}</span>

      <div className='flex flex-row justify-center items-center'
        style={{ height: "45px", width: "45px", borderRadius: "50%", backgroundColor: `${color}` }}>
        {icon}

      </div>
    </div>


    <span
      style={{ fontSize: "28px", fontFamily: "Epilogue", fontWeight: "600", color: "rgba(37, 50, 75, 1)" }}
    >{value}</span>


    <div className='flex flex-row gap-1'
      style={{ fontSize: "17px", fontFamily: "Epilogue", fontWeight: "500", color: "rgba(124, 132, 147, 1)" }}>
      <span>
        This Week

      </span>
      <div className='flex flex-row items-center'
      > <span style={{ fontWeight: "600", color: `${color2}` }}>
          {`${percent}%`}
        </span>
        {icon2}</div>
    </div>

  </div>
}




const ApplicantSummary = ({ height }) => {
  // Data
  const data = [
    { value: 50, label: 'Hired', color: "rgba(86, 205, 173, 1)" },
    { value: 40, label: 'Shortlisted', color: "rgba(70, 64, 222, 1)" },
    { value: 30, label: 'In Review', color: "rgba(255, 184, 54, 1)" },
    { value: 10, label: 'Declined', color: "#e32108" },
    { value: 20, label: 'Not Shortlisted', color: "rgba(255, 101, 80, 1)" },
  ];

  const totalApplicants = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div
      style={{
        padding: "8px",
        maxWidth: 300,
        border: "1px solid rgba(214, 221, 235, 1)",
        height: `${height}`,
      }}
      className="flex flex-col"
    >
      <span
        className="px-5 pt-3"
        style={{
          fontFamily: "Epilogue, sans-serif",
          fontSize: "16px",
          fontWeight: "600",
          color: "rgba(37, 50, 75, 1)",
        }}
      >
        Applicants Summary
      </span>
      <div className="w-full flex flex-row pb-0 " style={{ alignItems: "baseline" }}>
        <span
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "rgba(37, 50, 75, 1)",
          }}
        >
          {totalApplicants}
        </span>

        <span
          style={{
            fontSize: "15px",
            fontWeight: "400",
            color: "rgba(124, 132, 147, 1)",
          }}
        >
          Applicants
        </span>
      </div>

      {/* Horizontal Bar */}
      <Box
        sx={{
          height: 10,
          display: 'flex',
          borderRadius: 1,
          overflow: 'hidden',
          my: 3,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: item.color,
              width: `${(item.value / totalApplicants) * 100}%`,
            }}
          />
        ))}
      </Box>

      {/* Legend */}
      <Grid container spacing={1}>
        {data.map((item, index) => (
          <Grid
            item
            xs={index === data.length - 1 ? 12 : 6} // Make last label full-width
            key={index}
            my={0.2}
          >
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  backgroundColor: item.color,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  mr: 1,
                }}
              />
              <Typography variant="body2">
                {item.label} : {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ApplicantSummary;








export { Barchart, Barchart2, Barchart3, Boxx, ApplicantSummary };
