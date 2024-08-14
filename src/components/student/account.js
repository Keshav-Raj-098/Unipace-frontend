import { FormControl, InputLabel, Select, MenuItem, TextField,Input,Grid } from '@mui/material';
import React, { useState, useRef } from 'react';

const DetailsButton = ({ title, data, width, disable, setFunction,type }) => (
    <div className='flex flex-col'
        style={{ width: `${width}%` }}
    >
        <span
            style={{
                fontSize: "15px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue, sans-seri"
            }}
        >{title}</span>





        <TextField
        type={type||"text"}
            
            style={{
                height: "40px",
                width: "85%",
                fontSize: "15px",
                fontWeight: "400",
                color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue, sans-serif",
                paddingLeft: "5px",
                outline: "none",
                backgroundColor: "white",
                cursor: disable ? "not-allowed" : "auto",
                '& .MuiInputBase-root': {
                    padding: '0',
                    borderRadius: '4px'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(214, 221, 235, 1)',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(214, 221, 235, 1)',
                },
                '& .MuiInputBase-input': {
                    padding: '5px'
                }
            }}
            onChange={(e) => setFunction(e.target.value)}
            disabled={disable}

            id="outlined-required"
            label={null}  // Hides the label when disabled
            defaultValue={data}
            InputLabelProps={{ shrink: false }} // Ensure label doesn't shrink when not displayed
        />


    </div>
)

const DetailsDrop = ({ title, data, disable, width, menu, setFunction }) => (
    <div className='flex flex-col'
        style={{ width: `${width}%` }}
    >
        <span
            style={{
                fontSize: "15px", fontWeight: "400", color: "rgba(81, 91, 111, 1)",
                fontFamily: "Epilogue, sans-seri"
            }}
        >{title}</span>
        <FormControl fullWidth

        >
            <InputLabel
                id="demo-simple-select-label"
                sx={{
                    color: "rgba(81, 91, 111, 1)", // Set the color to your preference
                    "&.Mui-focused": { color: "rgba(81, 91, 111, 1)" }, // Prevent color change on focus
                    fontFamily: "Epilogue, sans-serif", outline: "none", border: "none"
                }}
            >
            </InputLabel>
            <Select
                sx={{
                    width: "85%",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "rgba(81, 91, 111, 1)",
                    fontFamily: "Epilogue, sans-serif",
                    border: "1px solid rgba(214, 221, 235, 1)",
                    paddingLeft: "5px",
                    outline: "none",
                    backgroundColor: "white",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(214, 221, 235, 1)" // Prevent border change on focus
                    },
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)", // Initial border color
                        },
                        "&:hover fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)", // Prevent border color change on focus
                        },
                    },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue={data}
                onChange={(e) => setFunction(e.target.value)}
                disabled={disable}
                disableUnderline
            >
                {menu?.map((e) => (<MenuItem value={e}>{`${e}`}</MenuItem>))}
            </Select>
        </FormControl>


    </div>
)




const ResumeUloader = ({ title, data, width, disable, setFunction }) => (
    

    <div 
      container 
      className='flex flex-col'
      style={{ width: `${width}%` }}
    >
      <span
        style={{
          fontSize: "15px", 
          fontWeight: "400", 
          color: "rgba(81, 91, 111, 1)",
          fontFamily: "Epilogue, sans-serif"
        }}
      >
        {title}
      </span>
    
      <div 
        style={{
          
          width: "85%"
        }}
      >
        <Input
          sx={{
            '& .MuiInputBase-input[type="file"]::file-selector-button': {
              border: 'none',
              fontSize: '15px',
              color: '#1986d2',
              '&:hover': {
                cursor: "pointer"
              },
              height: '20px',
              borderRadius: '5px',
              backgroundColor: '#f8f8fd',
              paddingBottom: '20px',
            },
            '&.MuiInputBase-root': {
              height: '56px', // Adjust height to match TextField
              width: '100%',  // Full width
              padding: '10px 12px', // Adjust padding to match TextField
              boxSizing: 'border-box',
              border: '1px solid rgba(0, 0, 0, 0.23)',
              borderRadius: '4px',
              outline: 'none', // Remove outline on focus
              '&:hover': {
                borderColor: '1px solid rgba(0, 0, 0, 0.23)',
              },
              '&:focus-within': {
                borderColor: 'rgba(0, 0, 0, 0.23)', // Keep border color same as default
              },
            },
          }}
          type="file"
          inputProps={{
            accept: '.pdf',
          }}
          onChange={(e) => setFunction(e)}
          disabled={disable}
          fullWidth
        />
      </div>
    </div>
    
    
)

export { DetailsButton, DetailsDrop, ResumeUloader }