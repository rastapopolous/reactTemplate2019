import React from 'react';
import { shallow } from 'enzyme';
import StatefulComponent from './StatefulComponent';



describe('StatefulComponent', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<StatefulComponent />));
  
  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
