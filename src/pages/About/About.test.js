import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about', () => {
  render(<About />);
  const about = screen.getByText(/About Us!/i);
  expect(about).toBeInTheDocument();
});