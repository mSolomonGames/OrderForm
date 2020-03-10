import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';
import IndivFibre from './IndivFibre';
import CompanyFibre from './CompanyFibre';

export default function Debit(){
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} >
                        <Typography align="center" variant="h2">Debit</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container justify="center">
                            <Grid item xs ={12}>
                            <Typography align="center" variant="h4">Bank Debit Order Instruction / Credit Card Authority</Typography>

                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="Name(Debtor)" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={3}>
                                <TextField id="outlined-basic" label="Abbreviated Name as Registered With Bank" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={3}>
                                <TextField id="outlined-multiline-static" multiline label="Address" variant="outlined" rows="2"/>
                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="City" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="Postal Code" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="Contact Number" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="Debit Amount: Autofill" variant="outlined"/>
                            </Grid>
                            <Grid item xs ={2}>
                                <TextField id="outlined-basic" label="Contact Number" variant="outlined"/>
                            </Grid>
                        
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Typography align="center" variant="h4">Bank Details</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Bank" variant="outlined"/>
                            </Grid>

                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Branch Code" variant="outlined"/>
                            </Grid>

                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Account Name" variant="outlined"/>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Account Number" variant="outlined"/>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField id="outlined-basic" label="Account Type" variant="outlined"/>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}