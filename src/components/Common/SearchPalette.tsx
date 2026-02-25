import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Search, Command, LayoutDashboard, Users, Settings, CreditCard, FileText } from 'lucide-react';

interface SearchPaletteProps {
  open: boolean;
  onClose: () => void;
}

const SearchPalette: React.FC<SearchPaletteProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (open) onClose();
        else {
          // Trigger search open logic if needed
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const suggestions = [
    { title: 'Dashboard', category: 'Pages', icon: <LayoutDashboard size={18} />, path: '/' },
    { title: 'Customers', category: 'Pages', icon: <Users size={18} />, path: '/customers' },
    { title: 'Transactions', category: 'Pages', icon: <CreditCard size={18} />, path: '/transactions' },
    { title: 'Billing', category: 'Pages', icon: <CreditCard size={18} />, path: '/billing' },
    { title: 'Settings', category: 'Pages', icon: <Settings size={18} />, path: '/settings' },
    { title: 'Analytics', category: 'Pages', icon: <FileText size={18} />, path: '/analytics' },
    { title: 'Help Center', category: 'Support', icon: <FileText size={18} />, path: '/help' },
  ];

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: '15vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          overflow: 'hidden',
          outline: 'none',
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <TextField
            fullWidth
            autoFocus
            placeholder="Search for pages, documents, or settings..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1, py: 0.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>ESC</Typography>
                  </Box>
                </InputAdornment>
              ),
              sx: { fontSize: '1.1rem', py: 1 }
            }}
          />
        </Box>
        
        <Box sx={{ maxHeight: 400, overflowY: 'auto', p: 1 }}>
          <Typography variant="caption" sx={{ px: 2, py: 1, display: 'block', color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>
            Quick Actions
          </Typography>
          <List>
            {suggestions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton 
                  sx={{ borderRadius: 2, mx: 1 }}
                  onClick={() => handleSelect(item.path)}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title} 
                    secondary={item.category}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                  <Command size={14} style={{ opacity: 0.3 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        
        <Divider />
        <Box sx={{ p: 2, bgcolor: 'action.hover', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ px: 0.5, py: 0.25, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 0.5, fontSize: '0.65rem' }}>↵</Box>
              <Typography variant="caption">Select</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ px: 0.5, py: 0.25, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 0.5, fontSize: '0.65rem' }}>↑↓</Box>
              <Typography variant="caption">Navigate</Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Search powered by SaaS Portal
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchPalette;
