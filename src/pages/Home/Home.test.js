import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);
  const home = screen.getByText(/Welcome to our restaurant/i);
  expect(home).toBeInTheDocument();
});