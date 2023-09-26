import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

test('renders navbar', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  const logo = screen.getByText(/Himalayan Spice Haven/i);
  const home = screen.getByText(/Home/i);
  const about = screen.getByText(/About Us/i);
  const menu = screen.getByText(/Menu/i);
  const contact = screen.getByText(/Contact Us/i);
  expect(logo).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(menu).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});