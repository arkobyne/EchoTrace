// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchoTrace title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchoTrace/i);
    expect(titleElement).toBeInTheDocument();
});
