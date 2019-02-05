import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import Routes from '../Routes'
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange, indigo, red, grey } from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: grey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  stepper: {
    iconColor: indigo
  }
});

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
      <MuiThemeProvider theme={mainTheme}>
        <div className="App">
          {
            isAuthenticated ? 
              <Routes/> :
              <FullPageWrapper>
                <Paper>
                  <LogIn />
                </Paper>
              </FullPageWrapper>
            }
        </div>
        </MuiThemeProvider>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps)(App);
