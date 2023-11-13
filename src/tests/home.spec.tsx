import { render, screen } from '@testing-library/react';

import Home from '../pages/index';

jest.mock('next/head', () => ({ children }: { children: React.ReactNode }) => children);

describe('Home Page', () => {
  it('renders with the correct title', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome to Peek & Cloppenburg/i)).toBeInTheDocument();

    expect(document.title).toBe('Home | Peek & Cloppenburg');
  });
});