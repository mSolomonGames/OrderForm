import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';

import { makeStyles, withStyles, createMuiTheme, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(stuff => ({
    grid:{
        display: 'flex',
    }

}));

export default function IndividualDetails(){
    const classes = useStyles();

    
    return (
        <React.Fragment>
            <Paper>            
                <Grid className={classes.grid} container xs={10} spacing={0} justify="center">
                    {/* <Grid item xs={12}>
                        <Typography align="center" variant="h2">Client Details</Typography>
                    </Grid> */}
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Surname" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>

                    <Grid item xs={6}>
                    <TextField id="outlined-basic" label="SA ID Number" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </Grid>

                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Postal Code" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Tel" variant="outlined" />
                    </Grid>

                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Cell" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Referred By" variant="outlined" />
                    </Grid>

                </Grid>
            </Paper>
        </React.Fragment>      
    )
}