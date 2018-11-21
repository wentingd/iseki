import React, { Component } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import { auth } from '../store/actions';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handleClick(e){
        const apiBaseUrl = process.env.THON_API_BASE;
        const self = this;
        let payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        auth(payload);
        }
    
    render() {
        return (
            <Paper>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                <br/>
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                <br/>
                <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </Paper>
    );
  }
}
const style = {
 margin: 15,
};

export default Login;