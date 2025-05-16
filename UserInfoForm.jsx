import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FlagIcon from '@mui/icons-material/Flag';

const UserInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    goal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto', mt: 4, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Personal Information
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3} columns={12}>
          <Grid span={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid span={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid span={6}>
            <FormControl fullWidth variant="outlined" sx={{ minWidth: 180 }}>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid span={6}>
            <TextField
              fullWidth
              label="Height (cm)"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid span={6}>
            <TextField
              fullWidth
              label="Weight (kg)"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid span={6}>
            <FormControl fullWidth variant="outlined" sx={{ minWidth: 180 }}>
              <InputLabel>Activity Level</InputLabel>
              <Select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                label="Activity Level"
                required
              >
                <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
                <MenuItem value="light">Lightly active (light exercise 1-3 days/week)</MenuItem>
                <MenuItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</MenuItem>
                <MenuItem value="very">Very active (hard exercise 6-7 days/week)</MenuItem>
                <MenuItem value="extra">Extra active (very hard exercise & physical job)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid span={12}>
            <FormControl fullWidth variant="outlined" sx={{ minWidth: 180 }}>
              <InputLabel>Goal</InputLabel>
              <Select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                label="Goal"
                required
              >
                <MenuItem value="lose">Lose Weight</MenuItem>
                <MenuItem value="maintain">Maintain Weight</MenuItem>
                <MenuItem value="gain">Gain Weight</MenuItem>
                <MenuItem value="muscle">Build Muscle</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ mt: 4, py: 1.5 }}
        >
          Calculate Calories
        </Button>
      </Box>
    </Paper>
  );
};

export default UserInfoForm; 