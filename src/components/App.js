import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import Login from './Login';
import Routes from '../Routes';
import styled from 'styled-components';

const FullPageWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    };
  };

  render() {
    let isAuthenticated = this.props.user.isAuthenticated;
    return (
        <div className="App">
          {
            isAuthenticated ? 
              <Routes/> :
              <FullPageWrapper>
                <Paper>
                  <Login />
                </Paper>
              </FullPageWrapper>
            }
        </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps)(App);
