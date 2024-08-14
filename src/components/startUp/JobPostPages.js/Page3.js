import React from 'react'
import {LineBar} from "./Page2"

const Page3 = ({perks,setPerks}) => {

    
    const styles = {
        title: { 
            fontFamily: "Epilogue, sans-seri",
            fontSize: "16px", 
            fontWeight: "600", 
            color: "rgba(37, 50, 75, 1)", },
        subtitle: { 
            fontFamily: "Epilogue, sans-seri",
            fontSize: "14px", 
            fontWeight: "400",
             color: "rgba(81, 91, 111, 1)", marginTop: "8px" }
    }

  return (

      <div className='flex flex-row py-5'

      style={{
          fontFamily: "Epilogue, sans-serif", borderBottom: "2px solid #f4f6fa",
          gap: "25px"
      }}>


      <div className='flex flex-col'
          style={{ width: '40%' }}
      >
          <span style={styles.title}>
          Perks and Benefits
          </span>
          <span style={styles.subtitle}>
          Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees
          </span>
      </div>

      <div className='flex flex-col justify-start'
      >
          <LineBar array={perks} setFunction={setPerks}  />
      </div>
  </div>
  )
}

export default Page3
