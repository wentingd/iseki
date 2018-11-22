import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TrainsPage from './components/TrainsPage'
import Appbar from './components/Appbar'

export default (store, history) => {

	return(
		<div>
			<BrowserRouter>
				<div>
					<Appbar />
					<Route exact path='/' component={HomePage} />
					<Route exact path='/trains' component={TrainsPage} />
				</div>
			</BrowserRouter>
		</div>
	)	

}