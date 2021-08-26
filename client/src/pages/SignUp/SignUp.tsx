import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import AuthNavBar from '../../components/Navbar/AuthNavBar/AuthNavBar';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { demoUserLogin } from '../../helpers/APICalls/login';
import { createUserProfile } from '../../helpers/APICalls/profile';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password, userType }: { email: string; password: string; username: string; userType: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string; userType: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        createUserProfile(data.success.user.id, userType, email).then((profileId) => {
          data.success!.user['profileId'] = profileId;
          updateLoginContext(data.success!);
        });
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const handleDemoLogin = () => {
    const demoLoginData = {
      email: 'doglover@gmail.com',
      password: 'dogLover',
      notifier: 'demoLogin',
    };
    demoUserLogin(demoLoginData.email, demoLoginData.password, demoLoginData.notifier).then((data) => {
      if (data.success) {
        updateLoginContext(data.success);
      } else {
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <AuthNavBar />
      <Grid item xs={12} sm={8} md={7} component={Paper} className={classes.paperWrapper}>
        <Box className={classes.authWrapper}>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5" align="center">
                  Sign Up
                </Typography>
              </Grid>
            </Grid>
            <SignUpForm handleSubmit={handleSubmit} handleDemoLogin={handleDemoLogin} />
            <AuthHeader linkTo="/login" asideText="Already a member?" btnText="Login" />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
