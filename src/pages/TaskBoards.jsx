import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import View from '../components/View/View'
import { Box, Toolbar } from '@mui/material';

const TaskBoards = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }} >
      <Navbar navOpt={'board'}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <View/>
        
      </Box>
    </Box>
    </>
    

  )
}

export default TaskBoards