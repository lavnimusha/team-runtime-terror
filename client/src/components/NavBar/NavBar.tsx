import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { AppBar, Typography } from '@material-ui/core';
import logo from '../../Images/logo.png';

const NavBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navBar}>
          <img className={classes.heroImage} src={logo} />
          <div className={classes.navText}>
            <Typography className={classes.headerTxt} color="primary" variant="h6">Become a sitter</Typography>
            <Button className={classes.headerBtn} variant="outlined" size="large"  color="secondary">Login</Button>
            <Button className={classes.headerBtn} variant="contained" size="large" color="secondary">Sign Up</Button>
          </div>
      </AppBar>
  );
};

export default NavBar;
