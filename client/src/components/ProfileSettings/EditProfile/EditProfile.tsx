import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Typography,
  MenuItem,
  Paper,
  TextareaAutosize,
  Select,
  Button,
  TextField,
  FormControl,
  Box,
  Grid,
  Container,
} from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';
import useStyles from './useStyles';

const EditProfile = () => {
  const classes = useStyles();
  const [phone, setPhone] = useState('');
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        address: '',
        phoneNumber: '',
        description: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
          .max(40),
        lastName: Yup.string()
          .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
          .max(40),
        email: Yup.string().email('Invalid email address').required('Required'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        values.phoneNumber = phone;
        await axios
          .post('http://localhost:3001/profiles/create', values)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <Container component="main" maxWidth="sm">
            <Paper elevation={0} className={classes.paper}>
              <Box component="div" m={2}>
                <Typography className={classes.heading} component="h1" variant="h5">
                  edit profile
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        first name{' '}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      placeholder="John"
                      required
                      fullWidth
                      size="small"
                      id="firstName"
                      autoFocus
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                  </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        last name{' '}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      placeholder="Doe"
                      id="lastName"
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                  </Grid>
                </Grid>

                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        gender
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <FormControl variant="outlined">
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        {...formik.getFieldProps('gender')}
                        className={classes.gender}
                      >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        birth date
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <form noValidate>
                      <TextField
                        id="date"
                        variant="outlined"
                        type="date"
                        size="small"
                        placeholder="2017-05-24"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...formik.getFieldProps('birthdate')}
                      />
                    </form>
                  </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.phone}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        phone number
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <MuiPhoneNumber
                      data-cy="user-phone"
                      defaultCountry={'us'}
                      onChange={(e) => {
                        setPhone(e);
                      }}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div>{formik.errors.phoneNumber}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={3}>
                    <Button className={classes.addnumber} variant="outlined" color="secondary">
                      {' '}
                      add number
                    </Button>
                  </Grid>
                  {/*TODO add functionality later */}
                </Grid>

                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        email address
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      placeholder="john-doe@gmail.com"
                      id="email"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                  </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        where to live
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      placeholder="Address"
                      id="address"
                      {...formik.getFieldProps('address')}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        describe yourself
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextareaAutosize
                      className={classes.textbox}
                      aria-label="minimum height textarea"
                      rows={4}
                      placeholder="About you"
                      {...formik.getFieldProps('description')}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Button type="submit" variant="outlined" className={classes.submit}>
                submit
              </Button>
            </Paper>
          </Container>
        </form>
      )}
    </Formik>
  );
};
export default EditProfile;
