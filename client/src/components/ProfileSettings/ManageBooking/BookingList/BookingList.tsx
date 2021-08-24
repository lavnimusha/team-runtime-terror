import { Grid, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import BookingItem from './BookingItem';

const BookingList = ({ data }: any): JSX.Element => {
  const classes = useStyles();
  if (!data) {
    return <></>;
  }
  return (
    <Box>
      <Paper elevation={3} className={classes.paper}>
        <Typography gutterBottom variant="h6" className={classes.bookingText}>
          YOUR NEXT BOOKINGS:
        </Typography>

        {data[0].map((booking: any, index: number) => {
          return (
            <Grid key={booking.userName} container spacing={2} className={classes.internalGrid}>
              <BookingItem
                status={status}
                userName={booking.userName}
                bookingDate={booking.bookingDate}
                imgUrl={booking.imgUrl}
                startTime={booking.startTime}
                endTime={booking.endTime}
                category="nextBooking"
                index={index}
              />
            </Grid>
          );
        })}
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        <Typography gutterBottom variant="h6" className={classes.bookingText}>
          CURRENT BOOKINGS:
        </Typography>
        <Grid className={classes.overflowGrid}>
          {data[1].map((booking: any, index: number) => {
            return (
              <BookingItem
                key={booking.userName}
                status={booking.status}
                bookingDate={booking.bookingDate}
                userName={booking.userName}
                imgUrl={booking.imgUrl}
                startTime={booking.startTime}
                endTime={booking.endTime}
                category="currentBooking"
                index={index}
              />
            );
          })}
          <Typography gutterBottom variant="h6" className={classes.bookingText}>
            PAST BOOKINGS:
          </Typography>
          {data[2].map((booking: any, index: number) => {
            return (
              <BookingItem
                key={booking.userName}
                status={booking.status}
                bookingDate={booking.bookingDate}
                userName={booking.userName}
                imgUrl={booking.imgUrl}
                startTime={booking.startTime}
                endTime={booking.endTime}
                index={index}
                category="pastBooking"
              />
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookingList;
