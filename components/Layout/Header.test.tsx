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
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml.includes('<a href="/ssr">SSR</a>')).toEqual(true);
    expect(wrapperHtml.includes('<a href="/sg">SG</a>')).toEqual(true);
  });

  // While this test works and passes, jest returns an error exit code erroneously, similarly to https://github.com/facebook/react/issues/20568 even with act() in it.
  // it('renders the Header as expected', () => {
  //   const tree = renderer.create(<Header />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
