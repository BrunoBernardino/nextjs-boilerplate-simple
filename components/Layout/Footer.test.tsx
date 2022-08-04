import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';

import Footer from './Footer';

describe('Footer', () => {
  it('renders the Footer without errors', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree.type).toBe('footer');
    expect(tree.children.length).toBe(2);
    // expect(tree.find('a').length).toBe(1);
    // expect(tree.find('a').children.length).toBe(1);
    // expect(tree.find('a').children[0].props.href).toBe(
    //   'https://github.com/BrunoBernardino',
    // );
  });

  it('renders the footer as expected', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
