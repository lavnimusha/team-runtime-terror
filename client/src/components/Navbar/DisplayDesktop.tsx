import { Toolbar, Typography, Grid } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import useStyles from './useStyles';
import GetMenuButtons from './GetMenuButtons';

interface Props {
  MY_SITTER: string;
  BECOME_SITTER: string;
  MESSAGE: string;
  Mysitter: string;
  Becomesitter: string;
  Messages: string;
}
const DisplayDesktop = ({
  MY_SITTER,
  BECOME_SITTER,
  MESSAGE,
  Mysitter,
  Becomesitter,
  Messages,
}: Props): JSX.Element => {
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
          <GetMenuButtons
            Mysitter={Mysitter}
            Becomesitter={Becomesitter}
            Messages={Messages}
            BECOME_SITTER={BECOME_SITTER}
            MY_SITTER={MY_SITTER}
            MESSAGE={MESSAGE}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};
export default DisplayDesktop;
