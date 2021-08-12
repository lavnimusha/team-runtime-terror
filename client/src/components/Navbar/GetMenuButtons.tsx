import { Badge, Box, Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  mySitter: string;
  becomeSitter: string;
  messages: string;
}

const GetMenuButtons = ({ mySitter, becomeSitter, messages }: Props): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <React.Fragment>
      <Link to={becomeSitter} className={classes.becomeSitter}>
        {becomeSitter}
      </Link>
      <Link to={mySitter} className={classes.menuDownButton}>
        My Sitters
      </Link>
      <Box className={classes.menuDownButton}>
        <Link to={messages} className={classes.messageLink}>
          Messages
        </Link>
        <Badge
          badgeContent=" "
          color="primary"
          variant="dot"
          classes={{
            root: classes.badgeRoot,
          }}
        ></Badge>
      </Box>

      <Box className={classes.dashboardAvatar}>
        <Avatar alt="Profile Image" src={`https://robohash.org/${loggedInUser}.png`} />;
      </Box>
    </React.Fragment>
  );
};
export default GetMenuButtons;
