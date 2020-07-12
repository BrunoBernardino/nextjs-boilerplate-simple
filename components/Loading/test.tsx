import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

import Loading from './index';

expect.extend(enzymify());

describe('Loading', () => {
  it('renders the loading hidden', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.first().hasClass('Loading--show')).toBe(false);
  });

  it('renders the loading visible', () => {
    const wrapper = shallow(<Loading isShowing />);
    expect(wrapper.first().hasClass('Loading--show')).toBe(true);
  });

  it('renders the loading as expected', () => {
    const tree = renderer.create(<Loading isShowing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
