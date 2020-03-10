import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import './App.css';
import Logo from "./img/Logo.png"

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, MenuItem, InputLabel, CardMedia, CardActionArea, Card, CardContent } from '@material-ui/core/';

import CompanyDetails from './components/CompanyDetails';
import IndividualDetails from './components/IndividualDetails';
import WirelessPackages from './components/WirelessPackages';
import FibrePackages from './components/FibrePackages';
import EFT from './components/EFT';
import Debit from './components/Debit';

const useStyles = makeStyles(theme => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 150,

   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
   root: {
      flexGrow: 1,
      background: 'lightblue',
      backgroundSize: 'cover',
      display: 'flex',
   },
   panelContainer: {
      background: 'lightgrey',
      //padding: '50px',
   },
   formContainer: {
      background: 'white',
      margin: "auto",
      //padding: '50px',
   },
   bannerContent: {
      flex: '1 0 auto',
   },
   bannerRoot: {
      display: 'flex'
   },
   bannerDetails: {
      display: 'flex',
      flexDirection: 'column',
   },
   bannerCover: {
      width: 600,
   },

}))

export default function App() {

   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);

   const classes = useStyles();

   const [company, setCompany] = React.useState('');
   const [connection, setConnection] = React.useState('');
   const [payment, setPayment] = React.useState('');
   const [paymentDate, setPaymentDate] = React.useState('');


   const handleChangeClientType = event => {
      //console.log(event.target.value);
      setCompany(event.target.value);
   };
   const handleChangeConnType = event => {
      //console.log(event.target.value);
      setConnection(event.target.value);
   };
   const handleChangePayType = event => {
      //console.log(event.target.value);
      setPayment(event.target.value);
   };
   const handleChangePayDate = event => {
      //console.log(event.target.value);
      setPaymentDate(event.target.value);
   };
   const inputLabel = React.useRef(null);
   return (
      <Grid container className={classes.root} justify="center" spacing={0}>
         <Grid item xs={10} >
            <FormGroup >
               <Typography component="div">
                  <Grid component="label" justify="center" container spacing={1}>
                     <Grid item xs={12}>
                        <Card className={classes.bannerRoot}>
                           <CardActionArea>
                              <div className={classes.bannerDetails}>
                                 <CardContent className={classes.bannerContent}>
                                    {/* <Typography component="h5" variant="h5">Rudolf Pretorius</Typography> */}
                                    <Typography variant="subtitle1" color="textSecondary">Email: sales@crispfibre.co.za</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">Crisp Fibre (Pty) Ltd</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">Office: 010 534 8416</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">Mobile: 082 677 9158</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">Web: www.crispfibre.co.za</Typography>

                                 </CardContent>
                                 <CardMedia
                                    className={classes.bannerCover}
                                    component="img"
                                    alt="Crisp Fibre Logo"
                                    //height="140"
                                    image={Logo}
                                    title="Crisp Fibre"
                                 />
                              </div>
                           </CardActionArea>
                           {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                        </Card>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper>
                           <Typography align='center' component="h3" variant="h3">FTTH Order Form </Typography>
                        </Paper>
                     </Grid>

                     <Grid item xs={12}>
                        <Paper>

                           <Grid container justify='flex-end' spacing={0}>
                              <Grid item xs={6}>
                                 <Typography style={{ paddingLeft: '0px' }} align='left' component="h3" variant="h3">Client Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                       Client Type
                              </InputLabel>
                                    <Select
                                       labelId="demo-simple-select-outlined-label"
                                       id="demo-simple-select-outlined"
                                       value={company}
                                       onChange={handleChangeClientType}
                                    //labelWidth={labelWidth}
                                    >
                                       <MenuItem value="">
                                          <em>None</em>
                                       </MenuItem>
                                       <MenuItem value="individual">Individual</MenuItem>
                                       <MenuItem value="company">Business</MenuItem>
                                    </Select>
                                 </FormControl>
                              </Grid>
                              <Grid item xs={12} >
                                 {company === 'individual' ? <IndividualDetails /> : (company === 'company' ? <CompanyDetails /> : <div></div>)}
                              </Grid>

                           </Grid>
                        </Paper>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper>
                           <Grid container spacing={0} justify='flex-end'>
                              <Grid item xs={6}>
                                 <Typography align='left' component="h3" variant="h3">Connection Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                       Connection Type
                                    </InputLabel>
                                    <Select
                                       labelId="demo-simple-select-outlined-label"
                                       id="demo-simple-select-outlined"
                                       value={connection}
                                       onChange={handleChangeConnType}
                                    //labelWidth={labelWidth}
                                    >
                                       <MenuItem value="">
                                          <em>None</em>
                                       </MenuItem>
                                       <MenuItem value="fibre">Fibre</MenuItem>
                                       <MenuItem value="wireless">Wireless</MenuItem>
                                    </Select>
                                 </FormControl>
                              </Grid>
                              <Grid item xs={12} >
                                 {connection === 'fibre' ? <FibrePackages type={company} /> : (connection === 'wireless' ? <WirelessPackages type={company} /> : <div></div>)}
                              </Grid>
                           </Grid>
                        </Paper>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper>
                           <Grid container justify="flex-end">
                              <Grid item xs={6}>
                              <Typography align='right' component="h3" variant="h3">Payment Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                       Payment Date
                                    </InputLabel>
                                    <Select
                                       labelId="demo-simple-select-outlined-label"
                                       id="demo-simple-select-outlined"
                                       value={paymentDate}
                                       onChange={handleChangePayDate}
                                    //labelWidth={labelWidth}
                                    >
                                       <MenuItem value="">
                                          <em>None</em>
                                       </MenuItem>
                                       <MenuItem value="1st">1st of the Month</MenuItem>
                                       <MenuItem value="15th">15th of the Month</MenuItem>
                                       <MenuItem value="31st">31st of the Month</MenuItem>
                                    </Select>
                                 </FormControl>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                       Payment Type
                                    </InputLabel>
                                    <Select
                                       labelId="demo-simple-select-outlined-label"
                                       id="demo-simple-select-outlined"
                                       value={payment}
                                       onChange={handleChangePayType}
                                    //labelWidth={labelWidth}
                                    >
                                       <MenuItem value="">
                                          <em>None</em>
                                       </MenuItem>
                                       <MenuItem value="eft">EFT</MenuItem>
                                       <MenuItem value="debit">Debit</MenuItem>
                                    </Select>
                                 </FormControl>
                              </Grid>
                              <Grid item xs={12} >
                                 {payment === 'eft' ? <EFT /> : (payment === 'debit' ? <Debit /> :  <div></div>)  }
                              </Grid>
                              
                           </Grid>
                           
                        </Paper>
                     </Grid>

                     <Grid item >

                     </Grid>
                     {/* <Grid item xs={12} >
                  {company === 'individual' ? <Typography align="center" variant="h1">Individual</Typography> : (company === 'company' ? <Typography align="center" variant="h1">Business</Typography> :  <Typography align="center" variant="h4">None Selected</Typography>)  }
                  </Grid> */}




                     

                  </Grid>

               </Typography>
            </FormGroup>
         </Grid>
         <Grid item xs={10} >
            <Typography component="div">

            </Typography>

         </Grid>
         {/* </FormControl> */}
      </Grid>
   );

}


