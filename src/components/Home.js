import React, { Component } from 'react';
import Profile from './Profile';
import Appbar from './AppBar';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

export class Home extends Component {

    render() {
        return (
            <div>
                <Appbar />
                <Typography component="h1" variant="h1" gutterBottom>
                    Home
                </Typography>
                <Profile username={this.props.username}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
		username: state.user.username
	};
}
  
export default connect(mapStateToProps)(Home);