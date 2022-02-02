import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header.component';
import LogoImage from '../../logo.svg';

describe('Testing the component elements', () => {
  test('Logo name is rendered', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/Ecommerce Store/i);
    expect(title).toBeInTheDocument();
  });
  test('Logo image is rendered', () => {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText('logo');
    expect(logo).toHaveAttribute('src', LogoImage);
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
