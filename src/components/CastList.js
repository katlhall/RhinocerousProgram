import React from 'react';
import { Container, Typography, Box, Card, useTheme } from '@mui/material';
import data from '../assets/CastList.json';

const capitalize = (str) => str.toUpperCase();

const CastList = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm">
            <Card sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                <Box>
                    <Box
                        textAlign="center"
                        sx={{
                            my: 2,
                            ...theme.customStyles['rightStripe']
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
                            CAST
                        </Typography>
                    </Box>
                    {Object.entries(data.Cast).map(([role, actor], index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                backgroundColor: index % 2 === 0 ? 'background.paper' : 'grey.200', // Alternating colors
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {capitalize(role)}
                            </Typography>
                            <Typography variant="body1">{capitalize(actor)}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Box
                        textAlign="center"
                        sx={{
                            my: 2,
                            ...theme.customStyles['leftStripe']
                        }}
                    >
                        <Typography variant="h4" textAlign="center" sx={{
                            position: 'relative',
                            zIndex: 2,
                            lineHeight: 1,
                            color: 'text.secondary'
                        }}>
                            CREW
                        </Typography>
                    </Box>
                    {Object.entries(data.Crew).map(([role, member], index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                backgroundColor: index % 2 === 0 ? 'background.paper' : 'grey.200', // Alternating colors
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                {capitalize(role)}
                            </Typography>
                            <Typography variant="body1">{capitalize(member)}</Typography>
                        </Box>
                    ))}
                </Box>
            </Card>
        </Container>
    );
};

export default CastList;
