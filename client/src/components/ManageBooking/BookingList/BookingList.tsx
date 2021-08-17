import { ChangeEvent, useState } from 'react';
import { Card, Grid, Typography, SnackbarContent, Button, Badge } from '@material-ui/core';
import useStyles from './useStyles';
import { User } from '../../../interface/User';
import AvatarDisplay from '../../AvatarDisplay/AvatarDisplay';
import Search from '../../Search/Search';
import AuthMenu from '../../AuthMenu/AuthMenu';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}
const action = <SettingsIcon />;

const BookingList = ({ loggedInUser }: Props): JSX.Element => {
  const [search, setSearch] = useState<string>('test');
  const [newChatUser, setNewChatUser] = useState<User | null>(null);
  const classes = useStyles();

  // React.FormEvent<FormControl & FormControlProps>)
  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
    if (newChatUser) {
      setNewChatUser(null);
    }
  };

  return (
    <Grid className={classes.chatSideBanner}>
      <Card>
        <Typography>YOUR NEXT BOOKING:</Typography>
        <SnackbarContent action={action} />
        {/* <AuthMenu /> */}
      </Card>
      <Card>
        <Typography>CURRENT BOOKINGS:</Typography>
        <SnackbarContent message="ACCEPTED" action={action} />
        <SnackbarContent message="DECLINED" action={action} />
        <Typography>PAST BOOKINGS:</Typography>
        <SnackbarContent message="ACCEPTED" action={action} />
        <SnackbarContent message="DECLINED" action={action} />
      </Card>
    </Grid>
  );
};

export default BookingList;
