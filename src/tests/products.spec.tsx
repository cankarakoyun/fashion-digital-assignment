import { render, screen, act, fireEvent } from '@testing-library/react';

import ProductList from '../pages/productList';
import { ProductsMock } from './mock';

jest.mock('next/head', () => ({ children }: { children: React.ReactNode }) => children);

jest.mock('../hooks/useFilter', () => ({
  useFilter: jest.fn(() => []),
}));

jest.mock('../config', () => ({
  SORT_FILTERS: [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ],
}));

describe('ProductList Page', () => {

  it('renders without crashing', () => {
    render(<ProductList products={ProductsMock} error={false} />);
    expect(screen.getByText(/Product List/i)).toBeInTheDocument();
  });

  it('displays error component when there is an error', () => {
    render(<ProductList products={[]} error={true} />);
    expect(screen.getByText(/Error occured while getting the data./i)).toBeInTheDocument();
  });

  it('displays filters and products when data is available', () => {
    render(<ProductList products={ProductsMock} error={false} />);

    expect(screen.getByText(/Filter size/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by price/i)).toBeInTheDocument();
  });
});