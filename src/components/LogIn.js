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
    email: '',
    password: '',
  });

  const handleClick = async() => {
    const found = await fetchUser({ ...state });
    if (found) {
      props.login(found);
      props.getUserConfig(await fetchUserConfig(found.id));
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
            id="Login-email-input"
            label="email"
            value={state.email}
            onChange={onFieldChange('email')}
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
