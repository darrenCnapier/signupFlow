import React from 'react';
import { shallow } from '../../setup/setupEnzyme';
import App from '../../client/App.jsx';

beforeEach(() => {
});

// this tests if the app is rendering the component
describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('renders the component', () => {
    expect(wrapper).toBeDefined();
  });
});