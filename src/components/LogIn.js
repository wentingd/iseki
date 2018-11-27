import React, { Component } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchUser, login, getUserConfig } from '../store/actions';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1.5em;
  background: papayawhip;
`;

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick() {
        return async (event) => {
            let payload = {
                "username": this.state.username,
                "password": this.state.password
            };
            const foundUser = await fetchUser(payload);
            this.props.login(foundUser);
            
            // this.props.getUserConfig(foundUser);
        }
    }

    onFieldChange(fieldName) {
        return (event) => {
            this.setState({[fieldName]: event.target.value});
        }
    }
    
    render() {
        return (
            <Wrapper>
                <Typography variant="h4">
                    iSeki
                </Typography>
                <TextField
                    id="Login-username-input"
                    label="email"
                    value={this.state.username}
                    onChange={this.onFieldChange('username').bind(this)}
                    margin="normal"
                    />
                <br/>
                <TextField
                    id="Login-password-input"
                    type="password"
                    label="password"
                    value={this.state.password}
                    onChange={this.onFieldChange('password').bind(this)}
                    autoComplete="current-password"
                    margin="normal"
                    />
                <br/>
                <Button
                    label="Submit"
                    color="primary"
                    onClick={this.handleClick().bind(this)}>
                    submit
                </Button>
            </Wrapper>
    );
  }
}

const mapDispatchToProps = { login, getUserConfig };
  
export default connect(null, mapDispatchToProps)(Login);