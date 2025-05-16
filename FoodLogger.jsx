import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FoodLogger = ({ onUpdateNutrition }) => {
  const [foods, setFoods] = useState([]);
  const [currentFood, setCurrentFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentFood(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddFood = () => {
    if (currentFood.name && currentFood.calories) {
      setFoods(prev => [...prev, currentFood]);
      onUpdateNutrition({
        calories: Number(currentFood.calories),
        protein: Number(currentFood.protein),
        carbs: Number(currentFood.carbs),
        fats: Number(currentFood.fats)
      });
      setCurrentFood({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fats: ''
      });
    }
  };

  const handleDeleteFood = (index) => {
    const deletedFood = foods[index];
    setFoods(prev => prev.filter((_, i) => i !== index));
    onUpdateNutrition({
      calories: -Number(deletedFood.calories),
      protein: -Number(deletedFood.protein),
      carbs: -Number(deletedFood.carbs),
      fats: -Number(deletedFood.fats)
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Food Logger
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Food Name"
          name="name"
          value={currentFood.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Calories"
          name="calories"
          type="number"
          value={currentFood.calories}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Protein (g)"
          name="protein"
          type="number"
          value={currentFood.protein}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Carbs (g)"
          name="carbs"
          type="number"
          value={currentFood.carbs}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Fats (g)"
          name="fats"
          type="number"
          value={currentFood.fats}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddFood}
          sx={{ mt: 2 }}
        >
          Add Food
        </Button>
      </Box>

      <List sx={{ mt: 2 }}>
        {foods.map((food, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemText
                primary={food.name}
                secondary={`${food.calories} kcal | P: ${food.protein}g | C: ${food.carbs}g | F: ${food.fats}g`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleDeleteFood(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Paper>
  );
};

export default FoodLogger; 