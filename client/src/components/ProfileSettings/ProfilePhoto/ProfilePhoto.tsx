import { useAuth } from '../../../context/useAuthContext';
import useStyles from './useStyles';
import { Button, Card, Typography, Avatar, CardActions, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ProfilePhoto = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Box p={3}>
        <Card className={classes.photoCard}>
        <Typography variant="h5" align="center" className={classes.photoHeader}>
          Profile Photo
        </Typography>

        <Avatar
          alt="Profile Image"
          src={`https://robohash.org/${loggedInUser!.email}.png`}
          className={classes.photoAvatar}
          variant="circle"
        />

        <Typography variant="subtitle1" align="center" className={classes.photoText}>
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
        <Typography variant="subtitle1" align="center" className={classes.photoText}>
          <DeleteIcon className={classes.deleteIcon} /> Delete photo
        </Typography>
      </Card>
    </Box>
  );
};

export default ProfilePhoto;
