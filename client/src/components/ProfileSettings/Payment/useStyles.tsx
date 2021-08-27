import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paymentPaper: {
    margin: '4rem auto 2rem 10rem',
    paddingBottom: '2rem',
    width: '55vw',
    height: '75vh',
  },

  paymentCard: {
    width: '65%',
    margin: '3rem auto auto auto',
    border: 'none',
    boxShadow: 'none',
    height: '60vh',
  },

  buttonRoot: { color: 'red', border: '0.5px red solid' },
  cardButton: {
    padding: theme.spacing(2),
    fontWeight: 700,
    width: '50%',
    marginTop: '1rem',
  },
  form: {
    width: '50vw',
    marginTop: '2rem',
    padding: '2rem',
  },
  cardElement: {
    margin: '2rem 0rem 1rem 0rem',
  },
  customerCard: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    display: 'flex',
  },
  customerSavedCard: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    display: 'flex',
  },
  customerSingleCard: {
    padding: '3rem 0rem',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
  },

  paymentHeader: {
    fontWeight: 700,
    fontSize: '1.8rem',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  noCard: {
    fontWeight: 'bold',
    padding: '2rem 0rem 1rem 0rem',
  },
  sampleCard: {
    width: '12rem',
    height: '7rem',
  },
  paymentText: {
    fontWeight: 700,
    margin: '1rem 0rem',
    color: 'grey',
    width: '80%',
  },
  expirationDate: {
    margin: '1rem auto 0rem auto',
  },
  errorText: {
    color: 'red',
    paddingLeft: '1.5rem',
    display: 'inline',
  },

  textField: {
    margin: '0rem 2rem auto auto',
    paddingTop: '0rem',
  },
  successText: {
    padding: '1rem 0rem 0rem 0rem',
  },
  cardImage: {
    marginTop: '1rem',
  },
}));
const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  style: {
    base: {
      iconColor: '#6772e5',
      color: '#6772e5',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#6772e5',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
};

export { CARD_OPTIONS };

export default useStyles;
