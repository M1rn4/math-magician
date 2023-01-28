import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../functionBased/components/Home';

test('match home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
