import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TrainsPage from './TrainsPage';
import AppBar from './AppBar';

function ProtectedRoutes(props) {
  return (
  <Router>
    <React.Fragment>
      <AppBar />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/trains' component={TrainsPage} />
    </React.Fragment>
  </Router>
  );
}

export default ProtectedRoutes;
