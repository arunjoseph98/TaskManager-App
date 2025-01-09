import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { Container, IconButton } from '@mui/material';

import { FiLogOut } from "react-icons/fi";


const ViewHead = () => {

    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            backgroundColor: '#abcd',
            // padding: '20px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            // marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },

        logoutbtn: {
            // marginRight: '20px',
            // padding: '20px',
        },
      
    };


    return (
        <Box  sx={headerStyles.wrapper} >
            <Box sx={headerStyles.topRow}>
                <IconButton
                    color="white"
                    sx={headerStyles.logoutbtn}
                >
                    <FiLogOut />
                </IconButton>
            </Box>

        </Box>

    )
}

export default ViewHead