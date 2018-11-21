import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Login from './LogIn';
import Profile from './Profile';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: this.props.user.isAuthenticated,
      username: this.props.user.username
    }
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {
              this.state.isAuthenticated ?  
              <Profile username={this.state.username}/> :
              <Paper>
                <Login />
              </Paper>
            }
            </header>
        </div>
    );
  }

}

export default App;
