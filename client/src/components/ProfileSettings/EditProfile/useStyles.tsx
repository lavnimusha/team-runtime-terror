import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      marginTop: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: '1px',
    },
    submit: {
      margin: '15px',
      padding: '0.5rem',
      width: '10%',
      color: '#dc004e',
      border: '1px solid #dc004e',
      textTransform: 'uppercase',
    },
    addnumber: {
      textTransform: 'uppercase',
    },
    textbox: {
      width: '100%',
    },
    typography: {
      fontWeight: 800,
      fontSize: '12px',
      textTransform: 'uppercase',
    },
    gridcontainer: {
      padding: '10px',
    },
    heading: {
      fontWeight: 550,
      textTransform: 'uppercase',
    },
    phone: {
      padding: '1px', //TODO add padding or margin later
    },
    gender: {
      fontSize: '10px',
    },
  }),
);

export default useStyles;
