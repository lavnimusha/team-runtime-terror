import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '82%',
        margin: 'auto',
        paddingTop: 100,
        overflowX: 'hidden'
    },
    cardWrapper: {
        width: 250,
        height: 320,
        margin: 20,
        boxShadow: '1px 1px 1px 1px',
    },
    profileArea: {
        width: '80%',
        margin: 'auto',
    },
    cardAvatar: {
        left: theme.spacing(9),
        marginTop: theme.spacing(2),
        width: theme.spacing(12),
        height: theme.spacing(12),
        border: '5px solid white',
        boxShadow: '1px 1px 1px 1px',
    }
}));

export default useStyles;