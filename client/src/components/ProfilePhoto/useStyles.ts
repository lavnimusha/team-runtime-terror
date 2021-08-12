import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  photoPaper: {
    marginTop: '7rem',
    marginLeft: '10rem',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
    textAlign: 'center',
    width: '50%',
    height: '70vh',
  },

  photoCard: {
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem',
    border: 'none',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
  },
  photoAvatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '168px',
    height: '168px',
    display: 'block',
    marginTop: '3rem',
    border: '0.5px solid grey',
  },
  buttonRoot: { color: 'red', border: '0.5px red solid' },
  photoButton: {
    padding: theme.spacing(2),
    fontWeight: 700,
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
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
  },
}));

export default useStyles;
