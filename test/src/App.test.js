import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app correctly', async () => {
  render(<App />);
  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
});