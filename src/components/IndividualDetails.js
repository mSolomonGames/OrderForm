import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';

export default function IndividualDetails(){
    return (
        <React.Fragment>
            <Paper>            
                <Grid container spacing={0}>
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