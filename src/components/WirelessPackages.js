import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';
import IndivWireless from "./IndivWireless";
import CompanyWireless from "./CompanyWireless";


export default function WirelessPackages(props){
    const type = props.type;
    return (
        <React.Fragment>
        <Paper>            
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h2">Wireless Packages</Typography>
                </Grid>
                <Grid item xs={12}>
                    {type === 'individual' ? <IndivWireless /> : ( type === 'company' ? <CompanyWireless /> : <div></div>) }
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
    )
}