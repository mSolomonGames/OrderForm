import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';
import IndivFibre from './IndivFibre';
import CompanyFibre from './CompanyFibre';

export default function Debit(){
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2">Debit</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4">Payment details</Typography>
                    </Grid>
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}