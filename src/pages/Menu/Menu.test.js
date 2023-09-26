import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders menu', () => {
  render(<Menu/>);
  const menu = screen.getByText(/Our Menu/i);
  const appetisers = screen.getByText(/Appetiser/i);
  expect(menu).toBeInTheDocument();
  expect(appetisers).toBeInTheDocument();
});