import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Users } from 'lucide-react';

const Customers: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Customers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your customer relationships and data.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Card sx={{ minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderWidth: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Users size={48} style={{ marginBottom: 16, opacity: 0.2 }} />
              <Typography variant="h6" color="text.secondary">Customer Management Placeholder</Typography>
              <Typography variant="body2" color="text.secondary">Customer list and CRM tools will appear here.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customers;
