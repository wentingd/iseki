import React from 'react';
import TestPage from './TestPage';

it('should render the same', () => {
  const wrapper = shallow(<TestPage />);
  expect(wrapper).toMatchSnapshot();
});
