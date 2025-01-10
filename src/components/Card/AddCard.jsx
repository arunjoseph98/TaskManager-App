import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { RiAddLargeFill } from "react-icons/ri";
import { cardStyle } from './cardStyle';

const AddCard = ({ onClick }) => {
  return (
    <Card onClick={onClick} sx={cardStyle.addCard}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '4rem', // Adjust the size of the "+" symbol
            color: '#3f51b5', // Adjust color
            fontWeight: 'bold',
          }}
        >
          <RiAddLargeFill />
        </Box>
      </CardContent>
    </Card>
  )
}

export default AddCard