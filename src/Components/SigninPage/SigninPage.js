import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./SigninPage.style";

export default function InputAdornments() {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    email: '',
    showPassword: false,
    isEnabled: false,
    type: 0
  });

  const Placeholder = ({ children }) => {
    return <div className={classes.placeholder}>{children}</div>;
  };
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleTypeChange = (event) => {
    setValues({
      ...values,
      type: event.target.value,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <div>
        <Grid container className={classes.container}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.content}
            item 
            md={8}
          >
            <div className={classes.step}>
              <span className={classes.stepText}>Step 1 of 3</span>
              <span className={classes.filledbullet}>&bull;</span>
              <span className={classes.bullet}>&bull;</span>
              <span className={classes.bullet}>&bull;</span>
            </div>
            <Grid container md={5} >
              <div>
                <h1 className={classes.title}>Let's set up your account</h1>
                <p>Already have an account? <strong><Link href="#" className={classes.link}>Sign in</Link></strong></p>
              </div>
              <FormControl variant="outlined" fullWidth className={classes.formMargin}>
                <InputLabel htmlFor="standard-adornment-username">Your name</InputLabel>
                <OutlinedInput
                  id="standard-adornment-username"
                  value={values.username}
                  onChange={handleChange('username')}
                  aria-describedby="outlined-username-helper-text"
                  label="Your name"
                  inputProps={{
                    'aria-label': 'username',
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" fullWidth className={classes.formMargin}>
                <InputLabel htmlFor="standard-adornment-email">Email address</InputLabel>
                <OutlinedInput
                  id="standard-adornment-email"
                  value={values.weight}
                  onChange={handleChange('email')}
                  aria-describedby="outlined-email-helper-text"
                  inputProps={{
                    'aria-label': 'email',
                  }}
                  label="Email address"
                />
              </FormControl>
              <FormControl fullWidth className={classes.formMargin}>
                <Select
                  variant='outlined'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.type}
                  onChange={handleTypeChange}
                  renderValue={
                    values.type !== 0 ? undefined : () => <Placeholder>I would describe my user type as</Placeholder>
                  }
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>Subscriber</MenuItem>
                  <MenuItem value={30}>Editor</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" fullWidth className={classes.formMargin}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  label="Password"
                  className={classes.root}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="standard-weight-helper-text">Minimum 8 characters</FormHelperText>
              </FormControl>
              <Button 
                variant="contained" 
                size="large"
                disabled={values.username.length && values.email.length && values.password.length && values.type ? "" : "disabled"} 
                className={values.username.length ? classes.button : '' }
                fullWidth
              >
                Next
              </Button>
              <p className={classes.bottomText}>By clicking the "Next" button, you agree to creating a free account, and to <strong><Link href="#" className={classes.link}>Terms of Service</Link></strong> and <strong><Link href="#" className={classes.link}>Privacy policy</Link></strong></p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.dummy}
            item 
            md={4}
          >
            <div className={classes.sideView}>
              <h1>Dummy Hedding</h1>
              <p className={classes.lineHeight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Grid>
        </Grid>
      </div>
  );
}
