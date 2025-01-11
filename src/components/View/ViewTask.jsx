import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import AddCard from '../Card/AddCard';
import TaskCard from '../Card/TaskCard';
import AddNewTask from '../modal/AddNewTask';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { getAllTaskAPI, getTaskBoardTitleAPI } from '../../services/allAPI';

const ViewTask = ({ resTask, setResTask }) => {
    const param = useParams()
    const [allTask, setAllTask] = useState([])
    const [board,setBoard]=useState({})

    useEffect(() => {
        getAllTask(param.id)
    }, [resTask])


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);


    const getAllTask = async (id) => {
        try {
            const result = await getAllTaskAPI(id);
            const boardResult = await getTaskBoardTitleAPI(id)

            if (result.status >= 200 && result.status < 300) {
                setAllTask(result.data);
                setBoard(boardResult.data)
                // console.log(boardResult.data);
            }
            else {
                console.log("API call failed");
            }
        } catch (error) {
            console.error('Error creating board:', error);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography gutterBottom variant="h4" component="div">
                    {board?.title}
                </Typography>
                <Box >
                    <Button variant="text">All</Button>
                    <ButtonGroup sx={{ bgcolor: '#E2E0F5', px: 1 }} size="small" variant="text" aria-label="Basic button group">
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

                {
                    allTask?.length > 0 &&
                    allTask?.map(tasks => (
                        <Grid key={tasks.id} xs={12} sm={6} md={4}>
                            <TaskCard boardId={param.id} taskData={tasks} setResTask={setResTask}/>
                        </Grid>
                    ))

                }


                <Grid xs={12} sm={6} md={4}>
                    <AddCard onClick={handleOpenModal} />
                </Grid>
            </Grid>



            <AddNewTask open={isModalOpen}
                handleClose={handleCloseModal}
                setResTask={setResTask}
                boardId={param.id}
                isEdit={false}
            />

        </>

    )
}

export default ViewTask