import { Toolbar, Typography, Grid, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';
import { useState } from 'react';
import useStyles from './useStyles';
import GetDrawerChoices from './GetDrawerChoices';

interface Props {
  LOGOUT: string;
  PROFILE: string;
  Logout: string;
  Profile: string;
}

const DisplayMobile = ({ LOGOUT, PROFILE, Logout, Profile }: Props): JSX.Element => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Toolbar>
      <Grid item container alignContent="center">
        <PetsIcon fontSize="large" className={classes.icon} />
        <Typography variant="h5" align="center" noWrap className={classes.logo}>
          LovingSitter.
        </Typography>
      </Grid>

      <IconButton
        {...{
          edge: 'start',
          color: 'secondary',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen,
        }}
        classes={{
          root: classes.iconRoot,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        {...{
          anchor: 'right',
          open: drawerOpen,
          onClose: handleDrawerClose,
        }}
      >
        <GetDrawerChoices LOGOUT={LOGOUT} PROFILE={PROFILE} Logout={Logout} Profile={Profile} />
      </Drawer>
    </Toolbar>
  );
};
export default DisplayMobile;
