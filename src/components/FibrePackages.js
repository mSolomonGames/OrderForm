import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';
import IndivFibre from './IndivFibre';
import CompanyFibre from './CompanyFibre';

export default function FibrePackages(props){
    const variable = props.type;
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2">Fibre Packages</Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        {variable === 'individual' ? <Typography align="center" variant="h2">Individual</Typography> : <Typography align="center" variant="h2">Business</Typography>}
                    </Grid> */}
                    <Grid item xs={12}>
                    {variable === 'individual' ? <IndivFibre /> : (variable === 'company' ? <CompanyFibre /> : <div></div>)}
                    </Grid>

                </Grid>
            </Paper>
        </React.Fragment>
    )
}