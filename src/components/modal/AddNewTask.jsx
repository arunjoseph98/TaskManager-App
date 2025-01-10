import React, { useState } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';

const AddNewTask = ({ open, handleClose, handleCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState(null);
    const [date,setDate] = useState(null);

    
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
        handleCreate({ title, description, priority, dueDate });
        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate(null);
        handleClose();
    };

    const boxClose = () => {
        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate(null);
        handleClose();
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
                <DialogTitle>Create New Task</DialogTitle>
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
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                        disabled={!title.trim()} // Disable button if title is empty
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default AddNewTask

