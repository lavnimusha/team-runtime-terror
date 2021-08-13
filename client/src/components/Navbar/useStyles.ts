import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'white',
  },

  toolbarGrid: {
    justifyContent: 'flex-end',
    paddingRight: '3rem',
  },
  dashboardAvatar: {
    marginTop: '0.5rem',
    marginLeft: '2rem',
  },
  badgeRoot: { color: 'green' },
  iconRoot: { color: 'red' },
  menuDownButton: {
    padding: theme.spacing(3),
    display: 'flex',
    color: '#000',
    textDecoration: 'none',
    fontWeight: 700,
    marginLeft: '0',
    '&:hover': {
      color: 'grey',
      textDecoration: 'none',
    },
  },
  messageLink: {
    color: '#000',
    display: 'flex',
    padding: '0',
    paddingRight: '0.5rem',

    textDecoration: 'none',
    '&:hover': {
      color: 'grey',
      textDecoration: 'none',
    },
  },

  drawerContainer: {
    padding: '0rem 2rem',
  },
  logo: {
    fontWeight: 700,
    marginLeft: '0.7rem',
    color: '#000',
  },
  becomeSitter: {
    padding: theme.spacing(3),
    display: 'flex',
    color: '#000',
    fontWeight: 700,
    textDecoration: 'underline',
    '&:hover': {
      color: 'grey',
      textDecoration: 'none',
    },
  },
  icon: {
    color: 'red',
    marginLeft: '2rem',
  },
}));

export default useStyles;
