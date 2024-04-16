// NewsCards.js for Harmony AI App
import React from 'react';
import { Grid, Grow } from '@material-ui/core';

import HarmonyCard from './HarmonyCard/HarmonyCard.js';
import useStyles from './styles.js';


const HarmonyCards = ({ services }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {services.map((service, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <HarmonyCard i={i} service={service} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default HarmonyCards;
