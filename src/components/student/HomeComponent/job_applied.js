import React from 'react'
import pdf from '../../../assets/pdf.svg'

const job_applied = ({title,number}) => {
  return (
    <div
    className='p-5 border-solid overflow-hidden'
    style={{height:"110px",width:"250px",color:"#25324b",borderColor:"#d6ddeb",
      borderWidth:"0.8px",paddingBottom:"0px"}}
    >
        <span 
        className='w-full'
        style={{fontSize:"17px",fontWeight:"bolder",}}
        >{title}</span>

        <div className='w-full flex flex-row pb-0'>
            
            <span
            style={{fontSize:"45px",fontWeight:"bold"}}
            >{number}</span>

            <img src={pdf} alt="icon" color='grey'
            style={{height:'60px',position:"relative",top:"25px",left:"75px"}}
            />

        </div>



    </div>
  )
}

export default job_applied
