import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';




export default function EFT(){
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" align="center" variant="h4">Our Banking Details</Typography>
                        <Typography color="textSecondary" align="center" variant="h6">Bank: slkdgjsld</Typography>
                        <Typography color="textSecondary" align="center" variant="h6">Branch code: 12340329</Typography>
                        <Typography color="textSecondary" align="center" variant="h6">Account type: lkjhasdkf</Typography>
                        <Typography color="textSecondary" align="center" variant="h6">Account number: 0897982772342</Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Mandate />
                    </Grid> */}
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}