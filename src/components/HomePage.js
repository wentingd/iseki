import React, { Component } from 'react';
import Profile from './Profile';
import StationsInfoCard from './StationsInfoCard';
import Appbar from './Appbar';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

const mockMyStations = [
    { name: 'totsuka', fav: true },
    { name: 'shinagawa' }
]

export class Home extends Component {

    render() {
        return (
            <div style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item>
                        <Profile username={this.props.username}/>
                    </Grid>
                    <Grid item>
                    <StationsInfoCard
                        label='My Stations'
                        stations={mockMyStations}
                        />
                    </Grid>
                </Grid>
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