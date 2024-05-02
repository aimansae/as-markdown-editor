import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import Markdown from './components/Markdown';
describe('App Component', () => {
  test('renders Markdown and Preview', async () => {
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

  test('textarea input works', async () => {
    jest.mock('./hooks/useLocalStorage', () => ({
      useLocalStorage: jest.fn(() => ({ value: '', setItem: jest.fn() }))
    }));
    const onInputChangeMock = jest.fn();

    render(<Markdown input="OLD" onInputChange={onInputChangeMock} onIconClick={jest.fn()} />);

    const textarea = screen.getByLabelText(/enter text here/i) as HTMLTextAreaElement;
    await userEvent.type(textarea, 'new');
    console.log('Textarea value after change:', textarea.value);
    expect(onInputChangeMock).toHaveBeenCalledWith('OLDn');
    expect(onInputChangeMock).toHaveBeenCalledWith('OLDe');
    expect(onInputChangeMock).toHaveBeenCalledWith('OLDw');
  });
});
