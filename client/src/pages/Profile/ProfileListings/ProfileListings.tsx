import useStyles from './useStyles';
import Navbar from '../../../components/NavBar/Navbar';
import { Box, Grid, Typography, TextField, InputAdornment, Avatar, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const ProfileListings = () => {

    const classes = useStyles();

    const data = [{
        "image_url": "https://robohash.org/autsintnihil.png?size=50x50&set=set1",
        "name": "Rene Magne",
        "catch_phrase": "Fundamental global conglomeration",
        "description": "Donec diam neque, vestibulum eget, vulputate ut."
      }, {
        "image_url": "https://robohash.org/corruptiutlaborum.png?size=50x50&set=set1",
        "name": "Guillemette Lankford",
        "catch_phrase": "Universal heuristic task-force Star wars",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna."
      }, {
        "image_url": "https://robohash.org/verodoloresaut.png?size=50x50&set=set1",
        "name": "Kaspar Gingell",
        "catch_phrase": "Multi-lateral attitude-oriented challenge",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis."
      }, {
        "image_url": "https://robohash.org/minimafugaiusto.png?size=50x50&set=set1",
        "name": "Kearney Crookall",
        "catch_phrase": "Self-enabling reciprocal secured line",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam."
      }, 
      {
        "image_url": "https://robohash.org/delenitisaepesoluta.png?size=50x50&set=set1",
        "name": "Oneida Latek",
        "catch_phrase": "Re-contextualized web-enabled moratorium",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus."
      }, 
      {
        "image_url": "https://robohash.org/solutaametratione.png?size=50x50&set=set1",
        "name": "Kare Lemonby",
        "catch_phrase": "Open-source grid-enabled benchmark",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam."
      }
    ]

    return(
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
                        <Box justifyContent="center" >
                            <Typography variant="h4" align="center">Your search results</Typography>
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
                                <TextField 
                                    margin="normal" 
                                    variant="outlined" 
                                    type="date"
                                />
                            </Box>

                            <Box display="flex" flexWrap="wrap" justifyContent="center" pt={5} className={classes.profileArea}>
                                {
                                    data.map((d, index) => {
                                        return(
                                            <Link key={index} to="/profile-details" style={{textDecoration: 'none'}}>
                                                <Card className={classes.cardWrapper}>
                                                    <CardActionArea>
                                                        <Avatar className={classes.cardAvatar} alt="Remy Sharp" src={d.image_url} />
                                                        <CardContent>
                                                        <Typography gutterBottom variant="h5" align="center" component="h2">
                                                            {d.name}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body1" align="center" component="h2">
                                                            {d.catch_phrase}
                                                        </Typography>
                                                        <Typography align="center">
                                                            <Rating readOnly/>
                                                        </Typography>
                                                        <Typography align="center" variant="body2" color="textSecondary" component="p">
                                                            {d.description}
                                                        </Typography>
                                                    
                                                    <hr/>

                                                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <LocationOnIcon color="secondary" fontSize="small"/>
                                                                Toronto, Ontario
                                                            </Typography>

                                                            <Typography variant="body1" color="textSecondary" component="h1">
                                                                $14/hr
                                                            </Typography>
                                                        </Box>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileListings;