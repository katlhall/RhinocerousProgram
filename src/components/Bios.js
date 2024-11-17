import React from 'react';
import { Container, Typography, Box, Card, useTheme } from '@mui/material';
import data from '../assets/Bios.json';

const capitalize = (str) => str.toUpperCase();

const Bios = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm" sx={{ p: 2 }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                <Box
                    textAlign="center"
                    sx={{
                        my: 2,
                        ...theme.customStyles['fullStripe']
                    }}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            lineHeight: 1,
                            color: 'text.secondary'
                        }}
                    >
                        BIOS
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {Object.entries(data).map(([name, details], index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Box
                                textAlign={index % 2 === 0 ? 'left' : 'right'}
                                sx={theme.customStyles[index % 2 === 0 ? 'leftStripe' : 'rightStripe']}
                            >
                                <Typography variant="body2" sx={{ fontWeight: 'bold', position: 'relative', zIndex: 2 }}>
                                    {capitalize(name)}{' '}
                                    {details.pronouns && (
                                        <Typography
                                            component="span"
                                            variant="body1"
                                            sx={{ fontWeight: 'normal', color: 'text.secondary' }}
                                        >
                                            {details.pronouns}
                                        </Typography>
                                    )}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ textAlign: index % 2 === 0 ? 'left' : 'right' }} dangerouslySetInnerHTML={{ __html: details.bio }} />
                        </Box>
                    ))}
                </Box>
            </Card>
        </Container>
    );
};

export default Bios;
