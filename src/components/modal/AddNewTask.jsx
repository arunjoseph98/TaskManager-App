import React, { useEffect, useState } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';

import { addTaskAPI, editTaskAPI } from '../../services/allAPI'
import dayjs from 'dayjs';

const AddNewTask = ({ open, handleClose, setResTask, boardId, taskData, isEdit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isComplete,setIsComplete]=useState(false);
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState(null);
    const [date, setDate] = useState(null);

    const [taskDetails, setTaskDetails] = useState({
        title: "",
        boardId: '',
        description: "",
        isComplete:false,
        priority: "",
        dueDate: null,
        date: null,
    })
    // console.log('isEdit :',isEdit);
    
    useEffect(() => {
        if (isEdit) {
            setTitle(taskData.title)
            setDescription(taskData.description)
            setIsComplete(taskData.isComplete)
            setPriority(taskData.priority);
            setDueDate(taskData.dueDate);
            setDate(dayjs(taskData.date));
            // console.log(isComplete);
            
        }
    }, [taskData])


    const dateFormat = (newValue) => {
        if (newValue) {
            const date = {
                day: newValue.date(),
                month: newValue.month() + 1,
                year: newValue.year(),
            };
            setDate(newValue)
            setDueDate(date);
            
        }

    };

    const handleSubmit = () => {
        
        
        const updatedTaskDetails = {
            ...taskDetails,
            id: isEdit ? taskData.id : undefined,
            boardId,
            title,
            description,
            isComplete,
            priority,
            dueDate,
            date,
        };
        
        // Update state
        setTaskDetails(updatedTaskDetails);

        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate(null);
        setDate(null);

        if (isEdit) {
            handleUpdateTask(updatedTaskDetails);
        } else {
            handleCreateTask(updatedTaskDetails);
        }
    };

    const boxClose = () => {
        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate(null);
        handleClose();
    };

    const handleCreateTask = async (TaskDetails) => {
        try {
            console.log(TaskDetails);
            const result = await addTaskAPI(TaskDetails);
            if (result.status >= 200 && result.status < 300) {
                setResTask(result)
            }

        } catch (error) {
            console.error('Error creating task:', error);
        } finally {
            handleClose();
        }
    }

    const handleUpdateTask = async (TaskDetails) => {
        try {
            console.log('Updating task');
            const result = await editTaskAPI(TaskDetails);
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                setResTask(result)
            }
        } catch (error) {
            console.error('Error updating task:', error);
        } finally {
            handleClose();
        }
    };


    return (
        <>

            <Dialog
                open={open}
                onClose={boxClose}
                maxWidth="sm"
                fullWidth
                sx={{
                    px: 2,
                }}
            >
                <DialogTitle>{isEdit ? 'Edit Task' : 'Create New Task'}</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            mt: 1,
                        }}
                    >
                        {/* Board Title Field */}
                        <TextField
                            label="Task Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {/* Description Field */}
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2,
                                mt: 1,
                            }}>
                            {/* Priority Dropdown */}
                            <TextField
                                label="Priority"
                                variant="outlined"
                                fullWidth
                                select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <MenuItem value="High">High</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Low">Low</MenuItem>
                            </TextField>

                            {/* Due Date Picker */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Due Date"
                                    value={date}
                                    onChange={dateFormat}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={boxClose} color="secondary">
                        Cancel
                    </Button>
                    {isEdit ? <Button
                        onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                    >
                        OK
                    </Button>
                        :
                        <Button
                            onClick={handleSubmit}
                            color="primary"
                            variant="contained"
                            disabled={!title.trim()} // Disable button if title is empty
                        >
                            Create
                        </Button>}
                </DialogActions>
            </Dialog>

        </>
    )
}

export default AddNewTask

