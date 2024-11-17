import React from 'react';
import { Container, Typography, Box, Card, useTheme } from '@mui/material';

const note = [
    "This is a production that has been two years in the making. When Jason and I sat down to choose Smugglers' first production, it was between another of Eugene Ionesco’s plays called “Exit the King” and our eventual choice “The Baltimore Waltz.” We were sitting at a table at The Coffee Mill on Prospect Street and I said to Jason “I think if I am going to direct an Ionesco play I’d rather direct Rhinoceros,” and that settled it. I knew Rhinoceros was a bucket-list play for Jason as an actor, and The Baltimore Waltz was my bucket-list play as a director. Jason's hand shot across the table and we had selected our first two productions for Smugglers Theatre.",
    "Rhinoceros was written by Eugene Ionesco following the second World War and it reflected upon his experience living in Romania and France and seeing his friends and neighbors become Nazi supporters. While this play does not ever explicitly discuss the destructive nature of fascism, it captures quite beautifully the feeling of seeing your friends and loved ones slowly become part of a destructive movement - in the case of this play it's the rhinoceros. Ionesco, much like our lonely Berenger, chose to do the brave thing and resist the tide, and this play stands testament to that.",
    "Spending the past four months of my life dedicated to this production and this play, while the world around me feels like it’s on the brink of another dark chapter of human history, has given me time to reflect. While I think this play can sometimes feel like its ending is pretty bleak, and the fate of the world is certainly left open to interpretation, I think the fact this play exists at all should be a beacon of hope. This play could not have existed at all if Allied forces didn’t fight off the Axis powers. They, much like our dear Berenger, did not capitulate, and this play was created in a time after Nazi rule in Germany. There was a time after the war where this kind of art could thrive. It implies that there will be a light after the dark. We will not capitulate, and this time shall pass.",
    "This production, for me, also feels like a culmination of 3 years of theatre. I moved back to Fredericton in 2021. In that time I have met many extremely talented artists whose work have moved and inspired me to be a better artist. It made me so happy to be able to give so many of those same artists roles in this play, and it has been an absolute joy to come to rehearsal every night. This is a very special cast, and I am so excited for you to see them do their thing."
]

const DirectorNote = () => {
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
                        DIRECTOR'S NOTE
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {note.map((paragraph, index) => (
                        <Typography key={index} variant="body1">
                            {paragraph}
                        </Typography>
                    ))}
                </Box>
            </Card>
        </Container>
    );
};

export default DirectorNote;
