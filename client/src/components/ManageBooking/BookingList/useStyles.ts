import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),

    maxWidth: 600,
    margin: '2rem',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  photoAvatar: {
    display: 'inline-block',
    width: '48px',
    height: '48px',
    border: '0.5px solid grey',
  },
  userName: {
    display: 'inline',
    marginLeft: '1.5rem',
  },

  status: {
    display: 'inline',
    marginRight: '1rem',
    color: 'grey',
    marginTop: '2rem',
  },
  bookingText: {
    fontWeight: 'bold',
  },
  internalGrid: {
    borderRadius: '0.3px',
    margin: '0rem 0rem 2rem 3rem',
    width: '90%',
  },
  avatarGrid: {
    verticalAlign: 'middle',
    alignItems: 'center',
    display: 'flex',
  },
  statusGrid: {
    verticalAlign: 'middle',
    display: 'flex',
  },
  internalPaper: {
    width: '100%',
    margin: '0rem',
  },

  overflowGrid: {
    overflow: 'auto',
    flexGrow: 1,
    height: '60vh',
    paddingRight: '1rem',
    '&::-webkit-scrollbar': {
      width: '0.6em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'lightgrey',
      borderRadius: '5px',
    },
  },
}));

export default useStyles;
