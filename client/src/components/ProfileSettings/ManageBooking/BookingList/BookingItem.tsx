import { Grid, Avatar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './useStyles';
import { useAuth } from '../../../../context/useAuthContext';

interface Props {
  status: string;
  date: string;
  imageSrc: string;
  ownerName: string;
}

const BookingItem = ({ status, date, imageSrc, ownerName }: Props): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  return (
    <Paper elevation={3} className={classes.internalPaper}>
      <Grid container spacing={2} className={classes.internalGrid}>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {date}
            </Typography>
          </Grid>
          <Grid item className={classes.avatarGrid}>
            <Avatar alt="Profile Image" src={imageSrc} variant="circle" className={classes.photoAvatar} />
            <Typography className={classes.userName}>{ownerName}</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.statusGrid} alignContent="center">
          <Typography className={classes.status}>{status}</Typography>
          <SettingsIcon color="disabled" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BookingItem;
