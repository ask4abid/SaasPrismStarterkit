import React from 'react';
import { Grid, Typography, Box, Card, CardContent, Chip, useTheme } from '@mui/material';
import StatCard from '../components/Dashboard/StatCard';
import DataGridWrapper from '../components/Common/DataGridWrapper';
import { LineChart } from '@mui/x-charts/LineChart';
import { GridColDef } from '@mui/x-data-grid';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const stats = [
    { title: 'Total Revenue', value: '$128,430', change: 12.5, data: [30, 45, 35, 50, 40, 60, 55], color: 'primary' as const },
    { title: 'Active Users', value: '2,420', change: 8.2, data: [20, 30, 25, 40, 35, 45, 50], color: 'secondary' as const },
    { title: 'New Subscriptions', value: '145', change: -3.1, data: [60, 50, 55, 45, 40, 35, 30], color: 'success' as const },
    { title: 'Pending Invoices', value: '12', change: 4.5, data: [10, 15, 12, 18, 14, 20, 16], color: 'pending' as const },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'customer', headerName: 'Customer', width: 200, renderCell: (params) => (
      <Box sx={{ fontWeight: 600 }}>{params.value}</Box>
    )},
    { field: 'amount', headerName: 'Amount', width: 130, renderCell: (params) => (
      <Box sx={{ fontWeight: 700 }}>${params.value}</Box>
    )},
    { field: 'status', headerName: 'Status', width: 130, renderCell: (params) => {
      const status = params.value as string;
      let color: any = 'default';
      if (status === 'Completed') color = 'success';
      if (status === 'Pending') color = 'warning';
      if (status === 'Failed') color = 'error';
      return <Chip label={status} color={color} size="small" variant="outlined" sx={{ fontWeight: 600 }} />;
    }},
    { field: 'date', headerName: 'Date', width: 160 },
  ];

  const rows = [
    { id: 1, customer: 'John Smith', amount: 1200, status: 'Completed', date: '2024-02-24' },
    { id: 2, customer: 'Sarah Connor', amount: 450, status: 'Pending', date: '2024-02-23' },
    { id: 3, customer: 'Michael Scott', amount: 890, status: 'Completed', date: '2024-02-22' },
    { id: 4, customer: 'Dwight Schrute', amount: 150, status: 'Failed', date: '2024-02-21' },
    { id: 5, customer: 'Pam Beesly', amount: 670, status: 'Completed', date: '2024-02-20' },
  ];

  const chartData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Welcome back, Jane
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your projects today.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Revenue Growth</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label="Monthly" size="small" color="primary" />
                  <Chip label="Yearly" size="small" variant="outlined" />
                </Box>
              </Box>
              <Box sx={{ height: 350, width: '100%' }}>
                <LineChart
                  xAxis={[{ data: xLabels, scaleType: 'point' }]}
                  series={[
                    {
                      data: chartData,
                      area: true,
                      color: theme.palette.secondary.main,
                    },
                  ]}
                  height={350}
                  margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
                  sx={{
                    '.MuiAreaElement-root': {
                      fill: `url(#revenue-gradient)`,
                      opacity: 0.1,
                    },
                  }}
                >
                  <defs>
                    <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={theme.palette.secondary.main} stopOpacity={0.5} />
                      <stop offset="100%" stopColor={theme.palette.secondary.main} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </LineChart>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Recent Transactions</Typography>
              <DataGridWrapper rows={rows} columns={columns} pageSize={5} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
