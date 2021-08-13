import { Badge, Box, Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  MY_SITTER: string;
  BECOME_SITTER: string;
  MESSAGE: string;
  Mysitter: string;
  Becomesitter: string;
  Messages: string;
}

const GetMenuButtons = ({
  Mysitter,
  Becomesitter,
  Messages,
  MY_SITTER,
  BECOME_SITTER,
  MESSAGE,
}: Props): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <React.Fragment>
      <Link to={BECOME_SITTER} className={classes.becomeSitter}>
        {Becomesitter}
      </Link>
      <Link to={MY_SITTER} className={classes.menuDownButton}>
        {Mysitter}
      </Link>
      <Box className={classes.menuDownButton}>
        <Link to={MESSAGE} className={classes.messageLink}>
          {Messages}
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
        <Avatar alt="Profile Image" src={`https://robohash.org/${loggedInUser!.email}.png`} />;
      </Box>
    </React.Fragment>
  );
};
export default GetMenuButtons;
