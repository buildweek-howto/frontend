import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authSignup } from '../actions';

const Signup = () => {
  const [email, setEmail, updateEmail] = useInput();
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();
  const [firstname, setFirstname, updateFirstname] = useInput();
  const [lastname, setLastname, updateLastname] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    authSignup({ email, username, password, firstname, lastname });
  };

  return <form onSubmit={handleSubmit} />;
};

export default connect(
  null,
  { authSignup }
)(Signup);
