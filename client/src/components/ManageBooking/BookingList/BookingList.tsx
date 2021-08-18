import { Grid, Avatar, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './useStyles';
import { useAuth } from '../../../context/useAuthContext';
import BookingGrid from './BookingGrid';

const BookingList = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  console.log(loggedInUser);
  return (
    <Box>
      <Paper elevation={3} className={classes.paper}>
        <Typography gutterBottom variant="h6" className={classes.bookingText}>
          YOUR NEXT BOOKINGS:
        </Typography>
        <Grid container spacing={2} className={classes.internalGrid}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                5 April 2020, 10-12 AM
              </Typography>
            </Grid>
            <Grid item className={classes.avatarGrid}>
              <Avatar
                alt="Profile Image"
                src={`https://robohash.org/${loggedInUser!.email}.png`}
                variant="circle"
                className={classes.photoAvatar}
              />
              <Typography className={classes.userName}>{loggedInUser!.email}</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.statusGrid} alignContent="center">
            <Typography className={classes.status}>{status}</Typography>
            <SettingsIcon color="disabled" />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        <Typography gutterBottom variant="h6" className={classes.bookingText}>
          CURRENT BOOKINGS:
        </Typography>
        <Grid className={classes.overflowGrid}>
          <BookingGrid status="ACCEPTED" date="8 April 2020, 7-9 PM" />
          <BookingGrid status="ACCEPTED" date="21 March 2020, 3-10 PM" />
          <Typography gutterBottom variant="h6" className={classes.bookingText}>
            PAST BOOKINGS:
          </Typography>
          <BookingGrid status="ACCEPTED" date="8 April 2020, 7-9 PM" />
          <BookingGrid status="DECLINED" date="30 March 2020, 8-12 AM" />
          <BookingGrid status="ACCEPTED" date="21 March 2020, 3-10 PM" />
          <BookingGrid status="DECLINED" date="8 April 2020, 7-9 PM" />
          <BookingGrid status="ACCEPTED" date="30 March 2020, 8-12 AM" />
          <BookingGrid status="DECLINED" date="21 March 2020, 3-10 PM" />
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookingList;
