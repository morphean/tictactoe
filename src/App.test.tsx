import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

test('renders correct title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's play Tic Tac Toe/i);
  expect(linkElement).toBeInTheDocument();
});

describe( 'it matches snapshot', () => {
  it('Matches snapshot', ()=> {
    const appView = renderer.create(<App/>).toJSON()
    expect(appView).toMatchSnapshot();
  })
})
