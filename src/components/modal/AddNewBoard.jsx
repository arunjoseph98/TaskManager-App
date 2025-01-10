import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';


const AddNewBoard = ({ open, handleClose, handleCreate,isEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        handleCreate({ title, description });
        setTitle('');
        setDescription('');
        handleClose();
    };

    const boxClose = () => {
        setTitle('');
        setDescription('');
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
                    px:2,
                }}
            >
                <DialogTitle>Create New Board</DialogTitle>
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