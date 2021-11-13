import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { picture, fee, name, about } = props.service;
    return (

        <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="180"

                        image={picture}
                        alt="Paella dish"
                    />
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {fee}
                    </Typography>
                    <Typography variant="body2">
                        {about}

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Purchase</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;