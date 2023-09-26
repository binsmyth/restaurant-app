import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact', () => {
  render(<Contact/>);
  const contact = screen.getByText(/Contact Us/i);
  expect(contact).toBeInTheDocument();
});