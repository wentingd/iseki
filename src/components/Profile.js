import React, { Component } from 'react';
import { Button, TextField, Paper, Typography } from '@material-ui/core';


class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: 'guest'
        }
    }
    
    render() {
        return (
            <Typography>
                logged in as : {this.state.username}
            </Typography>
        );
    }


}

export default Profile;