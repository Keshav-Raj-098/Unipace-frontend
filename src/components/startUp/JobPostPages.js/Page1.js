import React, { useEffect, useState } from 'react'
import DetailsDrop from '../DropMenu'
import { Click } from '../../student/internship'
import { TextField, Select, MenuItem, InputAdornment, FormControl, InputLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { IoMdAdd } from "react-icons/io";
import AddButton from '../AddButton';
import DatePicker from "../Datepicker"
import { DetailsButton } from '../../student/account';

const Step1 = ({ title, Type, addSkill, salary,currency, category, deadline,totalApplications,totalRequired,setDeadline, setTitle, setType, setsalary,setCurrency, setCategory, setAddSkill,setTotalApplications,setTotalRequired }) => {

  const categories = ["Marketing", "Design", "Media", "Content-Creator"]
  const [open, setOpen] = useState(false)

 
 
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  


  return <div className="py-3">

    <div className='flex flex-col w-full pb-3'
      style={{ fontFamily: "Epilogue, sans-seri", borderBottom: "2px solid #f4f6fa" }}>
      <span style={{
        fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)",

      }}>  Basic Information</span>

      <span
        style={{
          fontSize: "14px", fontWeight: "400", color: "rgba(81, 91, 111, 1)", marginTop: "8px"

        }}
      >This information will be displayed publicly</span>




    </div>

    {/*Job Title */}
    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Job Title
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          Job titles must describe one position
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >
        <input type="text"
          onChange={(e) => { setTitle(e.target.value) }}
          style={{
            outline: "none", padding: "7px 10px", width: "300px", height: "50px",
            border: "1px solid rgba(214, 221, 235, 1)", color: "rgba(37, 50, 75, 1)", marginBottom: "5px"
          }}
          placeholder='e.g Software Developer'
          value={title}
        />
        <span
          style={{
            fontSize: "14px", fontWeight: "400",
            color: "rgba(81, 91, 111, 1)",
          }}
        >
          At max 50 characters allowed
        </span>
      </div>
    </div>


    {/* Type of Employment */}
    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Type Of Employment
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          You can select multiple type of employment
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >
        <Click name={"Full-Time"} array={Type}
          setFunction={setType} />
        <Click name={"Part-Time"} array={Type}
          setFunction={setType} />
        <Click name={"Remote"} array={Type}
          setFunction={setType} />
        <Click name={"Full-Time"} array={Type}
          setFunction={setType} />
        <Click name={"Full-Time"} array={Type}
          setFunction={setType} />

      </div>
    </div>


    {/* NO of applications required*/}


    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          No. of Application
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          Give the maximum number of applicantions and number of required employees/interns" you want.
        </span>
      </div>

      <div className='flex flex-row justify-start'
      >
        
        <DetailsButton type={"number"} data={totalApplications} setFunction={setTotalApplications} width={"250px"} title={"NO. of Application"} />

        <DetailsButton type={"number"} data={totalRequired} setFunction={setTotalRequired} width={"250px"} title={"No. of Required Employees"}/>



      </div>
    </div>



    {/* Salary */}
    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Salary
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          Please specify the estimated salary range for the role. *You can leave this blank
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >
        <FormControl fullWidth variant="outlined"
        >

          <TextField

            onChange={(e) => { setsalary(e.target.value) }}
            type="number"
            variant="outlined"
            value={salary}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    value={currency}
                    onChange={handleCurrencyChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Currency' }}
                    variant="standard"
                    defaultValue='INR'
                  >
                    <MenuItem value="USD" >$</MenuItem>
                    <MenuItem value="EUR">€</MenuItem>
                    <MenuItem value="INR">₹</MenuItem>
                    <MenuItem value="GBP">£</MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
            sx={{
              width: "300px",
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'rgba(214, 221, 235, 1)', // Correctly sets the border color on hover
                  borderWidth: '1px', // Ensures the border width is set
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgba(214, 221, 235, 1)', // Correctly sets the border color on focus
                  borderWidth: '1px', // Ensures the border width is set
                },
              },
            }}
            fullWidth
          />
        </FormControl>


      </div>
    </div>

    {/* Categories */}


    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Categories
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          You can select multiple job categories
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >
        <span style={{ fontSize: "16px", fontWeight: "400", color: "rgba(37, 50, 75, 1)", }}>
          Select Job Categories
        </span>

        <DetailsDrop

          width={350} menu={categories} disable={false} setFunction={setCategory} value={category} 


        />



      </div>
    </div>

    {/* Required Skills*/}


    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Required Skills
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          Add required skills for the job
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >

        <DialogBox open={open} setOpen={setOpen} />

        <AddButton name={"Skill"} array={addSkill} setnewArray={setAddSkill} />

      </div>
    </div>

    {/* Deadline*/}


    <div className='flex flex-row py-5'

      style={{
        fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
        gap: "25px"
      }}>


      <div className='flex flex-col'
        style={{ width: '40%' }}
      >
        <span style={{ fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}>
          Deadline
        </span>
        <span style={{
          fontSize: "14px", fontWeight: "400",
          color: "rgba(81, 91, 111, 1)",
        }}>
          Give the deadline of this Job.
        </span>
      </div>

      <div className='flex flex-col justify-start'
      >

        <DatePicker title={"Deadline"} selectedDate={deadline} setSelectedDate={setDeadline} />

      </div>
    </div>

  </div>


}


const DialogBox = ({ open, setOpen }) => {

  return <Dialog open={open} >
    <DialogTitle
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >       <CloseIcon sx={{ cursor: "pointer" }} onClick={() => { setOpen(false) }} />
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
    </DialogActions>
  </Dialog>

}




export default Step1
