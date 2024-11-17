import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCDE00',
    },
    secondary: {
      main: '#374900',
    },
    background: {
      default: '#E2E4DF',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#374900',
    },
  },
  typography: {
    fontFamily: 'Russo One, Fjalla One, Space Grotesk',
    h1: {
        fontFamily: 'Russo One',
        fontWeight: 400,
        fontSize: '2.5rem'
    },
    h4: {
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        fontSize: '2rem'
    },
    subtitle1: {
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        fontSize: '1.2rem',
    },
    body1: {
        fontFamily: 'Fjalla One',
        fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Fjalla One',
      fontSize: '1.25rem',
  },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'sm',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '10px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          borderTop: '2px solid #374900',
          borderBottom: '2px solid #374900'
        },
      },
    },
  },
  customStyles: {
    rightStripe: {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        right: 0,
        width: '75%',
        height: '10px',
        backgroundColor: (theme) => theme.palette.primary.main,
        transform: 'translateY(-50%)',
        zIndex: 1,
      },
    },
    leftStripe: {
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '75%',
        height: '10px',
        backgroundColor: (theme) => theme.palette.primary.main,
        transform: 'translateY(-50%)',
        zIndex: 1,
      },
    },
    fullStripe: {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '10px',
          backgroundColor: (theme) => theme.palette.primary.main,
          transform: 'translateY(-50%)',
          zIndex: 1,
        },
      },
  },
});

export default theme;