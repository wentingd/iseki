import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  orange, blue, red, grey,
} from '@material-ui/core/colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee, faHome, faStar, faUserCircle, faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';
import LogIn from './LogIn';
import Register from './Register';
import ProtectedRoutes from './ProtectedRoutes';

library.add(
  faTrain, faAngleDoubleRight, faCheckSquare, faCoffee, faHome, faStar, faUserCircle, faTicketAlt,
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

function App(props) {
  const { isAuthenticated } = props.user;
  return (
    <MuiThemeProvider theme={mainTheme}>
      <div className='App'>
        {
          isAuthenticated
            ? <ProtectedRoutes/>
            : <Router>
                <Switch>
                  <Route exact path='/' component={LogIn} />
                  <Route exact path='/register' component={Register} />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
          }
      </div>
      </MuiThemeProvider>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
