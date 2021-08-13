import { Link } from 'react-router-dom';
import React from 'react';
import useStyles from './useStyles';

interface Props {
  LOGOUT: string;
  PROFILE: string;
  Logout: string;
  Profile: string;
}

const GetDrawerChoices = ({ LOGOUT, PROFILE, Logout, Profile }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to={LOGOUT} className={classes.menuDownButton}>
        {Logout}
      </Link>
      <Link to={PROFILE} className={classes.menuDownButton}>
        {Profile}
      </Link>
    </React.Fragment>
  );
};
export default GetDrawerChoices;
