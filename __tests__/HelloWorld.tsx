import React from 'react';
import renderer from 'react-test-renderer';
jest.mock('NativeAnimatedHelp');
import { Hello } from '../components/Hello';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<Hello name="World" enthusiasmLevel={1} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});