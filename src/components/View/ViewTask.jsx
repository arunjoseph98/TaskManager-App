import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import AddCard from '../Card/AddCard';
import TaskCard from '../Card/TaskCard';
import AddNewTask from '../modal/AddNewTask';
import { Box, Button, ButtonGroup, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';


import { getAllTaskAPI, getOverdueTasksAPI, getTaskBoardTitleAPI, updateOverdueAPI } from '../../services/allAPI';

const ViewTask = ({ resTask, setResTask, status, isOverduePage = false }) => {
    const param = useParams()
    const [allTask, setAllTask] = useState([])
    const [board, setBoard] = useState({})
    const [filter, setFilter] = useState("All"); // Default filter is 'All'
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (isOverduePage) {
            getOverdueTasks(param.id)
        } else {
            getAllTask(param.id, status)
        }

    }, [resTask])

    useEffect(() => {
        updateOverdue()
    }, [])


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);


    const getAllTask = async (id, status) => {
        setLoading(true); // Start loading
        try {
            const result = await getAllTaskAPI(id, status);
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
        }finally {
            setLoading(false); // Stop loading
          }
    };
    ///////////////////////////////////////////////////////////////////updateOverdue
    const updateOverdue = async () => {
        
        try {
            const today = new Date();
            const updatedTasks = []; // Store results for all updated tasks

            for (const task of allTask) {
                if (
                    task.dueDate &&
                    task.dueDate.year &&
                    task.dueDate.month &&
                    task.dueDate.day
                ) {
                    const taskDueDate = new Date(
                        task.dueDate.year,
                        task.dueDate.month - 1,
                        task.dueDate.day
                    );

                    if (taskDueDate < today && !task.isComplete) {
                        const updatedData = {
                            isOverdue: true, // Assuming `status` should be `true` for overdue tasks
                        };

                        try {
                            const result = await updateOverdueAPI(task.id, updatedData);
                            updatedTasks.push(result);
                        } catch (err) {
                            console.error(`Failed to update task with id: ${task.id}`, err);
                        }
                    }
                }
            }

            setResTask(updatedTasks); // Update state with all results
            console.log("Overdue tasks updated:", updatedTasks);
        } catch (err) {
            console.error("Error updating overdue tasks:", err);
        }
    };


    ////////////////////getOverdueTasks
    const getOverdueTasks = async (id) => {
        setLoading(true); // Start loading
        try {
            const result = await getOverdueTasksAPI(id);
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
        }finally {
            setLoading(false); // Stop loading
          }
    };
    //////////////////////////////////////////Filter

    

    // Filtered tasks based on selected filter
    const filteredTasks = allTask?.filter((task) =>
        filter === "All" || task.priority === filter
    );

     // Media query to detect small screens
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    

    return (
        <>
            {loading ? ( // Show loader while loading is true
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                      }}
                    >
                      <CircularProgress size={80} style={{marginTop:-400}}/>
                    </Box>
                  ) :
            (
            <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography gutterBottom variant={isMobile ? 'h4' : 'h3'} component="div">
                        {board?.title}
                    </Typography>
                    <Box >
                        
                        <ButtonGroup  size="small" variant="outlined" aria-label="Basic button group">
                            <Button
                            color={filter === "All" ? "primary" : "default"}
                            onClick={() => setFilter("All")}
                            >
                            All
                        </Button>
                            <Button
                                color={filter === "High" ? "error" : "default"}
                                onClick={() => setFilter("High")}
                            >
                                High
                            </Button>
                            <Button
                                color={filter === "Medium" ? "warning" : "default"}
                                onClick={() => setFilter("Medium")}
                            >
                                Medium
                            </Button>
                            <Button
                                color={filter === "Low" ? "success" : "default"}
                                onClick={() => setFilter("Low")}
                            >
                                Low
                            </Button>
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
                        filteredTasks?.length > 0 &&
                        filteredTasks?.map(tasks => (
                            <Grid key={tasks.id} xs={12} sm={6} md={4}>
                                <TaskCard boardId={param.id} taskData={tasks} setResTask={setResTask} />
                            </Grid>
                        ))
    
                    }
    
    
                    <Grid xs={12} sm={6} md={4}>
                        <AddCard onClick={handleOpenModal} />
                    </Grid>
                </Grid>
            </>
            )}



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