import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Divider } from '@mui/material';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          User Profile
        </Typography>
        <Typography variant="body1" color="text.secondary">
          View and manage your personal information.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Avatar sx={{ width: 120, height: 120, mx: 'auto', mb: 3, bgcolor: 'secondary.main', fontSize: '3rem' }}>JD</Avatar>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Jane Doe</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Administrator</Typography>
              <Button variant="outlined" fullWidth>Change Avatar</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Personal Details</Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Mail size={20} style={{ opacity: 0.5 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Email Address</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>jane.doe@example.com</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <MapPin size={20} style={{ opacity: 0.5 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Location</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>San Francisco, CA</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Calendar size={20} style={{ opacity: 0.5 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Joined Date</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>January 12, 2024</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ my: 4 }} />
              <Button variant="contained" color="primary">Edit Profile</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
