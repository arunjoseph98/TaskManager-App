import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { taskboardNavbarItems,boardNavbarItems } from './consts/navbarItems';
import { navBarStyles } from './navStyles';
import logo from '../../assets/taskboard logo.png'
import { Button, IconButton } from '@mui/material';
import { FiLogOut } from "react-icons/fi";
import AddNewBoard from '../modal/AddNewBoard';


const Navbar = ({navOpt}) => {
  const [isBoards,setIsBoards]= useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  
    const handleCreateBoard = (boardData) => {
      console.log('Board Created:', boardData);
      // You can add logic to save the board data
    };

    const getItemsForNav = (navOpt) => {
      switch (navOpt) {
        case 'board':
          return boardNavbarItems;
        case 'taskboard':
          return taskboardNavbarItems;
        default:
          return [];
      }
    };


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={navBarStyles.appbar}>
        <Toolbar>
          <Box sx={navBarStyles.wrapper}>
          <img src={logo} style={navBarStyles.logo} alt="" />
            <Box sx={navBarStyles.topRow}>
              <IconButton color="white">
                <FiLogOut />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={navBarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
  {getItemsForNav(navOpt).map((item) => (
    <ListItem key={item.id} disablePadding>
      <ListItemButton onClick={() => handleNavigation(item.path)}>
        <ListItemIcon sx={navBarStyles.icons}>
          <item.icon size={25} />
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
      </Drawer>

      {
        <AddNewBoard open={isModalOpen}
        handleClose={handleCloseModal}
        handleCreate={handleCreateBoard} />
        }
    </>
  )
}

export default Navbar