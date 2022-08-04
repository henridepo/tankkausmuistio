import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
    render(<Router>
            <Item data={{
            id: "1234",
            type: "Sähkö",
            receiver: "Helen",
            amount: 89,
            paymentDate: "2022-01-06",
            periodStart: "",
            periodEnd: ""
          }} />
          </Router>);
    const type = screen.getByText(/Sähkö/i);
    expect(type).toBeInTheDocument();
    const receiver = screen.getByText(/Helen/i);
    expect(receiver).toBeInTheDocument();
});