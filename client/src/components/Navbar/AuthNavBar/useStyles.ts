import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({ 
    navBar: {
        padding: '1% 1% 1% 5%',
        height: 65,
        backgroundColor: '#FFFFFF',
    },
    heroImage: {
      width: 180,
      height: 30,
    },
    headerBtn: {
      margin: '0px 10px 0px 40px',
    },
    headerTxt: {
      margin: '5px 10px 0px 10px',
      color: 'black',
      textDecoration: 'underline',
    },
}));

export default useStyles;
