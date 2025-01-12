import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import View from '../components/View/View'
import { Box, Toolbar } from '@mui/material';

const TaskBoards = () => {
  const [resBoard,setResBoard]=useState('')
  return (
    <>
      <Box sx={{ display: 'flex' }} >
      <Navbar setResBoard={setResBoard} navOpt={'board'}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor: '#DADADA',minHeight:"100vh"}}>
        <Toolbar />
        <View setResBoard={setResBoard} resBoard={resBoard} />
        
      </Box>
    </Box>
    </>
    

  )
}

export default TaskBoards