import { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import UserInfoForm from './components/UserInfoForm';
import NutritionChart from './components/NutritionChart';
import FoodLogger from './components/FoodLogger';
import Navigation from './components/Navigation';
import ProgressPieChart from './components/ProgressPieChart';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#43a047', // green
    },
    secondary: {
      main: '#00bcd4', // cyan
    },
    background: {
      default: '#181c1f',
      paper: '#23272a',
    },
    text: {
      primary: '#fff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [nutrition, setNutrition] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0
  });
  const [loggedMacros, setLoggedMacros] = useState({
    protein: 0,
    carbs: 0,
    fats: 0
  });

  const calculateCalories = (userData) => {
    // Mifflin-St Jeor Equation for BMR
    let bmr;
    if (userData.gender === 'male') {
      bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5;
    } else {
      bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161;
    }

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9
    };

    let tdee = bmr * activityMultipliers[userData.activityLevel];

    // Adjust based on goal
    if (userData.goal === 'lose') {
      tdee -= 500; // 500 calorie deficit
    } else if (userData.goal === 'gain') {
      tdee += 500; // 500 calorie surplus
    } else if (userData.goal === 'muscle') {
      tdee += 250; // 250 calorie surplus for muscle building
    }

    // Calculate macronutrient distribution
    let protein;
    if (userData.goal === 'muscle') {
      protein = Math.round(userData.weight * 2.4); // 2.4g per kg for muscle building
    } else {
      protein = Math.round(userData.weight * 2.2); // 2.2g per kg otherwise
    }
    const fats = Math.round((tdee * 0.25) / 9); // 25% of calories from fat
    const carbs = Math.round((tdee - (protein * 4 + fats * 9)) / 4); // Remaining calories from carbs

    setUserInfo(userData);
    setNutrition({
      calories: Math.round(tdee),
      protein,
      carbs,
      fats
    });
    setLoggedMacros({ protein: 0, carbs: 0, fats: 0 }); // Reset logged macros on new calculation
  };

  const handleUpdateNutrition = (update) => {
    setLoggedMacros(prev => ({
      protein: Math.max(prev.protein + (update.protein || 0), 0),
      carbs: Math.max(prev.carbs + (update.carbs || 0), 0),
      fats: Math.max(prev.fats + (update.fats || 0), 0)
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(90deg, #23272a 0%, #181c1f 100%)',
          color: 'white',
          py: 8,
          mb: 4,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Healthy food"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            zIndex: 0,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Track Your Nutrition Journey
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }} align="center">
            Calculate your daily needs and track your progress
          </Typography>
        </Container>
      </Box>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
          <UserInfoForm onSubmit={calculateCalories} />
        </Box>
        {userInfo && (
          <>
            <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
              <NutritionChart {...nutrition} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
              <ProgressPieChart target={nutrition} consumed={loggedMacros} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
              <FoodLogger onUpdateNutrition={handleUpdateNutrition} />
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;