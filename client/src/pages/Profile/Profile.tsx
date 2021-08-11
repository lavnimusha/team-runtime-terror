import { Grid, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import { useCallback } from "react";
import useStyles from './useStyles';

export default function Profile(): JSX.Element {
    const classes = useStyles();

    const listText = [
        "Edit Profile",
        "Profile photo",
        "Availibilty",
        "Payment",
        "Security",
        "Settings",
    ]

    return(
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container>
                    <Grid key={1} item>
                        <List component="nav" className={classes.menuWrapper}>
                            {listText.map((text, index) => {
                                return(
                                <ListItem key={index} button>
                                    <ListItemText primary={text} />
                                </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid key={2} item>
                        <Paper className={classes.dataWrapper}>
                        <Typography variant="h1"></Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}