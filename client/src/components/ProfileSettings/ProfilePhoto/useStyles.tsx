import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  photoPaper: {
    margin: '4rem auto 3rem 10rem',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    textAlign: 'center',
    width: '90%',
    height: '60vh',
  },

  photoCard: {
    width: '65%',
    margin: '3rem auto auto auto',
    border: 'none',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
  },
  photoAvatar: {
    textAlign: 'center',
    width: '168px',
    height: '168px',
    display: 'block',
    margin: '3rem auto auto auto',
    border: '0.5px solid grey',
  },

  buttonRoot: { color: 'red', border: '0.5px red solid' },
  photoButton: {
    padding: theme.spacing(2),
    fontWeight: 700,
  },
  form: {
    width: '100%',
  },

  photoLabel: {
    padding: theme.spacing(2),
    fontWeight: 700,
    color: 'red',
    border: '0.5px red solid',
    borderRadius: '4px',
  },
  photoInput: {
    padding: theme.spacing(2),
    fontWeight: 700,
    color: 'red',
    border: '0.5px red solid',
    display: 'none',
  },
  photoHeader: {
    fontWeight: 700,
    fontSize: '2rem',
  },
  photoText: {
    fontWeight: 700,
    paddingBottom: '1.5rem',
    color: 'grey',
    width: '80%',
    margin: '3rem auto auto auto',
  },
  deleteIcon: {
    marginBottom: '-0.3rem',
  },
}));

export default useStyles;
