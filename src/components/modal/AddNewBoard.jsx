import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { addTaskBoardAPI, editBoardAPI } from '../../services/allAPI'


const AddNewBoard = ({ open, handleClose, setResBoard, boardData, isEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        if (isEdit) {
            setTitle(boardData.title)
            setDescription(boardData.description)
            
        }
    }, [boardData])

    const [boardDetails, setBoardDetails] = useState({
        title: "",
        description: "",
    })

    const handleSubmit = () => {
        const updatedBoardDetails = {
            ...boardDetails,
            id: isEdit ? boardData.id : undefined,
            title,
            description,
        };

        // Update state
        setBoardDetails(updatedBoardDetails);

        // Reset input fields
        setTitle('');
        setDescription('');

        // Call the appropriate handler
        if (isEdit) {
            handleUpdateBoard(updatedBoardDetails);
        } else {
            handleCreateBoard(updatedBoardDetails);
        }

    };

    const handleCreateBoard = async (boardDetails) => {
        try {

            const result = await addTaskBoardAPI(boardDetails);
            if (result.status >= 200 && result.status < 300) {
                setResBoard(result)
            }

        } catch (error) {
            console.error('Error creating board:', error);
        } finally {
            handleClose();
        }
    };

    const handleUpdateBoard = async (boardDetails) => {
        try {
            console.log('Updating board');
            const result = await editBoardAPI(boardDetails);
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                setResBoard(result)
            }
        } catch (error) {
            console.error('Error updating board:', error);
        } finally {
            handleClose();
        }
    };

    const boxClose = () => {
        if(!isEdit)
        {setTitle('');
        setDescription('');}
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
                <DialogTitle>{isEdit ? 'Edit Board' : 'Create New Board'}</DialogTitle>
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
                            label="Board Title"
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

export default AddNewBoard