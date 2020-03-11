import React from 'react';
import {Grid, Divider,Paper, Typography, Select, FormControl, FormGroup, Switch, TextField} from '@material-ui/core/';


export default function Mandate(){
    
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0} justify="center">
                    <Grid item xs={10}>
                        <Typography align="center" color="textSecondary" variant="h4">Accept this as digital signature (tick box + fields)</Typography>
                        <Typography align="center" color="textSecondary" variant="body1">This signed Authority and Mandate refers to our contract dated (“the Agreement”).
                            I/We hereby authorise you to issue and deliver payment instructions to your Banker for collection against my/our abovementioned
                            account at my/our above-mentioned Bank (or any other bank or branch to which I/we may transfer my/our account)
                            on condition that the sum of such payment instructions will never exceed my/our obligations as agreed to in the Agreement and
                            commencing on_________ and continuing until this Authority and Mandate is terminated by me/us by giving you notice in
                            writing of not less than 20 ordinary working days, and sent by prepaid registered post or delivered to your address as indicated
                            above.<Divider />
                            The individual payment instructions so authorised to be issued must be issued and delivered as follows: monthly. In the event
                            that the payment day falls on a Sunday, or recognised South African public holiday, the payment day will automatically be the
                            preceding ordinary business day.<Divider />
                            I / We understand that the withdrawals hereby authorized will be processed through a computerized system provided by the
                            South African Banks and I also understand that details of each withdrawal will be printed on my bank statement. Each
                            transaction will contain a number, which must be included in the said payment instruction and if provided to you should enable
                            you to identify the Agreement. A payment reference is added to this form before the issuing of any payment instruction.<Divider />
                            Mandate<Divider />
                            I/We acknowledge that all payment instructions issued by you shall be treated by my/our above-mentioned Bank as if the
                            instructions have been issued by me/us personally.<Divider />
                            Cancellation<Divider />
                            I/We agree that although this Authority and Mandate may be cancelled by me/us, such cancellation will not cancel the
                            Agreement. I/We shall not be entitled to any refund of amounts which you have withdrawn while this Authority was in force, if
                            such amounts were legally owing to you. <Divider />
                            Assignment <Divider />
                            I/We acknowledge that this Authority may be ceded or assigned to a third party if the Agreement is also ceded or assigned to
                            that third party, but in the absence of such assignment of the Agreement, this Authority and Mandate cannot be assigned to any
                            third party.</Typography>
                            
                        
                    </Grid>
                    <Grid item xs={12}>
                        
                    </Grid>
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}




