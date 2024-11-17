import React from 'react';
import { Container, Box } from '@mui/material';
import CastList from './CastList';
import DirectorNote from './DirectorNote';
import Bios from './Bios';
import Sponsors from './Sponsors';
import SpecialThanks from './SpecialThanks';
import { ReactComponent as Logo } from '../img/SmugglersLogo.svg';

const Program = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <CastList />
            <DirectorNote />
            <Bios />
            <Sponsors />
            <SpecialThanks />
            <Box
                sx={{
                    my: 2,
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (theme) => theme.palette.primary.main,
                    borderRadius: '50%',
                    '& svg': {
                        width: '100%',
                        height: '100%',
                        fill: (theme) => theme.palette.text.secondary,
                    },
                }}
            >
                <Logo />
            </Box>
        </Container>
    );
};

export default Program;
