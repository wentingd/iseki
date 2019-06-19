import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  orange, blue, red, grey,
} from '@material-ui/core/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee, faHome, faStar,
} from '@fortawesome/free-solid-svg-icons';
import LogIn from './LogIn';
import Routes from './Routes';

library.add(
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee, faHome, faStar,
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
  background-color: #dbe3e5;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='10' viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 6H6v4H4V6H2V4h2V0h2v4h10V0h2v4h2v2h-2v4h-2V6z' fill='%2392acab' fill-opacity='0.45' fill-rule='evenodd'/%3E%3C/svg%3E");
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
