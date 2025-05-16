import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const recipes = [
  {
    title: 'Grilled Chicken Salad',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    description: 'High-protein salad with grilled chicken, greens, and vinaigrette.'
  },
  {
    title: 'Oats & Berries Bowl',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: 'Oats, berries, and nuts for a balanced breakfast.'
  },
  {
    title: 'Salmon & Quinoa',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    description: 'Omega-3 rich salmon with quinoa and veggies.'
  },
  {
    title: 'Egg White Omelette',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    description: 'Low-fat, high-protein omelette with veggies.'
  },
  {
    title: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1504674900247-ec6b0b4781e4?auto=format&fit=crop&w=400&q=80',
    description: 'Greek yogurt, granola, and fruit for a healthy snack.'
  },
  {
    title: 'Tofu Stir Fry',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: 'Plant-based protein with colorful veggies.'
  }
];

const MealPlans = () => (
  <Box sx={{ py: 6, px: 2, maxWidth: 1100, mx: 'auto' }}>
    <Typography variant="h3" align="center" gutterBottom>
      Meal Plans & Recipes
    </Typography>
    <Typography variant="h6" align="center" sx={{ mb: 4 }}>
      Explore healthy recipes to support your goals
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {recipes.map((recipe, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="180"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>{recipe.title}</Typography>
              <Typography variant="body2" color="text.secondary">{recipe.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MealPlans; 