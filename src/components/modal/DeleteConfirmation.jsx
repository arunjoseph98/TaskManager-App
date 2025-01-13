import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';

const DeleteConfirmation = ({ open, handleClose, handleDelete }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-confirmation-title"
      aria-describedby="delete-confirmation-description"
      maxWidth="xs" // Ensure the dialog is not too wide
      fullWidth // Enable responsiveness for smaller screens
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          pt: 4,
        }}
      >
        {/* Warning Icon */}
        <IconButton
          color="error"
          size="large"
          disableRipple
          sx={isMobile ? { fontSize: 50} : { fontSize: 60}}
          aria-label="delete icon"
        >
          <IoWarningOutline />
        </IconButton>

        {/* Confirmation Text */}
        <DialogContentText
          id="delete-confirmation-description"
          align="center"
          sx={isMobile ? { fontSize: 14, color: 'text.secondary' } : { fontSize: 16, color: 'text.secondary' }}

        >
          Are you sure you want to delete this item? <br />
          
        </DialogContentText>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button
          onClick={handleClose}
          color="secondary"
          variant="outlined"
          sx={{ minWidth: 100 }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="error"
          variant="contained"
          sx={{ minWidth: 100 }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmation;
