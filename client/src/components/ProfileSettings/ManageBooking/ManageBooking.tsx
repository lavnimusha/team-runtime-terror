import { Grid, Container } from '@material-ui/core';
import BookingList from './BookingList/BookingList';
import CalendarDisplay from './Calendar/CalendarDisplay';
import useStyles from './useStyles';

const ManageBooking = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.bookingContainer}>
      <Grid item>
        <BookingList />
      </Grid>
      <Grid item className={classes.calendar}>
        <CalendarDisplay />
      </Grid>
    </Container>
  );
};

export default ManageBooking;
