import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './useStyles';
import Navbar from '../../Navbar/Navbar';
import profCover from '../../../Images/profcover.jpg';
import profimg from '../../../Images/profimg.jpg';
import doggo from '../../../Images/dog1.jpg';
import doggo1 from '../../../Images/dog2.jpg';

const ProfileDetails = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Navbar
        LOGOUT="/logout"
        PROFILE="/profile"
        MY_SITTER="/mySitter"
        BECOME_SITTER="/becomeSitter"
        MESSAGE="/message"
        Logout="Log out"
        Profile="Profile"
        Mysitter="My Sitters"
        Becomesitter="BECOME A SITTER"
        Messages="Messages"
      />
      <Grid item xs={12}>
        <Grid container direction="row">
          <Grid item>
            <Paper elevation={12} className={classes.profileWrapper}>
              <Card className={classes.cardWrapper}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImage}
                    component="img"
                    alt="profile details img"
                    height="250"
                    image={profCover}
                  />
                  <Avatar className={classes.cardAvatar} alt="Remy Sharp" src={profimg} />
                </CardActionArea>
                <CardContent className={classes.contentWrapper}>
                  <Typography align="center" variant="h4">
                    Norma Byers
                  </Typography>
                  <Typography align="center" gutterBottom variant="body1">
                    Loving Pet Sitter
                  </Typography>
                  <Typography align="center" gutterBottom variant="body2">
                    <LocationOnIcon className={classes.locationIcon} color="secondary" fontSize="small" />
                    Toronto, Ontario
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    About me
                  </Typography>
                  <Typography align="left" gutterBottom variant="subtitle1" component="h2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nemo culpa dolore unde illum in
                    quam rerum repellat. Sequi culpa atque,quam laboriosam minus possimus assumenda doloribus distinctio
                    maxime nesciunt!
                  </Typography>
                  <Box display="flex" p={2} flexDirection="row" flexBasis="1">
                    <Avatar className={classes.thumbImages} variant="square" alt="Remy Sharp" src={doggo} />
                    <Avatar className={classes.thumbImages} variant="square" alt="Remy Sharp" src={doggo1} />
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid item>
            <Paper elevation={12} className={classes.availWrapper}>
              <Box p={5}>
                <Typography gutterBottom align="center" variant="h4">
                  $14/hr
                </Typography>
                <Typography align="center">
                  <Rating name="read-only" readOnly />
                </Typography>
                {/* HANDLING FORMDATA YET TO BE IMPLEMENTED */}
                <form>
                  <Box p={4}>
                    <Box>
                      <Typography variant="caption" align="left">
                        DROP IN
                      </Typography>
                      <TextField id="datetime-dropin" type="datetime-local" className={classes.dateInput} />
                    </Box>
                    <Box mt={2}>
                      <Typography variant="caption" align="left">
                        DROP OFF
                      </Typography>
                      <TextField id="datetime-dropoff" type="datetime-local" className={classes.dateInput} />
                    </Box>
                    <Box mt={5} ml={7}>
                      <Button variant="contained" color="secondary" size="large">
                        SEND REQUEST
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
