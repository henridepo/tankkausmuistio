import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders header with text', () => {
    render(<Header />);
    const text = screen.getByText(/Tankkausmuistio/i);
    expect(text).toBeInTheDocument();
});