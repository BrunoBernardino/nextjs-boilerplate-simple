import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';

import Header from './Header';

// While these tests works and pass, jest returns an error exit code erroneously, similarly to https://github.com/facebook/react/issues/20568 even with act() in it.
describe.skip('Header', () => {
  it('renders the Header without errors', async () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.type).toBe('header');
    expect(tree.children.length).toBe(2);
    // expect(tree.find('a').length).toBe(1);
    // expect(tree.find('a').children.length).toBe(1);
    // expect(tree.find('a').children[0].props.href).toBe('/ssr');
  });

  it('renders the Header as expected', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
