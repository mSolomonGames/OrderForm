import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField, List, ListItem, ListItemText} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
     
      backgroundColor: theme.palette.background.paper,
    },
  }));
            

export default function CompanyWireless(){
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

    return (
        <React.Fragment>                    
            <Grid container spacing={0} className={classes.root}>
                {/* <Grid item xs={12}>
                    <Typography align="center" variant="h2">Individual Fibre</Typography>
                </Grid> */}
                <Grid item xs={12}>
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={event => handleListItemClick(event, 0)}
                    >
                     <ListItemText primary={<Typography align="center" variant="h6" color="textSecondary">Individual Company Package 1</Typography>}/>
                    </ListItem>
                    <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                    >
                    <ListItemText primary={<Typography align="center" variant="h6" color="textSecondary">Individual Company Package 2</Typography>}/>
                    </ListItem>

                    <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                    >
                    <ListItemText primary={<Typography align="center" variant="h6" color="textSecondary">Individual Company Package 3</Typography>}/>
                    </ListItem>
                    <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={event => handleListItemClick(event, 3)}
                    >
                    <ListItemText primary={<Typography align="center" variant="h6" color="textSecondary">Individual Company Package 4</Typography>}/>
                    </ListItem>
                </List>
                </Grid>
                
            </Grid>
            
        </React.Fragment>
    )
}