import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authLogin } from '../actions';
import LoginForm from './LoginForm';
import RegisterRedirect from './RegisterRedirect';

const Login = ({ authLogin, history: { push, replace } }) => {
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const loggedIn = localStorage.getItem('userToken');

  const handleSubmit = e => {
    e.preventDefault();
    authLogin({ username, password }).then(() => {
      setUsername(''); setPassword('');
      push('/dashboard');
    });
  };

  if (loggedIn) setTimeout(() => replace('/dashboard'), 10000);

  return loggedIn ? (
    <RegisterRedirect />
  ) : (
    <LoginForm
      handleSubmit={handleSubmit}
      username={username}
      updateUsername={updateUsername}
      password={password}
      updatePassword={updatePassword}
    />
  );
};

export default connect(
  null,
  { authLogin }
)(Login);
