import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import initStore from "./store";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App user={store.getState('user')}/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();