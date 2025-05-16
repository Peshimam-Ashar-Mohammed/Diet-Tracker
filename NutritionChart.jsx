import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Box, Typography, Paper, useMediaQuery } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const NutritionChart = ({ calories, protein, carbs, fats }) => {
  const data = [
    { name: 'Protein', value: protein * 4 }, // 4 calories per gram of protein
    { name: 'Carbs', value: carbs * 4 },     // 4 calories per gram of carbs
    { name: 'Fats', value: fats * 9 }        // 9 calories per gram of fat
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Paper elevation={3} sx={{ p: 4, width: '100%', mx: 'auto', mt: 4, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <RestaurantIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
        <Typography variant="h4" component="h2">
          Daily Nutrition Breakdown
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <Box sx={{ width: isMobile ? '100%' : 340, minWidth: 240, minHeight: 300, height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} kcal`, 'Calories']}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ 
          p: 3, 
          backgroundColor: 'rgba(26, 35, 126, 0.05)',
          borderRadius: 2,
          minWidth: 200,
          width: isMobile ? '100%' : 260,
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: isMobile ? 'center' : 'flex-start',
          mt: isMobile ? 4 : 0
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
            Daily Targets
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
              {calories} kcal
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Protein: {protein}g ({protein * 4} kcal)
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Carbohydrates: {carbs}g ({carbs * 4} kcal)
            </Typography>
            <Typography>
              Fats: {fats}g ({fats * 9} kcal)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default NutritionChart; 