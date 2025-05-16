import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#23272a', boxShadow: '0 2px 8px rgba(67,160,71,0.15)' }}>
      <Toolbar>
        <FitnessCenterIcon sx={{ mr: 2, color: '#43a047' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          DietTracker Pro
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit">Progress</Button>
          <Button color="inherit" component={RouterLink} to="/meal-plans">Meal Plans</Button>
          <Button color="inherit">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 