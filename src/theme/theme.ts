import { createTheme, alpha } from '@mui/material/styles';

// Extend the theme to include custom tokens
declare module '@mui/material/styles' {
  interface Palette {
    pending: Palette['primary'];
  }
  interface PaletteOptions {
    pending?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0F172A',
          light: '#334155',
          dark: '#020617',
        },
        secondary: {
          main: '#6366F1',
        },
        success: {
          main: '#10B981',
        },
        warning: {
          main: '#F59E0B',
        },
        error: {
          main: '#EF4444',
        },
        pending: {
          main: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          contrastText: '#fff',
        },
        background: {
          default: '#F8FAFC',
          paper: '#FFFFFF',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#F8FAFC',
          light: '#F1F5F9',
          dark: '#CBD5E1',
        },
        secondary: {
          main: '#818CF8',
        },
        background: {
          default: '#020617',
          paper: '#0F172A',
        },
        pending: {
          main: '#A78BFA',
          light: '#C4B5FD',
          dark: '#8B5CF6',
          contrastText: '#fff',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
        }),
      },
    },
  },
});

export default theme;
