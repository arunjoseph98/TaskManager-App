import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { cardStyle } from './cardStyle';

import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { Chip } from '@mui/material';

import BasicMenu from '../common/BasicMenu/BasicMenu';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import AddNewTask from '../modal/AddNewTask';

const TaskCard = () => {
  //menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
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

  //AddModal -task
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = (event) => {
    event.stopPropagation();
    setIsAddModalOpen(true);
    handleClose()
  }
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleCreateTask = (boardData) => {
    console.log('Board Created:', boardData);
    // You can add logic to save the board data
  };


  return (
    <>
      <Card sx={cardStyle.card}>
        {/* Card Header */}
        <CardHeader
          title={
            <Typography variant="h6" component="div">
              Card Title
            </Typography>
          }
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <PiDotsThreeOutlineVertical />
            </IconButton>
          }
        />

        {/* Card Content */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This is some additional information or description for the card. It could be detailed content about the task or item represented by the card.
          </Typography>
        </CardContent>

        {/* Card Footer with Checkbox */}
        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '8px 16px',
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Due <br />dd-mm-yyyy
          </Typography>

          <Chip label="Medium" color="warning" size="small" />

          <Checkbox color="primary" />
        </CardActions>
        <BasicMenu anchorEl={anchorEl}
          open={openMenu}
          handleClose={handleClose}
          handleOpenDeleteModal={handleOpenDeleteModal}
          handleOpenAddModal={handleOpenAddModal} />
      </Card>

      <DeleteConfirmation open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleCreate={handleDelete} />

      <AddNewTask open={isAddModalOpen}
        handleClose={handleCloseAddModal}
        handleCreate={handleCreateTask}
        isEdit={true}  />

    </>
  );
};

export default TaskCard;
