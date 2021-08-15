import { AppBar, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import useStyles from './useStyles';
import DisplayDesktop from './DisplayDesktop';
import DisplayMobile from './DisplayMobile';

interface Props {
  LOGOUT: string;
  PROFILE: string;
  MY_SITTER: string;
  BECOME_SITTER: string;
  MESSAGE: string;
  Logout: string;
  Profile: string;
  Mysitter: string;
  Becomesitter: string;
  Messages: string;
}

const Navbar = ({
  LOGOUT,
  PROFILE,
  MY_SITTER,
  BECOME_SITTER,
  MESSAGE,
  Logout,
  Profile,
  Mysitter,
  Becomesitter,
  Messages,
}: Props): JSX.Element => {
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
          <DisplayMobile LOGOUT={LOGOUT} PROFILE={PROFILE} Logout={Logout} Profile={Profile} />
        ) : (
          <DisplayDesktop
            Mysitter={Mysitter}
            Becomesitter={Becomesitter}
            Messages={Messages}
            BECOME_SITTER={BECOME_SITTER}
            MY_SITTER={MY_SITTER}
            MESSAGE={MESSAGE}
          />
        )}
      </AppBar>
    </Box>
  );
};

export default Navbar;
