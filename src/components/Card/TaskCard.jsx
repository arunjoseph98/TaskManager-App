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
import { deleteTaskAPI, updateStatusAPI } from '../../services/allAPI';

const TaskCard = ({ taskData, setResTask, boardId }) => {
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

  const handleDelete = () => {
    console.log('deletetask:');
    deleteTask(taskData.id)
    handleCloseDeleteModal()
  };

  //AddModal -task
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = (event) => {
    event.stopPropagation();
    setIsAddModalOpen(true);
    handleClose()
  }
  const handleCloseAddModal = () => setIsAddModalOpen(false);



  const deleteTask = async (id) => {
    try {
      const result = await deleteTaskAPI(id)
      setResTask(result)
    }
    catch (err) {
      console.log(err);

    }
  }

  const [checked, setChecked] = useState(taskData.isComplete); //checkBox

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);  // Update the state based on the checkbox status
    if (event.target.checked) {
      updateStatus(taskData.id, true);
    } else {
      updateStatus(taskData.id, false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const updatedData = {
        isComplete: status,
      };
      const result = await updateStatusAPI(id, updatedData)
      setResTask(result)
      console.log(result);

    }
    catch (err) {
      console.log(err);

    }
  }



  return (
    <>
      <Card sx={taskData?.isOverdue ? cardStyle.dueCard : cardStyle.card}>
        {/* Card Header */}
        <CardHeader
          title={
            <Typography variant="h6" component="div">
              {taskData?.title}
            </Typography>
          }
          action={
            <IconButton onClick={handleClick} aria-label="settings">
              <PiDotsThreeOutlineVertical />
            </IconButton>
          }
        />

        {/* Card Content */}
        <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'auto', // Enable horizontal scrolling for the entire content
        }}
        >
          <Typography 
          variant="body2" 
          sx={{
            color: 'text.secondary',
            whiteSpace: 'normal', // Allow text wrapping
            overflowX: 'auto', // Enable horizontal scrolling
            wordWrap: 'break-word', // Ensure that words break properly if too long
          }}          
          >
            {taskData?.description}
          </Typography>
        </CardContent>

        {/* Card Footer with Checkbox */}
        <CardActions
          sx={{
            justifyContent: 'space-between',
            padding: '15px 16px',
            marginTop: 'auto'
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Due <br />{taskData?.dueDate?.day}-{taskData?.dueDate?.month}-{taskData?.dueDate?.year}
          </Typography>
          {taskData?.isOverdue && <Chip label="Due" color="error" size="small" />}
          <Chip
            label={taskData?.priority}
            color={
              taskData?.priority === "High"
                ? "error"
                : taskData?.priority === "Medium"
                  ? "warning"
                  : "success"
            }
            size="small" />

          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            color="primary"
          />
        </CardActions>
        <BasicMenu anchorEl={anchorEl}
          open={openMenu}
          handleClose={handleClose}
          handleOpenDeleteModal={handleOpenDeleteModal}
          handleOpenAddModal={handleOpenAddModal} />
      </Card>

      <DeleteConfirmation open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDelete} />

      <AddNewTask open={isAddModalOpen}
        handleClose={handleCloseAddModal}
        taskData={taskData}
        setResTask={setResTask}
        boardId={boardId}
        isEdit={true} />

    </>
  );
};

export default TaskCard;
