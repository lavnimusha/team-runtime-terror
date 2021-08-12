import { Link } from 'react-router-dom';
import React from 'react';
import useStyles from './useStyles';

interface Props {
  LOGOUT: string;
  PROFILE: string;
}

const GetDrawerChoices = ({ LOGOUT, PROFILE }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to={LOGOUT} className={classes.menuDownButton}>
        Log out
      </Link>
      <Link to={PROFILE} className={classes.menuDownButton}>
        Go to profile
      </Link>
    </React.Fragment>
  );
};
export default GetDrawerChoices;
