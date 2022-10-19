import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get(url: string) {
    if (url.includes('random')) {
      return Promise.resolve({
        data: {
          value: 'Ahoj'
        }
      })
    } else {
      return Promise.resolve({
        data: ['random', 'engineering']
      })
    }
  }
}));

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/categories/i);
  expect(linkElement).toBeInTheDocument();
});
