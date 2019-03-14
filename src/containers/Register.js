import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import RegisterRedirect from '../components/RegisterRedirect';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authLogin, authSignup } from '../actions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  nameInput: {
    width: '48%'
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const Register = ({ classes, authLogin, authSignup, history: { push, replace }, location: { pathname } }) => {
  const [email, setEmail, updateEmail] = useInput();
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [firstName, setFirstName, updateFirstName] = useInput();
  const [lastName, setLastName, updateLastName] = useInput();
  const loggedIn = localStorage.getItem('userToken');
  const signingUp = pathname === '/signup';

  const handleSubmit = e => {
    e.preventDefault();

    (signingUp
      ? authSignup({ email, username, password, firstName, lastName }).then(() => {
          setEmail('');
          setUsername('');
          setPassword('');
          setFirstName('');
          setLastName('');
        })
      : authLogin({ username, password }).then(() => {
          setUsername('');
          setPassword('');
        })
    ).then(() => push('/dashboard'));
  };

  if (loggedIn) setTimeout(() => replace('/dashboard'), 10000);

  return loggedIn ? (
    <RegisterRedirect />
  ) : (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign {signingUp ? 'up' : 'in'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {signingUp && (
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input value={email} onChange={updateEmail} id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
          )}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              value={username}
              onChange={updateUsername}
              id="username"
              name="username"
              autoComplete="username"
              autoFocus={!signingUp}
            />
          </FormControl>
          {signingUp && (
            <div className={classes.nameContainer}>
              <FormControl margin="normal" required className={classes.nameInput}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input
                  value={firstName}
                  onChange={updateFirstName}
                  id="firstName"
                  name="firstName"
                  autoComplete="firstName"
                />
              </FormControl>
              <FormControl margin="normal" required className={classes.nameInput}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input
                  value={lastName}
                  onChange={updateLastName}
                  id="lastName"
                  name="lastName"
                  autoComplete="lastName"
                />
              </FormControl>
            </div>
          )}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              value={password}
              onChange={updatePassword}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign {signingUp ? 'up' : 'in'}
          </Button>
        </form>
      </Paper>
    </main>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { authLogin, authSignup }
)(withStyles(styles)(Register));
