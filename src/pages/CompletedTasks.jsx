import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Toolbar } from '@mui/material';
import ViewTask from '../components/View/ViewTask';

const CompletedTasks = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }} >
      <Navbar navOpt={'taskboard'}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <ViewTask/>
        
      </Box>
    </Box>
    </>
  )
}

export default CompletedTasks