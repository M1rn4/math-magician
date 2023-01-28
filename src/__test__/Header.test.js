import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../functionBased/components/Header';

test('match home snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
