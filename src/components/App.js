import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, red, indigo } from '@material-ui/core/colors';
import Login from './LogIn';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
