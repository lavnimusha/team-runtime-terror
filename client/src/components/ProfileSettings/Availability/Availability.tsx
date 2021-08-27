import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
/* import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; */
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  TextField,
  FormGroup,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: '10px',
      marginRight: '10px',
      width: 200,
    },
    box: {
      display: 'block',
    },
    submit: {
      padding: '5px',
      width: '10%',
      margin: '5px auto',
    },
  }),
);

const Availability = (): JSX.Element => {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [state, setState] = React.useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const [rate, setRate] = React.useState<{ dollar: string | number; name: string }>({
    dollar: '',
    name: 'hai',
  });

  const handleRate = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof rate;
    setRate({
      ...rate,
      [name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(startDate, endDate, rate.dollar, state);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <Box className={classes.box} m={2} p={2}>
        <FormControlLabel
          control={<Checkbox checked={state.monday} onChange={handleChange} name="monday" color="primary" />}
          label="Monday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.tuesday} onChange={handleChange} name="tuesday" color="primary" />}
          label="Tuesday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.wednesday} onChange={handleChange} name="wednesday" color="primary" />}
          label="Wednesday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.thursday} onChange={handleChange} name="thursday" color="primary" />}
          label="Thursday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.friday} onChange={handleChange} name="friday" color="primary" />}
          label="Friday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.saturday} onChange={handleChange} name="saturday" color="primary" />}
          label="Saturday"
        />
        <FormControlLabel
          control={<Checkbox checked={state.sunday} onChange={handleChange} name="sunday" color="primary" />}
          label="Sunday"
        />
      </Box>

      <Box className={classes.box} m={1} p={2}>
        <TextField
          id="date"
          label="Start Date"
          type="date"
          defaultValue={startDate}
          value={startDate}
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="End Date"
          type="date"
          defaultValue={endDate}
          value={endDate}
          onChange={(event) => {
            setEndDate(event.target.value);
          }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box component="div" display="block" m={1} p={1}>
        <FormControl>
          <InputLabel htmlFor="age-native-simple">Rate</InputLabel>
          <Select
            native
            value={rate.dollar}
            onChange={handleRate}
            inputProps={{
              name: 'dollar',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>$10</option>
            <option value={20}>$20</option>
            <option value={30}>$30</option>
          </Select>
        </FormControl>
      </Box>
      <Button color="secondary" className={classes.submit} variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </FormGroup>
  );
};

export default Availability;
