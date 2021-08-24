import React, { Component } from 'react';
import { Grid, Avatar, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './useStyles';
import { useAuth } from '../../../../context/useAuthContext';
import BookingItem from './BookingItem';
import mockBookings from './mockBooking';

const BookingList = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
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
          {mockBookings[0].map((booking) => {
            return (
              <BookingItem
                key={booking.id}
                status={booking.status}
                date={booking.date}
                ownerName={booking.ownerName}
                imageSrc={booking.imageSrc}
              />
            );
          })}
          <Typography gutterBottom variant="h6" className={classes.bookingText}>
            PAST BOOKINGS:
          </Typography>
          {mockBookings[1].map((booking) => {
            return (
              <BookingItem
                key={booking.id}
                status={booking.status}
                date={booking.date}
                ownerName={booking.ownerName}
                imageSrc={booking.imageSrc}
              />
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookingList;
