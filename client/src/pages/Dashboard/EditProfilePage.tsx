import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import axios from 'axios';

const theme = {
  spacing: 8,
};

const EditProfile = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        padding: '0.5rem',
        width: '10%',
        color: '#dc004e',
        border: '1px solid #dc004e',
      },
      textbox: {
        width: '100%',
      },
      typography: {
        fontWeight: 550,
        fontSize: '18px',
      },
      gridcontainer: {
        padding: theme.spacing(1),
      },
      heading: {
        fontWeight: 550,
      },
      phone: {
        //TODO add padding or margin later
      },
    }),
  );
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
        firstName: Yup.string().max(15, 'Must be 15 characters or less'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        values.phoneNumber = phone;
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          axios
            .post('http://localhost:3001/profiles/create', values)
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
              <Box component="div" p={1}>
                <Typography className={classes.heading} component="h1" variant="h5">
                  EDIT PROFILE
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <CssBaseline />
                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        FIRST NAME
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      autoComplete="fname"
                      variant="outlined"
                      placeholder="John"
                      required
                      fullWidth
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
                        LAST NAME
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      placeholder="Doe"
                      id="lastName"
                      autoComplete="lname"
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                  </Grid>
                </Grid>

                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        GENDER
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <FormControl variant="outlined">
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        {...formik.getFieldProps('gender')}
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
                        BIRTH DATE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <form noValidate>
                      <TextField
                        id="date"
                        variant="outlined"
                        type="date"
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
                        PHONE NUMBER
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
                    <Button variant="outlined" color="secondary">
                      {' '}
                      ADD NUMBER
                    </Button>
                  </Grid>
                  {/*TODO add functionality later */}
                </Grid>

                <Grid container spacing={2} className={classes.gridcontainer}>
                  <Grid item xs={3}>
                    <Box component="div" p={1}>
                      <Typography className={classes.typography} component="h3" variant="h6">
                        EMAIL ADDRESS
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
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
                        WHERE YOU LIVE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
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
                        DESCRIBE YOURSELF
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <TextareaAutosize
                      className={classes.textbox}
                      aria-label="minimum height textarea"
                      minRows={4}
                      placeholder="About you"
                      {...formik.getFieldProps('description')}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Button type="submit" variant="outlined" className={classes.submit}>
                SUBMIT
              </Button>
            </div>
          </Container>
        </form>
      )}
    </Formik>
  );
};
export default EditProfile;
