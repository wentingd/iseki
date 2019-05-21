import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {};
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App store={mockStore(initialState)} />);
});

it('should render', () => {
  expect(wrapper).toMatchSnapshot();
});
