import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './calendar.css';

const CalendarDisplay = (): JSX.Element => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <Paper elevation={5} className={classes.CalendarPaper}>
      <Calendar className={classes.calendarClass} onChange={onChange} value={value} />
    </Paper>
  );
};

export default CalendarDisplay;
