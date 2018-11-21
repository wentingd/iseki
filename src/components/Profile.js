import React, { Component } from 'react';

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username
        }
    }
    
    render() {
        return (
            <h2>
                logged in as : {this.state.username}
            </h2>
        );
    }


}

export default Profile;