import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText, Switch } from '@mui/material';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Configure your portal preferences and account settings.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 0 }}>
              <List>
                <ListItem sx={{ p: 3 }}>
                  <ListItemText 
                    primary="Email Notifications" 
                    secondary="Receive updates about your account activity via email." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  <Switch defaultChecked />
                </ListItem>
                <Divider />
                <ListItem sx={{ p: 3 }}>
                  <ListItemText 
                    primary="Public Profile" 
                    secondary="Allow others to see your profile information." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  <Switch />
                </ListItem>
                <Divider />
                <ListItem sx={{ p: 3 }}>
                  <ListItemText 
                    primary="Two-Factor Authentication" 
                    secondary="Add an extra layer of security to your account." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  <Switch defaultChecked />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ bgcolor: 'action.hover', border: 'none' }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <SettingsIcon size={32} style={{ marginBottom: 16, opacity: 0.5 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>System Status</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>All systems are operational.</Typography>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, bgcolor: 'success.main', color: 'white', borderRadius: 10, fontSize: '0.75rem', fontWeight: 700 }}>
                Operational
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
