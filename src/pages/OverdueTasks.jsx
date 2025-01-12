import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box, Toolbar } from '@mui/material';
import ViewTask from '../components/View/ViewTask';

const OverdueTasks = () => {
  const [resTask,setResTask]=useState('') 
  return (
    <>
      <Box sx={{ display: 'flex' }} >
      <Navbar navOpt={'taskboard'}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor: '#DADADA',minHeight:"100vh"}}>
        <Toolbar />
        <ViewTask resTask={resTask} setResTask={setResTask} status={false} isOverduePage={true}/>
        
      </Box>
    </Box>
    </>
  )
}

export default OverdueTasks