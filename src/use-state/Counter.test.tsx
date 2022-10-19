import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./Counter";

describe('Counter', () => {
  it('renders count', async () => {
    render(<Counter />);
    const counterElement = await screen.findByTestId('counter');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement.textContent).toBe('0');
  });

  it('increases count', async () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter');
    const incrementButton = screen.getByText('Inc');

    expect(counterElement.textContent).toBe('0');

    fireEvent.click(incrementButton);

    expect(counterElement.textContent).toBe('1');
  });
})