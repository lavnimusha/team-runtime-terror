import { Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import useStyles from './useStyles';
import { useState } from 'react';
import MainPanel from '../../components/ProfileSettings/MainPanel/MainPanel';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function Profile(): JSX.Element {
    const classes = useStyles();

    const { path, url } = useRouteMatch();
    const [ compIndex, setIndex ] = useState(0);

    const listText = [
        { link: 'editProfile', text:"Edit Profile" },
        { link: 'profilePhoto', text: "Profile Photo" },
        { link: 'availability', text: "Availability" },
        { link: "payment", text: "Payment" },
        { link: "security" , text: "Security" },
        { link: "settings", text: "Settings" }
    ]
    console.log(compIndex);

    return(
        <Router>
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container>
                    <Grid key={1} item>
                        <List component="nav" className={classes.menuWrapper}>
                            {listText.map((item, index) => {
                                return(
                                <Link to={`${url}/${item.link}`} key={uuid()} style={{textDecoration: 'none'}}>
                                    <ListItem selected={index === compIndex} button onClick={() => setIndex(index)}>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                </Link>
                                )
                            })}
                        </List>
                    </Grid>

                    <Grid key={2} item>
                        <Paper className={classes.dataWrapper}>
                            <Switch>
                                <Route path={`${path}/:componentId`}>
                                    <MainPanel />
                                </Route>
                            </Switch>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Router>

    );
}