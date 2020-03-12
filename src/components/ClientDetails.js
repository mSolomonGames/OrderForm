import React, { useContext } from 'react';
import { Paper, makeStyles, Grid, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
import { IndividualForm, CompanyForm } from '../components';
import { AppContext } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(4),
    },
    heading: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    },
    body: {
        padding: theme.spacing(4),
        textAlign: 'left'
    },
    label: {
        marginBottom: theme.spacing(1)
    }, 
    dropDown: {
        width: '200px'
    }
}));

export default () => {
    const classes = useStyles();
    const [state, setState ] = useContext(AppContext);

    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item className={classes.heading} xs={12}>
                    <Typography variant="h6">CLIENT DETAILS</Typography>
                </Grid>
                <Grid item xs={12} className={classes.body}>
                    <InputLabel id="applicationTypeLabel" className={classes.label}>Application Type</InputLabel>
                    <Select
                        className={classes.dropDown}
                        labelId="applicationTypeLabel"
                        id="applicationType"
                        value={state.applicationType}
                        onChange={e => setState(state => {return {...state, applicationType: e.target.value}})}
                        color="primary"
                    >
                        <MenuItem value={'individual'}>Individual</MenuItem>
                        <MenuItem value={'company'}>Company</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    {state.applicationType === "individual" ? <IndividualForm /> : <CompanyForm />}
                </Grid>
            </Grid>
        </Paper>
    )
}