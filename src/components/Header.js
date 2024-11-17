import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      textAlign="center"
      sx={{
        position: 'relative',
        padding: '25px 0',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '35px',
          backgroundColor: 'primary.main',
          transform: 'translateY(-50%)',
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h1"
        color="text.secondary"
        sx={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '4px',
          lineHeight: 1,
        }}
      >
        RHINOCEROS
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          position: 'relative',
          zIndex: 2,
          marginTop: '0',
          lineHeight: 1.2,
        }}
      >
        PRESENTED BY SMUGGLERS THEATER
      </Typography>
    </Box>
  );
};

export default Header;
