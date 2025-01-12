import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';

import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import { cardStyle } from './cardStyle';
import { useNavigate } from 'react-router-dom';

import BasicMenu from '../common/BasicMenu/BasicMenu';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import AddNewBoard from '../modal/AddNewBoard';

import { deleteBoardAPI, deleteTaskAPI, getTaskFordeleteBoardAPI } from '../../services/allAPI'


const BoardCard = ({ boardData, setResBoard }) => {
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

  const handleDelete = () => {
    console.log('deleteBoard:');
    deleteBoard(boardData.id)
    handleCloseDeleteModal()
  };

  const deleteBoard = async (id) => {
    try {
      const taskresult = await getTaskFordeleteBoardAPI(id)
      if (taskresult.status >= 200 && taskresult.status < 300) {
        const tasks = taskresult.data;
        tasks.map(async (tasks)=> await deleteTaskAPI(tasks.id))
        const result = await deleteBoardAPI(id)
      setResBoard(result)
      }
      
    }
    catch (err) {
      console.log(err);

    }
  }





  //AddModal - board
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = (event) => {
    event.stopPropagation();
    setIsAddModalOpen(true);
    handleClose()
  }
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  return (
    <>
      <Card sx={cardStyle.card} onClick={() => { navigate(`/${boardData.id}/AllTasks`); }}>

        <CardHeader
          title={
            <Typography gutterBottom variant="h6" component="div">
              {boardData?.title}
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
            {boardData?.description}
          </Typography>
        </CardContent>
        <BasicMenu anchorEl={anchorEl}
          open={openMenu}
          handleClose={handleClose}
          handleOpenDeleteModal={handleOpenDeleteModal}
          handleOpenAddModal={handleOpenAddModal} />

      </Card>
      <DeleteConfirmation open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        handleDelete={handleDelete} />

      <AddNewBoard open={isAddModalOpen}
        handleClose={handleCloseAddModal}
        boardData={boardData}
        setResBoard={setResBoard}
        isEdit={true}
      />
    </>
  )
}

export default BoardCard