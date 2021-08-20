import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: 'auto',
    paddingTop: 50,
  },
  menuWrapper: {
    height: 500,
    width: 200,
    margin: 60,
  },
  dataWrapper: {
    height: 600,
    width: 600,
    margin: 60,
    boxShadow: '1px 1px 1px 1px',
  },
  menuNav: {
    textDecoration: 'none',
    backgroundColor: theme.palette.secondary.main,
    color: 'black',
  },
}));

export default useStyles;