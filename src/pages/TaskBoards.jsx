import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import View from '../components/View/View'
import Grid from '@mui/material/Grid2';
import { Box, Toolbar } from '@mui/material';

const TaskBoards = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }} >
      <Navbar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <View/>
        
      </Box>
    </Box>
    </>
    

  )
}

export default TaskBoards