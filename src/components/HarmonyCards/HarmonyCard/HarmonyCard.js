import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

const HarmonyCard = ({ service: { title, description, image }, i }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
        <img src={image} alt={title} className={classes.image} />
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default HarmonyCard;
