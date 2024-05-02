import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('App renders Markdown and Preview', async () => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
  render(<App />);
  expect(screen.getByTestId('preview')).toBeInTheDocument();
  expect(screen.getByTestId('markdown')).toBeInTheDocument();

  act(() => {
    window.innerWidth = 1000;
    window.dispatchEvent(new Event('resize'));
  });

  await screen.findByTestId('markdown');
  await screen.findByTestId('preview');

  expect(screen.getByTestId('markdown')).toBeInTheDocument();
  expect(screen.getByTestId('preview')).toBeInTheDocument();
});
