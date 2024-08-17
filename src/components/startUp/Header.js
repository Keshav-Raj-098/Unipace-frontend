import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./buttonstyle.css"
import { useNavigate } from 'react-router-dom';
import Companyimg from "../../assets/internshipImage.svg"

const Header = ({ name,logo }) => {

    const navigate = useNavigate();

    return (
        <div className="px-6 py-3 flex flex-row justify-between items-center"
            style={{ borderBottom: "1px solid rgba(214, 221, 235, 1)" }}
        >
            <div className='flex flex-row gap-2'>
            <div
                className="flex flex-row justify-center items-center"
                style={{
                  height: "75px", width: "75px", borderRadius: "50%", overflow: "hidden",
                  border: logo && "1px solid black"


                }}>

                <img src={logo || Companyimg} alt="userimg" />
              </div>
                <div className='flex flex-col gap-2'

                >
                    <span
                        style={{
                            fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "400", color: "rgba(81, 91, 111, 1)", position: "relative", top: '9px'
                        }}
                    >Comapny</span>
                    <span
                        style={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", fontWeight: "600", color: "rgba(37, 50, 75, 1)", }}
                    >{name}</span>
                </div>

            </div>

            <div
                className='postJob hover:cursor-pointer flex flex-col'
                onClick={() => {
                    navigate("/startUp/jobPost", { state: { type: "Internship",companyName:name,color:"joblist" } })
                }}

            > <AddIcon /> <span
                style={{ position: "relative", top: "2px" }}
            >Post Job</span></div>


        </div>
    )
}

export default Header
