import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function solveQuadratic(a: number, b: number, c: number): number[] | string {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return "No real solutions";
  }

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const x1 = (-b + sqrtDiscriminant) / (2 * a);
  const x2 = (-b - sqrtDiscriminant) / (2 * a);

  return [x1, x2];
}


