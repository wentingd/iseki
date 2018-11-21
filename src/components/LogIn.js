import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { login } from '../store/actions';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleClick() {
        return function(event){
            let payload = {
                "username": this.state.username,
                "password": this.state.password
            }
            login(payload);
        }
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }
    
    render() {
        return (
            <div>
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
                    onClick={this.handleClick().bind(this)}>
                    submit
                </Button>
            </div>
    );
  }
}

export default Login;