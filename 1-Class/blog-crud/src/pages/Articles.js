import React from 'react';
import AppBar from '../components/AppBar';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import articles from '../data/articles';


const Articles = () => {

    const cards = articles;

    return (
        <>
            <AppBar title="Articles" />        
            <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4} sx={{ ml: 0 }}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia 
                                        component="img"
                                        sx={{ pt: '50%', height: '50%' }}
                                        image={card.mainImage}
                                        alt="random"
                                        title={card.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           {card.title} 
                                        </Typography>
                                        <Typography align="left">
                                            {card.shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>    
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
        </>
    );
};

export default Articles;