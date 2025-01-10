import React from 'react';
import { Box, Typography, Button, Grid, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import TaskIcon from '@mui/icons-material/Task';

import logo from '../assets/taskboard logo.png'

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
        padding: 3,
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', marginBottom: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Welcome to Task Board
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: 3 }}>
          Simplify your workflow, organize tasks, and boost productivity with Task Board.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/taskboards')}
          sx={{ paddingX: 5, paddingY: 1.5 }}
        >
          Get Started
        </Button>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {[
            { title: 'Create Tasks', description: 'Add and organize your tasks effortlessly.' },
            { title: 'Track Progress', description: 'Monitor your work in real-time.' },
            { title: 'Collaborate', description: 'Work with your team efficiently.' },
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  {/* <TaskIcon sx={{ fontSize: 40, color: 'primary.main', marginBottom: 2 }} /> */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;

