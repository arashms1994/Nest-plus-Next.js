import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1120,
          marginBottom: "50px",
        }}
      >
        <h1 className='font-semibold text-2xl my-3'>سفارشات</h1>
      </Box>
    </>
  )
}

export default page