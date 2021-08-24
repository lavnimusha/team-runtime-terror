import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bookingContainer: {
    margin: '12rem 0rem 0rem 0rem',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    textAlign: 'center',
    width: '100vw',
    height: '55vh',
    display: 'flex',
    verticalAlign: 'top',
  },
  calendar: {
    marginTop: '0rem',
    paddingTop: '0rem',
  },
  hiddenInput: {
    display: 'none',
  },
}));

export default useStyles;
