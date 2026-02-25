import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h1" sx={{ fontWeight: 900, fontSize: '8rem', color: 'action.disabled', mb: 0 }}>404</Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Page Not Found</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button 
        variant="contained" 
        startIcon={<Home size={18} />} 
        onClick={() => navigate('/')}
        sx={{ px: 4, py: 1.5, borderRadius: 10 }}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default NotFound;
