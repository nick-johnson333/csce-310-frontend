import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import logo from './logo.png';

const useStyles = makeStyles({
    image: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const HeaderBar = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={4} justify='center' padding={5} style={{ paddingTop: 20, paddingBottom:20 }} >

            <Grid item>
                <img src={logo} width="100" height="50" className={classes.image} />
            </Grid>

            <Grid item>
                <Typography variant="h3">Kicker's Almanac</Typography> 
            </Grid>

        </Grid>
    );
}

export default HeaderBar;