import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import App from "./components/App"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Home from "./components/Home"

export default (store, history) => {

	const requireAuth = (nextState, replace, callback) => {
		const { user: { authenticated } } = store.getState()		
		if (!authenticated) {
			// Takes a Location object
			// https://github.com/mjackson/history/blob/master/docs/Location.md
			replace({
				pathname: "/login",
				state: { nextPathname: nextState.location.pathname }
			})
		}
		callback()
	}	

	return( 
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="login" component={Login} />
				<Route path="profile" component={Profile} onEnter={requireAuth} />
			</Route>	
		</Router>	
	)	

}