import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Profile from './Profile';
import ItemList from './ItemList';

function HomePage(props) {
  return (
    <div style={{ padding: 20 }}>
        <Grid container spacing={3}>
            <Grid item>
                <Profile username={props.username}/>
            </Grid>
            <Grid item>
                <ItemList
                  label='My Stations'
                  type='stations'
                  listContents={props.config.stations ? props.config.stations : null}
                  />
            </Grid>
            <Grid item>
                <ItemList
                  label='My Lines'
                  type='trainlines'
                  listContents={props.config.trainlines ? props.config.trainlines : null}
                  />
            </Grid>
        </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    config: state.user.config,
  };
};

export default connect(mapStateToProps)(HomePage);
