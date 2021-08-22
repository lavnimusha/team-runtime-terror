import { Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import useStyles from './useStyles';
import MainPanel from '../../components/ProfileSettings/MainPanel/MainPanel';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Navbar from '../../components/Navbar/Navbar';

export default function Profile(): JSX.Element {
  const classes = useStyles();

  const { path, url } = useRouteMatch();

  const listText = [
    { link: 'edit-profile', text: 'Edit Profile' },
    { link: 'profile-photo', text: 'Profile Photo' },
    { link: 'availability', text: 'Availability' },
    { link: 'manage-booking', text: 'Manage Booking' },
    { link: 'payment', text: 'Payment' },
    { link: 'security', text: 'Security' },
    { link: 'settings', text: 'Settings' },
  ];

  return (
    <Router>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid key={1} item>
              <Navbar
                LOGOUT="/logout"
                PROFILE="/profile"
                MY_SITTER="/mySitter"
                BECOME_SITTER="/becomeSitter"
                MESSAGE="/message"
                Logout="Log out"
                Profile="Profile"
                Mysitter="My Sitters"
                Becomesitter="BECOME A SITTER"
                Messages="Messages"
              />
              <List component="nav" className={classes.menuWrapper}>
                {listText.map((item) => {
                  return (
                    <NavLink
                      to={`${url}/${item.link}`}
                      className={classes.menuNav}
                      activeStyle={{ fontWeight: 'bold', color: 'red' }}
                      key={uuid()}
                    >
                      <ListItem button>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    </NavLink>
                  );
                })}
              </List>
            </Grid>

            <Grid key={2} item>
              <Paper className={classes.dataWrapper} elevation={0}>
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