import React, { useState } from 'react';
import {
  Button, TextField, Typography, Grid, Icon, Divider,
} from '@material-ui/core';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fetchUser, login, getUserConfig, fetchUserConfig,
} from '../store/actions';

const Wrapper = styled.section`
  padding: 3.5em;
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
        <Grid container
        spacing={1}
        direction='column'
        justify='space-between'
        alignItems='center'>
          <Grid item xs={12}>
            <Typography variant="h3">iSeki</Typography>
          </Grid>
          <Grid item xs={12}>
            <Icon color='primary'>
              <FontAwesomeIcon icon='train' size='5x' variant='outlined' />
            </Icon>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Login-email-input"
              label="email"
              value={state.email}
              onChange={onFieldChange('email')}
              margin="normal"
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Login-password-input"
              type="password"
              label="password"
              value={state.password}
              onChange={onFieldChange('password')}
              autoComplete="current-password"
              margin="normal"
              />
          </Grid>
          <Grid item xs={12}>
            <Button
              label='Submit'
              color='primary'
              variant='outlined'
              onClick={handleClick}>
              submit
            </Button>
          </Grid>
          <br/>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              Do not have an account yet? Register now! :)
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
  );
}

const mapDispatchToProps = { login, getUserConfig };

export default connect(null, mapDispatchToProps)(Login);
