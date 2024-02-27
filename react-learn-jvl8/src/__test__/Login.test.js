import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('checking component loaded', ()=>{
    //steps for testing element loaded
    render(<Login />)
    expect(screen.getByText(/Login/)).toBeInTheDocument();;
})