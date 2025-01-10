import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import AddCard from '../Card/AddCard';
import TaskCard from '../Card/TaskCard';
import AddNewTask from '../modal/AddNewTask';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import BasicMenu from '../common/BasicMenu/BasicMenu';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';



const ViewTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleCreateBoard = (boardData) => {
        console.log('Board Created:', boardData);
        // You can add logic to save the board data
    };
    return (
        <>
            <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h4" component="div">
                    Board Title
                </Typography>
                <Box >
                    <Button variant="text">All</Button>
                    <ButtonGroup sx={{ bgcolor: '#E2E0F5',px:1 }} size="small" variant="text" aria-label="Basic button group">
                        <Button color='success'>Low</Button>
                        <Button color='warning'>Medium</Button>
                        <Button color='error'>High</Button>
                    </ButtonGroup>
                </Box>
            </Box>
            <Grid
                container
                spacing={2} // Adjust spacing between items
                justifyContent="flex-start" // Align items horizontally
                alignItems="flex-start"     // Align items vertically
            >

                <>
                    <Grid xs={12} sm={6} md={4}>
                        <TaskCard />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <TaskCard />
                    </Grid>
                </>
                
                <Grid xs={12} sm={6} md={4}>
                    <AddCard onClick={handleOpenModal} />
                </Grid>
            </Grid>

            

            <AddNewTask open={isModalOpen}
                handleClose={handleCloseModal}
                handleCreate={handleCreateBoard} />

        </>

    )
}

export default ViewTask