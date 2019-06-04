import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TrainsPage from './TrainsPage';
import AppBar from './AppBar';

function Routes(store, history) {
  return (
		<BrowserRouter>
			<React.Fragment>
				<AppBar />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/trains' component={TrainsPage} />
			</React.Fragment>
		</BrowserRouter>
	);
}

export default Routes;
