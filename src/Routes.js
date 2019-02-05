import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TrainsPage from './components/TrainsPage'
import TestPage from './components/TestPage'
import AppBar from './components/AppBar'

export default (store, history) => {

	return(
		<div>
			<BrowserRouter>
				<div>
					<AppBar />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/trains' component={TrainsPage} />
					<Route exact pth='/test' component={TestPage} />
				</div>
			</BrowserRouter>
		</div>
	)	

}