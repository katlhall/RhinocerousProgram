import React from 'react';
import { Container, Typography, Box, Card, useTheme } from '@mui/material';
import Hotspot from '../img/SponsorLogos/HotSpot.png';
import Monarch from '../img/SponsorLogos/Monarch.png';
import STUSU from '../img/SponsorLogos/STUSU.png';
import PNT from '../img/SponsorLogos/PNT.png';
import Wellness from '../img/SponsorLogos/Wellness.jpg';
import Isaacs from '../img/SponsorLogos/Isaacs.jpg';
import PNTAd from '../img/SponsorLogos/PNTAd.png';
import WellnessAd from '../img/SponsorLogos/WellnessAd.png'

const Sponsors = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm">
            <Card sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                <Box
                    textAlign="center"
                    sx={{
                        my: 2,
                        ...theme.customStyles['fullStripe'],
                    }}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            lineHeight: 1,
                            color: 'text.secondary',
                        }}
                    >
                        OUR SPONSORS
                    </Typography>
                </Box>
                <img src={Hotspot} alt="Hotspot" />
                <img src={Monarch} alt="Monarch" />
                <img src={STUSU} alt="STUSU" />
                <img src={PNT} alt="PNT" />
                <img src={Wellness} alt="Wellness" />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2, 
                        width: '100%',
                    }}
                >
                    <Box
                        component="img"
                        src={Isaacs}
                        alt="Isaacs"
                        sx={{
                            width: '50%',
                            objectFit: 'contain',
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            flex: 1,
                        }}
                    >
                        Happily serving our community one plate at a time
                    </Typography>
                </Box>
                <img src={WellnessAd} alt="Wellness" />
                <img src={PNTAd} alt="Pleasures N Treasures" />
            </Card>
        </Container>
    );
};

export default Sponsors;
