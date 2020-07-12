import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

import Footer from './Footer';

expect.extend(enzymify());

describe('Footer', () => {
  it('renders the Footer without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('Link').length).toEqual(0);
    expect(
      wrapper.find('a[href^="https://github.com/BrunoBernardino"]').length,
    ).toEqual(1);
  });

  it('renders the footer as expected', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
