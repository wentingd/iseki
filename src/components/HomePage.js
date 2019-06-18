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
                <Profile email={props.email}/>
            </Grid>
            <React.Fragment>
              <Grid item>
                <ItemList
                  label='My Stations'
                  type='stations'
                  listContents={props.config ? props.config.stations : []}
                  />
                </Grid>
                <Grid item>
                  <ItemList
                    label='My Lines'
                    type='trainlines'
                    listContents={props.config ? props.config.trainlines : []}
                    />
                </Grid>
              </React.Fragment>
        </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    config: state.user.config,
  };
};

export default connect(mapStateToProps)(HomePage);
