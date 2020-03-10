import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormControlLabel, Checkbox, FormGroup, Switch, TextField} from '@material-ui/core/';
import IndivFibre from './IndivFibre';
import CompanyFibre from './CompanyFibre';

export default function TCs(){
    const [accepted, setAccepted] = React.useState(false);
    const handleChange = event => {
        setAccepted(event.target.checked);
    };
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12}>
                        <Typography align="center" variant="h4">Terms and Conditions</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Grid item xs ={10}>
                            <Typography align="center" variant="body1">All Fibre and accounts are area specific, might not be available in all areas. Please note: It is the Clients'
                                responsibility to cancel or terminate any existing agreements with their current ISP to avoid duplicate
                                INTERNET cost. We will manage bandwidth usage to the best of our ability during peak periods; however, it
                                remains a best effort service. Termination of account is a calendar month.</Typography>
                            </Grid>
                            <Grid item xs ={10}>
                            <Typography align="center" variant="body1">Please note that cancellations received after the 3rd of the month will only be processed in the following
                                month which will end at the end of the following month. All accounts are pre-paid. Business accounts has a
                                SLA of 6 hours where Home users have a SLA of 8-12 hours. Cancellations within contract period is subject
                                to pay difference within contract months left.</Typography>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={4}>
                        
                        <FormControlLabel align="center"
                            control={
                            <Checkbox
                                checked={accepted}
                                onChange={handleChange}
                                value="accepted"
                                color="primary"
                                required={true}                                 
                            />
                            }
                            label="I agree to the Terms & conditions"
                        />
                    </Grid>
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}