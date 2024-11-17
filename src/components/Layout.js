import React from 'react';
import { Box } from '@mui/material';
import { Header, Program } from './index';
import RhinoFront from '../img/RhinoFront.png';
import RhinoRear from '../img/RhinoRear.png';

const Layout = () => {
    return (
        <>
            <Header />
            <Box
                sx={{
                    position: 'relative',
                    minHeight: '100%',
                    overflow: 'auto',
                    paddingBottom: '100px',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 0,
                    }}
                >
                    <img src={RhinoRear} alt="Rhinoceros Rear" />
                </Box>
                <Program />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 0
                    }}
                >
                    <img src={RhinoFront} alt="Rhinoceros Front" />
                </Box>
            </Box>
        </>
    );
};

export default Layout;
