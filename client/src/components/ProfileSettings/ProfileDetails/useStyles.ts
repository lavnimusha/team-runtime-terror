import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles((theme) => ({ 
    title: {
        fontWeight: 1000,
        letterSpacing: 2,
        marginBottom: 5,
        fontFamily: theme.typography.fontFamily,
    },
    headerFields: {
        fontWeight: 700,
        letterSpacing: 1,
        fontFamily: theme.typography.fontFamily,
    },
    headerText: {
        fontWeight: 200,
        letterSpacing: 1,
        fontFamily: "Proxima Nova",
    }
}))
export default useStyles;