import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authLogin } from '../actions';

const Login = () => {
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    authLogin({ username, password });
  };

  return <form onSubmit={handleSubmit} />;
};

export default connect(
  null,
  { authLogin }
)(Login);
