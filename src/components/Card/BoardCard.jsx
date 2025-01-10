import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';

import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import { cardStyle } from './cardStyle';
import { Link, useNavigate } from 'react-router-dom';

import BasicMenu from '../common/BasicMenu/BasicMenu';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import AddNewBoard from '../modal/AddNewBoard';


const BoardCard = () => {
  let navigate = useNavigate();

  //menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl(null);
  };

  //DeleteModal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = (event) => {
    event.stopPropagation();
    setIsDeleteModalOpen(true);
    handleClose()
  }

  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDelete = (boardData) => {
    console.log('Board Created:', boardData);
    // You can add logic to save the board data
  };

  //AddModal - board
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal= (event) => {
    event.stopPropagation();
    setIsAddModalOpen(true);
    handleClose()
  }
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleCreateBoard = (boardData) => {
    console.log('Board Created:', boardData);
    // You can add logic to save the board data
  };

  return (
    <>
      <Card sx={cardStyle.card} onClick={() => { navigate("/:id/AllTasks"); }}>

        <CardHeader
          title={
            <Typography gutterBottom variant="h6" component="div">
              Board Title
            </Typography>
          }
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <PiDotsThreeOutlineVertical />
            </IconButton>
          }

        />

        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <BasicMenu anchorEl={anchorEl}
          open={openMenu}
          handleClose={handleClose}
          handleOpenDeleteModal={handleOpenDeleteModal} 
          handleOpenAddModal={handleOpenAddModal}/>

      </Card>
      <DeleteConfirmation open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleCreate={handleDelete} />

      <AddNewBoard open={isAddModalOpen}
        handleClose={handleCloseAddModal}
        handleCreate={handleCreateBoard}
        isEdit={true} 
        />
    </>
  )
}

export default BoardCard