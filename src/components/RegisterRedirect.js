import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};

const RegisterRedirect = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>Welcome back!</Typography>
      <Typography variant="body1" gutterBottom>
        You are already logged in and will be redirected back to the dashboard shortly.
      </Typography>
      <Typography variant="body2">
        If you are not redirected automatically, follow <Link color="error" component={RouterLink} to="/dashboard">this link</Link>.
      </Typography>
    </div>
  )
};

export default withStyles(styles)(RegisterRedirect);
