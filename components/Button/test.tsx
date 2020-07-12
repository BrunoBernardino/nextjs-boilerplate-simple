import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

import Button from './index';

expect.extend(enzymify());

const defaultProps = {
  onClick: () => {},
};

describe('Button', () => {
  it('renders the button without errors', () => {
    const wrapper = shallow(<Button {...defaultProps}>Hello</Button>);
    expect(wrapper.first().text()).toBe('Hello');
  });

  it('renders the button as expected', () => {
    const tree = renderer
      .create(<Button {...defaultProps}>Hello</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
