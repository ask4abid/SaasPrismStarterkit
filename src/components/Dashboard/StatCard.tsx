import React from 'react';
import { Card, CardContent, Typography, Box, alpha, useTheme } from '@mui/material';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart } from '@mui/x-charts/LineChart';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  data: number[];
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'pending';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, data, color = 'primary' }) => {
  const theme = useTheme();
  const isPositive = change >= 0;
  
  // Get color from theme palette
  const mainColor = (theme.palette as any)[color]?.main || theme.palette.primary.main;

  return (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {value}
          </Typography>
          <Box 
            sx={{ 
              ml: 1.5, 
              display: 'flex', 
              alignItems: 'center', 
              color: isPositive ? 'success.main' : 'error.main',
              bgcolor: alpha(isPositive ? theme.palette.success.main : theme.palette.error.main, 0.1),
              px: 1,
              py: 0.25,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 700
            }}
          >
            {isPositive ? <TrendingUp size={14} style={{ marginRight: 4 }} /> : <TrendingDown size={14} style={{ marginRight: 4 }} />}
            {Math.abs(change)}%
          </Box>
        </Box>
        
        <Box sx={{ height: 60, mt: 2, mx: -2 }}>
          <LineChart
            series={[
              {
                data: data,
                area: true,
                color: mainColor,
                showMark: false,
              },
            ]}
            height={60}
            margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
            xAxis={[{ data: Array.from({ length: data.length }, (_, i) => i) }]}
            sx={{
              '.MuiAreaElement-root': {
                fill: `url(#gradient-${title.replace(/\s+/g, '')})`,
                opacity: 0.2,
              },
              '.MuiLineElement-root': {
                strokeWidth: 2,
              }
            }}
          >
            <defs>
              <linearGradient id={`gradient-${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={mainColor} stopOpacity={0.5} />
                <stop offset="100%" stopColor={mainColor} stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
