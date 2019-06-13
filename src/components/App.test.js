import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();
const initialState = {};
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App store={mockStore(initialState)} />);
});

it('should render', () => {
  expect(wrapper).toMatchSnapshot();
});
