import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { cardStyle } from './cardStyle';

import { PiDotsThreeOutlineVertical } from "react-icons/pi";

const TaskCard = () => {
  return (
    <Card sx={cardStyle.card}>
      {/* Card Header */}
      <CardHeader
        title={
          <Typography variant="h6" component="div">
            Card Title
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <PiDotsThreeOutlineVertical />
          </IconButton>
        }
      />

      {/* Card Content */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is some additional information or description for the card. It could be detailed content about the task or item represented by the card.
        </Typography>
      </CardContent>

      {/* Card Footer with Checkbox */}
      <CardActions
        sx={{
          justifyContent: 'space-between',
          padding: '8px 16px',
        }}
      >
        <Typography variant="caption" color="text.secondary">
        Due <br />dd-mm-yyyy
        </Typography>
        <Checkbox color="primary" />
      </CardActions>
    </Card>
  );
};

export default TaskCard;
