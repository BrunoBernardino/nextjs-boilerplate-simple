import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

const defaultProps = {
  onClick: () => {},
};

describe('Button', () => {
  it('renders the button without errors', () => {
    const tree = renderer
      .create(<Button {...defaultProps}>Hello</Button>)
      .toJSON();
    expect(tree.type).toBe('button');
    expect(tree.children.length).toBe(1);
    expect(tree.children[0]).toBe('Hello');
  });

  it('renders the button as expected', () => {
    const tree = renderer
      .create(<Button {...defaultProps}>Hello</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
