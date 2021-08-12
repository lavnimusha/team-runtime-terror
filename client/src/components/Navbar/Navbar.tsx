import { AppBar, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import DisplayDesktop from './DisplayDesktop';
import DisplayMobile from './DisplayMobile';

interface Props {
  LOGOUT: string;
  PROFILE: string;
  mySitter: string;
  becomeSitter: string;
  messages: string;
}

const Navbar = ({}: Props): JSX.Element => {
  const classes = useStyles();

  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200 ? setMobileView(true) : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return (
    <Box>
      <AppBar elevation={3} position="fixed" className={classes.navbar}>
        {mobileView ? (
          <DisplayMobile LOGOUT="logout" PROFILE="profile" />
        ) : (
          <DisplayDesktop mySitter="My Sitters" becomeSitter="BECOME A SITTER" messages="Messages" />
        )}
      </AppBar>
    </Box>
  );
};

export default Navbar;
