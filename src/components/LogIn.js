import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchUser, login, getUserConfig, fetchUserConfig,
} from '../store/actions';

const Wrapper = styled.section`
  padding: 1.5em;
  background: papayawhip;
`;

function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleClick = async(e) => {
    const payload = {
      username: state.username,
      password: state.password,
    };
    console.log(payload);
    const foundUser = await fetchUser(payload);
    if (foundUser) {
      props.login(foundUser);
      props.getUserConfig(await fetchUserConfig(payload));
    }
  };

  const onFieldChange = (fieldName) => (e) => {
    setState({
      ...state,
      [fieldName]: e.target.value,
    });
  };

  return (
      <Wrapper>
          <Typography variant="h4">
            iSeki
          </Typography>
          <TextField
            id="Login-username-input"
            label="email"
            value={state.username}
            onChange={onFieldChange('username')}
            margin="normal"
            />
          <br/>
          <TextField
            id="Login-password-input"
            type="password"
            label="password"
            value={state.password}
            onChange={onFieldChange('password')}
            autoComplete="current-password"
            margin="normal"
            />
          <br/>
          <Button
            label="Submit"
            color="primary"
            onClick={handleClick}>
            submit
        </Button>
      </Wrapper>
  );
}

const mapDispatchToProps = { login, getUserConfig };

export default connect(null, mapDispatchToProps)(Login);
