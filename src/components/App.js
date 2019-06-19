import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  orange, blue, indigo, red, grey,
} from '@material-ui/core/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import LogIn from './LogIn';
import Routes from './Routes';

library.add(
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee,
);

const mainTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: blue,
    action: red,
    error: red,
    disabled: grey,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
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

function App(props) {
  const { isAuthenticated } = props.user;
  return (
    <MuiThemeProvider theme={mainTheme}>
      <div className="App">
        {
          isAuthenticated
            ? <Routes/>
            : <FullPageWrapper>
                <Paper>
                  <LogIn />
                </Paper>
              </FullPageWrapper>
          }
      </div>
      </MuiThemeProvider>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
