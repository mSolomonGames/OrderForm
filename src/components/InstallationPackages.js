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
                <Grid style={{display: 'flex'}} container spacing={0} justify="center" alignContent="center">
                    
                    <Grid item xs={10} >
                        <Typography align="center" color="textSecondary" variant="h6">Please Select your Installation</Typography>
                        <List component="div" aria-label="secondary mailbox folder" >
                            <ListItem                            
                                button
                                selected={selectedIndex === 0}
                                onClick={event => handleListItemClick(event, 0)}
                                >
                                <ListItemText  align="center" primary={<Typography variant="h6" color="textSecondary">Installation Package 1</Typography>} />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 1}
                                onClick={event => handleListItemClick(event, 1)}
                                >
                                <ListItemText align="center" primary={<Typography variant="h6" color="textSecondary">Installation Package 2</Typography>} />
                            </ListItem>
                            <ListItem
                            button
                            selected={selectedIndex === 2}
                            onClick={event => handleListItemClick(event, 2)}
                            >
                            <ListItemText align="center" primary={<Typography variant="h6" color="textSecondary">Installation Package 3</Typography>} />
                            </ListItem>
                            <ListItem
                            button
                            selected={selectedIndex === 3}
                            onClick={event => handleListItemClick(event, 3)}
                            >
                            <ListItemText align="center" primary={<Typography variant="h6" color="textSecondary">Installation Package 4</Typography>} />
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