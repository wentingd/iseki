/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available everywhere
global.shallow = shallow;
global.render = render;
global.mount = mount;
