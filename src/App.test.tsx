import { render, screen } from '@testing-library/react';
import App from './App';

test('Main renders', () => {
  render(<App />);
  const textElement = screen.getByRole('heading', { level: 1 });
  expect(textElement.textContent).toBe('Markdown');
});
