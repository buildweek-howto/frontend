import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authSignup } from '../actions';
import SignupForm from './SignupForm';
import RegisterRedirect from './RegisterRedirect';

const Signup = ({ authSignup, history: { push, replace } }) => {
  const [email, setEmail, updateEmail] = useInput();
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [firstName, setFirstName, updateFirstName] = useInput();
  const [lastName, setLastName, updateLastName] = useInput();
  const loggedIn = localStorage.getItem('userToken');

  const handleSubmit = e => {
    e.preventDefault();
    authSignup({ email, username, password, firstName, lastName }).then(() => {
      setEmail(''); setUsername(''); setPassword('');
      setFirstName(''); setLastName('');
      push('/dashboard');
    });
  };

  if (loggedIn) setTimeout(() => replace('/dashboard'), 10000);

  return loggedIn ? (
    <RegisterRedirect />
  ) : (
    <SignupForm
      handleSubmit={handleSubmit}
      email={email}
      updateEmail={updateEmail}
      username={username}
      updateUsername={updateUsername}
      password={password}
      updatePassword={updatePassword}
      firstName={firstName}
      updateFirstName={updateFirstName}
      lastName={lastName}
      updateLastName={updateLastName}
    />
  );
};

export default connect(
  null,
  { authSignup }
)(Signup);
