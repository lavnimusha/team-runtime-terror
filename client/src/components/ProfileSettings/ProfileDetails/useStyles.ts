import { makeStyles, Theme } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles((theme: Theme) => ({ 
    root: {
        flexGrow: 1,
        width: '80%',
        margin: 'auto',
        paddingTop: 50,
    },
    profileWrapper: {
        height: 700,
        width: 600,
        margin: 60,
        boxShadow: '1px 1px 1px 1px',
    },
    availWrapper: {
        height: 450,
        width: 400,
        margin: 60,
        boxShadow: '1px 1px 1px 1px',
    },
    cardWrapper: {
        height: 700,
        width: 600,
    },
    cardImage: {
        position: 'relative',
    },
    cardAvatar: {
        position: 'absolute',
        top: 200,
        left: 250,
        width: theme.spacing(12),
        height: theme.spacing(12),
        border: '5px solid white',
        boxShadow: '1px 1px 1px 1px',
    },
    contentWrapper: {
        marginTop: 50,
    },
    thumbImages: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginLeft: 5,
        borderRadius: 5,
    },
    dateInput: {
        border: '1px solid black',
        borderRadius: 5,
        padding: 15,
    },
    locationIcon: {
        marginRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
    }
}))
export default useStyles;