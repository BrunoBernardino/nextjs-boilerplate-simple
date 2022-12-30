import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './index';

describe('Loading', () => {
  it('renders the loading hidden', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree.type).toBe('div');
    expect(tree.children.length).toBe(1);
    expect(tree.props.className.includes('Loading--show')).toBe(false);
  });

  it('renders the loading visible', () => {
    const tree = renderer.create(<Loading isShowing />).toJSON();
    expect(tree.type).toBe('div');
    expect(tree.children.length).toBe(1);
    expect(tree.props.className.includes('Loading--show')).toBe(true);
  });

  it('renders the loading as expected', () => {
    const tree = renderer.create(<Loading isShowing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
