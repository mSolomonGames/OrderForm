import React from 'react';
import { Paper, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4)
    },
    contactDetails: {
        "& div": {
            alignText: "right", 
            marginLeft: 'auto'
        }
    },
    logo: {
        maxHeight: "100px"
    }
}))

export default () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item md={6}>
                    <img className={classes.logo} src="./Logo.png" alt="Logo" />
                </Grid>
                <Grid item md={6}>
                    <Grid container direction="column" className={classes.contactDetails}>
                        <Grid item >
                            REG #2018/608674/07
                        </Grid>
                        <Grid item>
                            Tel: 010 534 8416
                        </Grid>
                        <Grid item>
                            Email: sales@crispfibre.co.za
                        </Grid>
                        <Grid item>
                            Website: www.crispfibre.co.za
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}