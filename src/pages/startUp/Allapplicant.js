import React from 'react'
import { CircularProgress,Box } from '@mui/material'
import { useState } from 'react';
import AddButton from '../../components/startUp/AddButton';


const Allapplicant = () => {



  const [isLoading, setloading] = useState(false)


  return (
    <div>
      
     {isLoading ? (
          <Box
          sx={{
            height: '100vh',
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <CircularProgress />
          </Box>
        ):(
          <div className='p-8'>

           
          </div>
        )}
    </div>
  )
}

export default Allapplicant
