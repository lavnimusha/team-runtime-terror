import { Box, Typography } from "@material-ui/core";
import useStyles from './useStyles';

const ProfileDetails = (): JSX.Element => {

    const classes = useStyles();

    const profileData = [
        "FIRST NAME",
        "LAST NAME",
        "GENDER",
        "BIRTH DATE",
        "EMAIL ADDRESS",
        "PHONE NUMBER",
        "WHERE YOU LIVE",
        "DESCRIPTION"
    ]

    const apiData = [
        "Aman",
        "Sutariya",
        "Male",
        "18/07/1998",
        "aman@gmail.com",
        "311414141414",
        "India",
        "Aman is a dog lover"
    ]

    return(
        <Box p={3}>
            <Typography variant="h5" align="center" className={classes.title}>Profile Details</Typography>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" component="div">
                    <Box>
                        {
                        profileData.map((text, index) => {
                            return(
                                <Box key={index} textAlign="left" p={2}>
                                    <Typography variant="h6" className={classes.headerFields}>{text}</Typography>
                                </Box>
                                )
                            })
                        }
                    </Box>
                    <Box>
                        {
                        apiData.map((text, index) => {
                            return(
                                <Box key={index} textAlign="left" p={2}>
                                    <Typography variant="h6" className={classes.headerText}>{text}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileDetails;