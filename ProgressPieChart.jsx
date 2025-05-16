import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ProgressPieChart = ({ target, consumed }) => {
  // Calculate percentage for each macro
  const data = [
    {
      name: 'Protein',
      value: Math.min((consumed.protein / target.protein) * 100, 100),
    },
    {
      name: 'Carbs',
      value: Math.min((consumed.carbs / target.carbs) * 100, 100),
    },
    {
      name: 'Fats',
      value: Math.min((consumed.fats / target.fats) * 100, 100),
    },
  ];

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 6, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Daily Macro Progress
      </Typography>
      <Box sx={{ height: 300 }}>
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
              label={({ name, value }) => `${name}: ${Math.round(value)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${Math.round(value)}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography>Protein: {consumed.protein}g / {target.protein}g</Typography>
        <Typography>Carbs: {consumed.carbs}g / {target.carbs}g</Typography>
        <Typography>Fats: {consumed.fats}g / {target.fats}g</Typography>
      </Box>
    </Paper>
  );
};

export default ProgressPieChart; 