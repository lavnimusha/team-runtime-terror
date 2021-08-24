import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paymentPaper: {
    margin: '4rem auto 3rem 10rem',
    paddingBottom: '2rem',
    width: '55vw',
    height: '60vh',
  },

  paymentCard: {
    width: '65%',
    margin: '3rem auto auto auto',
    border: 'none',
    boxShadow: 'none',
    height: '50vh',
  },
  paymentImage: {
    width: '278px',
    height: '188px',
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: '10px',
  },

  buttonRoot: { color: 'red', border: '0.5px red solid' },
  photoButton: {
    padding: theme.spacing(2),
    fontWeight: 700,
  },
  form: {
    width: '50%',
    marginTop: '4rem',
  },
  customerCard: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    display: 'flex',
  },
  customerSingleCard: {
    marginRight: '1rem',
    borderRadius: '6px',
    backgroundSize: 'contain',
  },

  cardInput: {
    padding: theme.spacing(2),
    fontWeight: 700,
    color: 'red',
    border: '0.5px red solid',
    display: 'none',
  },
  paymentHeader: {
    fontWeight: 700,
    fontSize: '1.8rem',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  paymentText: {
    fontWeight: 700,
    paddingTop: '1.5rem',
    marginBottom: '1rem',
    color: 'grey',
    width: '80%',
  },
  expirationDate: {
    margin: '1rem auto 0rem auto',
  },
  textField: {
    margin: '0rem 2rem auto auto',
    paddingTop: '0rem',
  },
}));

export default useStyles;
