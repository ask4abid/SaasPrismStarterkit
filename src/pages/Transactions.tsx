import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { CreditCard } from 'lucide-react';

const Transactions: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Transactions
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor your financial activity and payment history.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Card sx={{ minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', borderWidth: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CreditCard size={48} style={{ marginBottom: 16, opacity: 0.2 }} />
              <Typography variant="h6" color="text.secondary">Transaction History Placeholder</Typography>
              <Typography variant="body2" color="text.secondary">Detailed payment logs and invoices will appear here.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Transactions;
