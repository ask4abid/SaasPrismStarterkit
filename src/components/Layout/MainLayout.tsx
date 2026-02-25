import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
  Tooltip,
  alpha
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft,
  LayoutDashboard,
  Users,
  Settings,
  CreditCard,
  BarChart3,
  Search,
  Bell,
  LogOut,
  User,
  HelpCircle,
  Sun,
  Moon
} from 'lucide-react';
import { useColorScheme } from '@mui/material/styles';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import SearchPalette from '../Common/SearchPalette';

const drawerWidth = 260;
const collapsedWidth = 88;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const { mode, setMode } = useColorScheme();

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { text: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
    { text: 'Customers', icon: <Users size={20} />, path: '/customers' },
    { text: 'Transactions', icon: <CreditCard size={20} />, path: '/transactions' },
    { text: 'Billing', icon: <CreditCard size={20} />, path: '/billing' },
    { text: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link 
          component={RouterLink} 
          underline="hover" 
          color="inherit" 
          to="/" 
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <LayoutDashboard size={16} style={{ marginRight: 8 }} />
          Home
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.charAt(0).toUpperCase() + value.slice(1);

          return last ? (
            <Typography color="text.primary" key={to}>
              {label}
            </Typography>
          ) : (
            <Link component={RouterLink} underline="hover" color="inherit" to={to} key={to}>
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };

  const sidebarContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ px: [2, 3], display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center' }}>
        {open && (
          <Typography 
            variant="h6" 
            sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: -0.5, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            SAAS<Box component="span" sx={{ color: 'secondary.main' }}>PRISM</Box>
          </Typography>
        )}
        <IconButton onClick={handleDrawerToggle} size="small">
          {open ? <ChevronLeft size={20} /> : <MenuIcon size={20} />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
              <Tooltip title={!open ? item.text : ''} placement="right">
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    borderRadius: 2,
                    bgcolor: isActive ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
                    color: isActive ? 'secondary.main' : 'text.secondary',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.secondary.main, 0.05),
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: isActive ? 'secondary.main' : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: isActive ? 600 : 500 }} />}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Tooltip title={!open ? 'Help Center' : ''} placement="right">
            <ListItemButton
              onClick={() => navigate('/help')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: 2,
                bgcolor: location.pathname === '/help' ? alpha(theme.palette.secondary.main, 0.1) : 'transparent',
                color: location.pathname === '/help' ? 'secondary.main' : 'text.secondary',
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: location.pathname === '/help' ? 'secondary.main' : 'inherit' }}>
                <HelpCircle size={20} />
              </ListItemIcon>
              {open && <ListItemText primary="Help Center" />}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)` },
          ml: { md: `${open ? drawerWidth : collapsedWidth}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon size={20} />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton 
              sx={{ bgcolor: 'action.hover', borderRadius: 2, mr: 2 }} 
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
            </IconButton>
            <Typography variant="body2" sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }}>
              Press <Box component="kbd" sx={{ px: 1, py: 0.5, bgcolor: 'action.hover', borderRadius: 1, fontSize: '0.75rem' }}>⌘K</Box> to search
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={toggleMode} size="small">
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
            <IconButton size="small">
              <Bell size={20} />
            </IconButton>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 24, my: 'auto' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleProfileMenuOpen}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main', fontSize: '0.875rem' }}>JD</Avatar>
              <Box sx={{ ml: 1.5, display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>Jane Doe</Typography>
                <Typography variant="caption" color="text.secondary">Administrator</Typography>
              </Box>
            </Box>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: { mt: 1.5, minWidth: 200, borderRadius: 2, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }
            }}
          >
            <MenuItem onClick={() => { handleProfileMenuClose(); navigate('/profile'); }}>
              <ListItemIcon><User size={18} /></ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={() => { handleProfileMenuClose(); navigate('/settings'); }}>
              <ListItemIcon><Settings size={18} /></ListItemIcon>
              Account Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleProfileMenuClose} sx={{ color: 'error.main' }}>
              <ListItemIcon><LogOut size={18} color={theme.palette.error.main} /></ListItemIcon>
              Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 4 }, pt: { xs: 10, sm: 12 }, width: '100%' }}>
        {getBreadcrumbs()}
        {children}
      </Box>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </Box>
  );
};

export default MainLayout;
