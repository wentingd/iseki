import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './components/Home'

export default (store, history) => {

	// const requireAuth = (nextState, replace, callback) => {
	// 	const { user: { isAuthenticated } } = store.getState()		
	// 	if (!isAuthenticated) {
	// 		// Takes a Location object
	// 		// https://github.com/mjackson/history/blob/master/docs/Location.md
	// 		replace({
	// 			pathname: "/login",
	// 			state: { nextPathname: nextState.location.pathname }
	// 		})
	// 	}
	// 	callback()
	// }

	return( 
		<BrowserRouter>
		<div>
		  <Route exact path='/' component={Home} />
		</div>
	  </BrowserRouter>
	)	

}