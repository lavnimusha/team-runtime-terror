import { useState, useEffect } from 'react';
import { Grid, Container, Input } from '@material-ui/core';
import BookingList from './BookingList/BookingList';
import CalendarDisplay from './Calendar/CalendarDisplay';
import useStyles from './useStyles';
import axios from 'axios';
import { useAuth } from '../../../context/useAuthContext';

const ManageBooking = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const [incomingData, setIncomingData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const handleIncomingBooking = async () => {
      try {
        setIncomingData(await axios.post('http://localhost:3001/profile/manage-booking', JSON.stringify(loggedInUser)));
      } catch (err) {
        console.log(err);
      }
    };
    handleIncomingBooking();
  }, [loggedInUser]);
  const newData = incomingData as any;

  return (
    <Container className={classes.bookingContainer}>
      <Grid item>
        <BookingList data={newData.data} />
      </Grid>

      <Grid item className={classes.calendar}>
        <CalendarDisplay />
      </Grid>
      <form action="/" method="GET">
        <Input type="submit" className={classes.hiddenInput} />
      </form>
    </Container>
  );
};

export default ManageBooking;
