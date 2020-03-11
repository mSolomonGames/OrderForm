import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import './App.css';
import Logo from "./img/Logo.png";

// import darkBaseTheme from '@material-ui/core/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from '@material-ui/core/styles/getMuiTheme';

import { makeStyles, withStyles, createMuiTheme, withTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, MenuItem, InputLabel, CardMedia, CardActionArea, Card, CardContent , List, MuiThemeProvider, ThemeProvider} from '@material-ui/core/';

import CompanyDetails from './components/CompanyDetails';
import IndividualDetails from './components/IndividualDetails';
import WirelessPackages from './components/WirelessPackages';
import FibrePackages from './components/FibrePackages';
import EFT from './components/EFT';
import Debit from './components/Debit';
import Mandate from "./components/Mandate";
import TCs from "./components/TCs";
import InstallationPackages from "./components/InstallationPackages";

const theme = createMuiTheme({
   palette: {
     primary: {
        type: 'dark',
       // light: will be calculated from palette.primary.main,
       main: '#0A4B72',
       // dark: will be calculated from palette.primary.main,
       // contrastText: will be calculated to contrast with palette.primary.main
     },
     secondary: {
       //light: '#0066ff',
       main: '#4FBA08',
       // dark: will be calculated from palette.secondary.main,
       contrastText: '#ffcc00',
     },
     text: {
         primary: '#fff',
         secondary: '#000',
     },
     // Used by `getContrastText()` to maximize the contrast between
     // the background and the text.
     contrastThreshold: 3,
     // Used by the functions below to shift a color's luminance by approximately
     // two indexes within its tonal palette.
     // E.g., shift from Red 500 to Red 300 or Red 700.
     tonalOffset: 0.2,

     background :{
      //   paper: 'secondary.main',
      //   default: '#000',
     }
     
   },
   typography:{

   }
   ,
   overrides : {
      MuiCardMedia: {
         root: {
            //background: 'pink',
            
         },
         media: {
            //background: 'pink',
            width: 'auto',
         },
         img:{
            //background: 'pink',
         }
      },
      MuiCardActionArea:{
         root:{
            //display: 'flex-inline',
            //justifyContent: 'space-evenly',
         },
         media:{
            //alignSelf: 'flex-start',
         }
      },
      // MuiSelect: {
      //    root: {
      //       backgroundColor: 'primary',
      //    },
      //    select: {
      //       backgroundColor: 'primary',
      //    },
      //    selectMenu: {
      //       backgroundColor: 'none',
      //    },
         
         
      // },
      // MuiPaper:{
      //    root:{
      //       backgroundColor: 'grey',
      //    }
      // }
      
   }
 });

// const muiTheme = getMuiTheme(darkBaseTheme);

const useStyles = makeStyles(stuff => ({
   formControl: {
      // margin: theme.spacing(1),
      // minWidth: 150,

   },
   selectEmpty: {
      // marginTop: theme.spacing(2),
   },
   root: {
         background: theme.palette.primary.light,
         color: 'white',
      // flexGrow: 1,
      // background: 'black',
      // backgroundSize: 'cover',
      // display: 'flex',
   },
   panelContainer: {
      // background: 'lightgrey',
      //padding: '50px',
   },
   formContainer: {
      // background: 'white',
      // margin: "auto",
      //padding: '50px',
   },
   bannerContent: {
      flex: '1 0 auto',
      //alignSelf: 'flex-end',
      
   },
   bannerRoot: {
      //display: 'flex',
      
   },
   bannerDetails: {
     display: 'flex',
      flexDirection: 'row',
      width: '100%',
   },
   bannerCover: {
      //width: 600,
      //justifyContent: 'space-between',
      //justifyContent: 'right',
   },
   headingPanel: {
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
      minHeight: '70px',
      alignItems: 'center',
      justifyContent: 'center',
   },
   dropDowns:{
      background: theme.palette.primary.light,
      //minWidth: 120,
      display: 'flex',
      justifyContent: 'space-around',
      marginRight: '20px',
      color: 'secondary',
   },
   dropDownInner:{
      background: theme.palette.primary.light,
      //minWidth: 120,
      color: 'secondary',
      
   }
   

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
      <ThemeProvider theme={theme}>
      <Grid container className={classes.root} justify="center" spacing={0}>
         <Grid item xs={10} >
            <FormGroup >
               {/* //<Typography component="div"> */}
                  <Grid component="label" justify="center" container spacing={0}>
                     <Grid item xs={12}>
                        <Card className={classes.bannerRoot}>
                           <div className={classes.details}>
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
                                    height="180"
                                    image={Logo}
                                    title="Crisp Fibre"
                                 />
                              </div>
                           </CardActionArea>
                           </div>
                           {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                        </Card>
                     </Grid>
                     <Grid item xs={12} >
                        <Paper className={classes.headingPanel}>
                           <Typography align='center' component="h3" variant="h3">FTTH Order Form </Typography>
                        </Paper>
                     </Grid>

                     <Grid item xs={12}>
                        <Paper className={classes.headingPanel}>

                           <Grid container justify='flex-end' spacing={0}>
                              <Grid item xs={6}>
                                 <Typography style={{ paddingLeft: '0px' }} align='left' component="h3" variant="h3">Client Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl  variant="filled" className={classes.dropDowns}>
                                    <InputLabel ref={inputLabel} id="demo-simple-select-filled-label">
                                       Client Type
                                    </InputLabel>
                                    <Select
                                       className={classes.dropDownInner}
                                       labelId="demo-simple-select-filled-label"
                                       id="demo-simple-select-filled"
                                       value={company}
                                       onChange={handleChangeClientType}
                                       color={theme.palette.secondary.main}
                                       
                                       
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
                              <Grid style={{display: "flex"}}item xs={12} >
                                 {company === 'individual' ? <IndividualDetails /> : (company === 'company' ? <CompanyDetails /> : <div></div>)}
                              </Grid>

                           </Grid>
                        </Paper>
                     </Grid>
                     <Grid item xs={12}>
                        <Paper className={classes.headingPanel}>
                           <Grid container spacing={0} justify='flex-end'>
                              <Grid item xs={6}>
                                 <Typography align='left' component="h3" variant="h3">Connection Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.dropDowns}>
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
                        <Grid container spacing={0}>
                           <Grid item xs={12}>
                              <Paper className={classes.headingPanel}>
                              <Typography align="center" color="textPrimary" variant="h3">Installation Packages</Typography>
                              </Paper>
                           </Grid>
                           <Grid item xs={12}>
                              <InstallationPackages />
                           </Grid>
                        </Grid>
                        

                     </Grid>
                     <Grid item xs={12}>
                        <Paper className={classes.headingPanel}>
                           <Grid container justify="flex-end">
                              <Grid item xs={6}>
                              <Typography align='right' color="textPrimary" component="h3" variant="h3">Payment Details </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                 <FormControl variant="outlined" className={classes.dropDowns}>
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
                                 <FormControl variant="outlined" className={classes.dropDowns}>
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
                              <Grid item xs={12}>
                                 {paymentDate === '' ? <div></div> : <Mandate />}
                                 
                              </Grid>
                              <Grid item xs={12}>
                                 <TCs />
                                 
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

               {/* </Typography> */}
            </FormGroup>
         </Grid>
         <Grid item xs={10} >
            <Typography component="div">

            </Typography>

         </Grid>
         {/* </FormControl> */}
      </Grid>
      </ThemeProvider>
   );

}


