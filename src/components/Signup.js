import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authSignup } from '../actions';
import SignupForm from './SignupForm';

const Signup = ({ authSignup, history: { push } }) => {
  const [email, setEmail, updateEmail] = useInput();
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [firstName, setFirstName, updateFirstName] = useInput();
  const [lastName, setLastName, updateLastName] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    authSignup({ email, username, password, firstName, lastName }).then(() => {
      setEmail(''); setUsername(''); setPassword('');
      setFirstName(''); setLastName('');
      push('/dashboard');
    });
  };

  return (
    <SignupForm
      handleSubmit={handleSubmit}
      email={email} updateEmail={updateEmail}
      username={username} updateUsername={updateUsername}
      password={password} updatePassword={updatePassword}
      firstName={firstName} updateFirstName={updateFirstName}
      lastName={lastName} updateLastName={updateLastName}
    />
  );
};

export default connect(
  null,
  { authSignup }
)(Signup);
