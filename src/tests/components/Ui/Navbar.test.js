import { renderMatches } from "react-router-dom";
import '../../../setupTests';
import { render, screen } from '@testing-library/react';
import Navbar from "../../../components/Ui/Navbar.component";
describe('Testing Navbar', () => {
  test('should show logo', () => {
    render(<Navbar />);
    const img = screen.getByRole('logo');
    expect(img).toHaveAttribute('src', 'logo.png');
    expect(img).toHaveAttribute('alt', 'Logo');
  });
  
})