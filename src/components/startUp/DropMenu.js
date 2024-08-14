import React from 'react';
import { FormControl,Select,MenuItem,InputLabel } from '@mui/material';

const DetailsDrop = ({  disable,width , menu, setFunction,value }) => (
    <div className='flex flex-col'
        style={{ width: `${width}px` }}
    >
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
                        borderColor: "rgba(214, 221, 235, 1)"
                        ,borderWidth: '1px' // Prevent border change on focus
                    },
                    "&.MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)"
                            ,borderWidth: '1px' // Initial border color
                        },
                        "&:hover fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)",
                            borderWidth: '1px' // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "rgba(214, 221, 235, 1)",
                            borderWidth: '1px' // Prevent border color change on focus
                        },
                    },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                // defaultValue={data}
                // onChange={(e) => setFunction(e.target.value)}
                disabled={disable}
                disableUnderline
                value={value}
            >
                {menu?.map((e) => (<MenuItem value={e} 
                onClick={()=>{setFunction(e)}}
                >{`${e}`}</MenuItem>))}
            </Select>
        </FormControl>


    </div>
)

export default DetailsDrop


