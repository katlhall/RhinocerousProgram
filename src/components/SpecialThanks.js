import React from 'react';
import { Container, Typography, Box, Card, useTheme } from '@mui/material';

const SpecialThanks = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm">
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    alignItems: 'center',
                }}
            >
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
                        SPECIAL THANKS
                    </Typography>
                </Box>
                <Typography>
                    Brennan Garnett
                </Typography>
                <Typography>
                    Debbie Degrasse
                </Typography>
                <Typography>
                    Andrew and Brenda McAllister
                </Typography>
                <Typography>
                    Theatre New Brunswick
                </Typography>
                <Typography>
                    Jilly Hanson
                </Typography>
            </Card>
        </Container>
    );
};

export default SpecialThanks;
