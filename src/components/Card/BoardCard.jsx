import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';

import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import { cardStyle } from './cardStyle';
import { Link, useNavigate } from 'react-router-dom';

const BoardCard = () => {
  let navigate = useNavigate();
  return (
    <Card sx={cardStyle.card} onClick={() => {navigate("/1/view");}}>
      
        <CardHeader
          title={
            <Typography gutterBottom variant="h6" component="div">
            Board Title
          </Typography>
          }
          action={
            <IconButton aria-label="settings">
              <PiDotsThreeOutlineVertical />
            </IconButton>
          }
          
        />
        
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        
      
      
    </Card>
  )
}

export default BoardCard