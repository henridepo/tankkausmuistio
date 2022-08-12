import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
    render(<Router>
            <Item data={{
            id: "1234",
            type: "Oma auto",
            receiver: "ABC",
            litres: 25,
            amount: 59,
            paymentDate: "2022-01-06",
          }} />
          </Router>);
    const type = screen.getByText(/Oma auto/i);
    expect(type).toBeInTheDocument();
    const receiver = screen.getByText(/ABC/i);
    expect(receiver).toBeInTheDocument();
});