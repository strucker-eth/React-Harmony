// NewsCard.js for Harmony AI App
import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const HarmonyCard = ({ service: { title, description, image }, i }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
      <Button size="small" color="primary">Learn More</Button>
    </Card>
  );
};

export default HarmonyCard;
