import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header title', () => {
  render(<Header />);
  const pageTitle = screen.getAllByRole("heading");
  expect(pageTitle[0]).toHaveTextContent("Insta Gallery");
  expect(pageTitle[1]).toHaveTextContent("Pictures");
});
