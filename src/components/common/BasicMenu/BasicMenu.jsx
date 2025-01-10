import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({ anchorEl, handleClose, open,handleOpenDeleteModal,handleOpenAddModal }) => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenAddModal}>Edit</MenuItem>
        <MenuItem onClick={handleOpenDeleteModal}>Delete</MenuItem>
      </Menu>
 
    )
}

export default BasicMenu