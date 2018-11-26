import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Profile from './Profile';
import ItemList from './ItemList';

export class Home extends Component {

    render() {
        return (
            <div style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item>
                        <Profile username={this.props.username}/>
                    </Grid>
                    <Grid item>
                        <ItemList
                            label='My Stations'
                            type="stations"
                            listContents={this.props.config.stations ? this.props.config.stations : null}
                            />
                    </Grid>
                    <Grid item>
                        <ItemList
                            label='My Lines'
                            type="trainlines"
                            listContents={this.props.config.trainlines ? this.props.config.trainlines : null}
                            />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        username: state.user.username,
        config: state.user.config
	};
}
  
export default connect(mapStateToProps)(Home);