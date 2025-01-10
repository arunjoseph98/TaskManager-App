import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import BoardCard from '../Card/BoardCard';
import AddCard from '../Card/AddCard';
import AddNewBoard from '../modal/AddNewBoard';
import DeleteConfirmation from '../modal/DeleteConfirmation';


const View = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCreateBoard = (boardData) => {
    console.log('Board Created:', boardData);
    // You can add logic to save the board data
  };
  return (
    <>
      <Grid
        container
        spacing={2} // Adjust spacing between items
        justifyContent="flex-start" // Align items horizontally
        alignItems="flex-start"     // Align items vertically
      >
        <Grid xs={12} sm={6} md={4}> 
          <BoardCard />
        </Grid>

        <Grid xs={12} sm={6} md={4}> 
        <BoardCard />
        </Grid>

        <Grid xs={12} sm={6} md={4}> 
        <BoardCard />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AddCard onClick={handleOpenModal} />
        </Grid>
      </Grid>
   

      <AddNewBoard open={isModalOpen}
        handleClose={handleCloseModal}
        handleCreate={handleCreateBoard} />
    </>
  )
}

export default View