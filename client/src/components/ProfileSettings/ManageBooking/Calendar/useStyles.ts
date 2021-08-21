import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CalendarPaper: {
    margin: '1rem auto auto 10rem',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    textAlign: 'center',
    width: '35vw',
    height: '55vh',
  },

  calendarClass: {
    // height: '100%',
    // width: '100%',
    margin: '3rem',
    marginTop: '0rem',
  },
}));

export default useStyles;
