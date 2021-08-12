import { User } from '../../interface/User';
import useStyles from './useStyles';
import { Button, Card, Typography, Avatar, CardActions, Paper } from '@material-ui/core';

interface Props {
  loggedInUser: User;
}

const ProfilePhoto = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.photoPaper}>
      <Card className={classes.photoCard}>
        <Typography variant="h5" className={classes.photoHeader}>
          Profile Photo
        </Typography>

        <Avatar
          alt="Profile Image"
          src={`https://robohash.org/${loggedInUser.email}.png`}
          className={classes.photoAvatar}
          variant="circle"
        />

        <Typography variant="subtitle1" className={classes.photoText}>
          Be sure to use a photo that clearly shows your face
        </Typography>
        <CardActions>
          <Button
            variant="outlined"
            fullWidth
            className={classes.photoButton}
            classes={{
              root: classes.buttonRoot,
            }}
          >
            Upload a file from your device
          </Button>
        </CardActions>
        <Typography variant="subtitle1" className={classes.photoText}>
          <i className="fas fa-trash-alt fa-fw"></i> Delete photo
        </Typography>
      </Card>
    </Paper>
  );
};

export default ProfilePhoto;
