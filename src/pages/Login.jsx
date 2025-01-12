import React from 'react';
import { Box, Typography, Button, Container, Card, CardContent, AppBar, Toolbar, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/taskboard logo.png';
import backgroundImg from '../assets/hero.png';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: 3,
      }}
    >
      {/* Header Section with Transparent Background */}
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'start' }}>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <img src={logo} alt="Task Board Logo" style={{ height: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'start', marginBottom: 15, marginTop: 5 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 2, color: 'black' }}>
          Welcome to TaskBoard
        </Typography>
        <Typography variant="h6" sx={{ color: 'black', marginBottom: 3 }}>
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

      {/* Features Section - Centered */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', marginBottom: 5 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            { title: 'Create Boards', description: 'Create boards to organize and track tasks in one place.' },
            { title: 'Create Tasks', description: 'Add tasks with descriptions and deadlines to stay on track.' },
            { title: 'Prioritize Tasks', description: 'Prioritize tasks to boost productivity.' },
          ].map((feature, index) => (
            <Grid  xs={12} sm={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
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
