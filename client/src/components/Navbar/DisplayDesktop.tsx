import { Toolbar, Typography, Grid } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import useStyles from './useStyles';
import GetMenuButtons from './GetMenuButtons';

interface Props {
  mySitter: string;
  becomeSitter: string;
  messages: string;
}
const DisplayDesktop = ({}: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Grid container>
        <Grid item container sm={2} alignContent="center">
          <PetsIcon fontSize="large" className={classes.icon} />
          <Typography variant="h5" align="center" noWrap className={classes.logo}>
            LovingSitter.
          </Typography>
        </Grid>
        <Grid sm={10} item container className={classes.toolbarGrid}>
          <GetMenuButtons mySitter="My Sitters" becomeSitter="BECOME A SITTER" messages="Messages" />
        </Grid>
      </Grid>
    </Toolbar>
  );
};
export default DisplayDesktop;
