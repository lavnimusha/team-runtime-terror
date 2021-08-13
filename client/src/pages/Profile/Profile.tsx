import { Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import useStyles from './useStyles';
import { useState } from 'react';
import MainPanel from '../../components/ProfileSettings/MainPanel/MainPanel';

export default function Profile(): JSX.Element {
    const classes = useStyles();

    const [ compIndex, setIndex ] = useState(0);

    const listText = [
        "Edit Profile",
        "Profile photo",
        "Availability",
        "Payment",
        "Security",
        "Settings",
    ]

    return(
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container>
                    <Grid key={1} item>
                        <List component="nav" className={classes.menuWrapper}>
                            {listText.map((text, index) => {
                                return(
                                <ListItem selected={index === compIndex} key={index} button onClick={() => setIndex(index)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid key={2} item>
                        <Paper className={classes.dataWrapper}>
                            <MainPanel panelIndex={compIndex}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}