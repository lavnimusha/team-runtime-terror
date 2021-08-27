import useStyles from './useStyles';
import Navbar from '../../../components/Navbar/Navbar';
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Card,
  CardActionArea,
  Divider,
  CardContent,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import mockProfiles from '../../../mocks/mockProfile';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ProfileListings = () => {
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
        <Grid container direction="column">
          <Grid item>
            <Box justifyContent="center">
              <Typography variant="h4" align="center">
                Your search results
              </Typography>
              <Box display="flex" justifyContent="center" mt={3}>
                <TextField
                  label="Toronto, Ontario"
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField margin="normal" variant="outlined" type="date" />
              </Box>

              <Box display="flex" flexWrap="wrap" justifyContent="center" pt={5} className={classes.profileArea}>
                {mockProfiles.map((profile) => {
                  return (
                    <Card key={uuid()} className={classes.cardWrapper}>
                      <CardActionArea component={Link} to="/profile-details">
                        <Avatar
                          className={classes.cardAvatar}
                          alt={`Avatar of ${profile.name}`}
                          src={profile.imageUrl}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" align="center">
                            {profile.name}
                          </Typography>
                          <Typography gutterBottom variant="body1" align="center">
                            {profile.catchPhrase}
                          </Typography>
                          <Typography align="center">
                            <Rating readOnly />
                          </Typography>
                          <Typography align="center" variant="body2" color="textSecondary">
                            {profile.description}
                          </Typography>

                          <Divider variant="fullWidth" style={{ margin: '5px' }} />

                          <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Typography variant="body2" color="textSecondary">
                              <LocationOnIcon color="secondary" fontSize="small" />
                              Toronto, Ontario
                            </Typography>

                            <Typography variant="body1" color="textSecondary">
                              $14/hr
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileListings;
