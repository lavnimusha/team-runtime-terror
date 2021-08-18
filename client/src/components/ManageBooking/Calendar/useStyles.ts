import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CalendarPaper: {
    margin: '7rem auto auto 10rem',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    textAlign: 'center',
    width: '33%',
    height: '60vh',
  },

  calendarClass: {
    // height: '100%',
    // width: '100%',
    margin: '3rem',
  },
}));

export default useStyles;
