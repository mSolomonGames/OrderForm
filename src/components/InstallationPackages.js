import React from 'react';
import {Grid, Paper, Typography, Select, FormControl, FormGroup, Switch, TextField, List, ListItem, ListItemText} from '@material-ui/core/';

export default function InstallationPackages(){
    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    return (
        <React.Fragment >
            <Paper>            
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12}>
                        <Typography align="center" variant="h3">Installation Packages</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography align="center" variant="h6">Please Select your Installation</Typography>
                        <List component="div" aria-label="secondary mailbox folder">
                            <ListItem
                                button
                                selected={selectedIndex === 0}
                                onClick={event => handleListItemClick(event, 0)}
                                >
                                <ListItemText align="center" primary="Installation Package 1" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 1}
                                onClick={event => handleListItemClick(event, 1)}
                                >
                                <ListItemText align="center" primary="Installation Package 2" />
                            </ListItem>
                            <ListItem
                            button
                            selected={selectedIndex === 2}
                            onClick={event => handleListItemClick(event, 2)}
                            >
                            <ListItemText align="center" primary="Installation Package 3" />
                            </ListItem>
                            <ListItem
                            button
                            selected={selectedIndex === 3}
                            onClick={event => handleListItemClick(event, 3)}
                            >
                            <ListItemText align="center" primary="Installation Package 4" />
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Mandate />
                    </Grid> */}
                    

                </Grid>
            </Paper>
        </React.Fragment>
    )
}