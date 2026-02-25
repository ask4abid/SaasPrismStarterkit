import React from 'react';
import { Box, Typography, Card, CardContent, Grid, TextField, InputAdornment, Button } from '@mui/material';
import { HelpCircle, Search, Book, MessageCircle, Phone } from 'lucide-react';

const HelpCenter: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Help Center
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Find answers to your questions and get support.
        </Typography>
      </Box>

      <Card sx={{ mb: 4, bgcolor: 'primary.main', color: 'white' }}>
        <CardContent sx={{ p: 6, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>How can we help you?</Typography>
          <TextField 
            fullWidth 
            placeholder="Search for articles, guides, and more..." 
            sx={{ 
              maxWidth: 600, 
              bgcolor: 'white', 
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              )
            }}
          />
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {[
          { title: 'Documentation', icon: <Book size={32} />, desc: 'Read our detailed guides and API references.' },
          { title: 'Community Forum', icon: <MessageCircle size={32} />, desc: 'Join the discussion with other users.' },
          { title: 'Contact Support', icon: <Phone size={32} />, desc: 'Get in touch with our dedicated support team.' }
        ].map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ color: 'secondary.main', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{item.desc}</Typography>
                <Button variant="outlined">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HelpCenter;
