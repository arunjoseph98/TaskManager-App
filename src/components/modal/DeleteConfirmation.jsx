import React from 'react';
import { IoWarningOutline } from "react-icons/io5";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
} from '@mui/material';

const DeleteConfirmation = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-confirmation-title"
      aria-describedby="delete-confirmation-description"
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
        <IconButton
          color="error"
          size="large"
          disableRipple
          sx={{ fontSize: 60 }}
          aria-label="delete icon"
        >
          <IoWarningOutline />
        </IconButton>
        <DialogContentText id="delete-confirmation-description" align="center">
          Are you sure you want to delete this item? <br />This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmation;
