import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  paperWrapper: {
    height: 600,
    width: 50,
    margin: 'auto',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    // paddingTop: 23,
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 1000,
    fontFamily: "'Open Sans'",
  },
  title: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  navBar: {
    padding: '1% 1% 1% 5%',
    height: 65,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
  },
  heroImage: {
    width: 180,
    height: 30,
  },
  navText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 700,
  },
  headerBtn: {
    margin: '0px 10px 0px 40px',
  },
  headerTxt: {
    margin: '5px 10px 0px 10px',
    color: 'black',
    textDecoration: 'underline',
  },
}));

export default useStyles;
