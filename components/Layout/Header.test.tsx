import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme';

import Header from './Header';

expect.extend(enzymify());

describe('Header', () => {
  it('renders the Header without errors', async () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('Link[href="/ssr"]').length).toEqual(1);
    expect(wrapper.find('Link[href="/sg"]').length).toEqual(1);
  });

  // While this test works and passes, jest returns an error exit code erroneously, similarly to https://github.com/facebook/react/issues/20568 even with act() in it.
  // it('renders the Header as expected', () => {
  //   const tree = renderer.create(<Header />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
