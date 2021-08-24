import { useState } from 'react';
import axios from 'axios';
import { Grid, Avatar, Menu, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './useStyles';
interface Props {
  status: string;
  bookingDate: string;
  imgUrl: string;
  userName: string;
  startTime: string;
  endTime: string;
  category: string;
  index: number;
}

const BookingItem = ({
  status,
  bookingDate,
  imgUrl,
  userName,
  startTime,
  endTime,
  index,
  category,
}: Props): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccept = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(null);
    try {
      await axios.post(
        'http://localhost:3001/profile/manage-booking',
        JSON.stringify({ status: 'ACCEPTED', category, index }),
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleDecline = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(null);
    try {
      await axios.post(
        'http://localhost:3001/profile/manage-booking',
        JSON.stringify({ status: 'DECLINED', category, index }),
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} className={classes.internalPaper}>
      <Grid container spacing={2} className={classes.internalGrid}>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {bookingDate.slice(0, 10)} {startTime} - {endTime}
            </Typography>
          </Grid>
          <Grid item className={classes.avatarGrid}>
            <Avatar alt="Profile Image" src={imgUrl} variant="circle" className={classes.photoAvatar} />
            <Typography className={classes.userName}>{userName}</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.statusGrid} alignContent="center">
          <Typography className={classes.status}>{status}</Typography>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event)}>
            <SettingsIcon />
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <Button onClick={(event) => handleAccept(event)}>Accept</Button>
            <Button onClick={(event) => handleDecline(event)}>Decline</Button>
          </Menu>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BookingItem;
