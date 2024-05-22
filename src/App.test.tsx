import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { useLocalStorage } from './hooks/useLocalStorage';
import userEvent from '@testing-library/user-event';

jest.mock('./hooks/useLocalStorage');

describe('App Component', () => {
  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      value: 'hello',
      setItem: jest.fn()
    });
  });

  test('renders Editor and Preview', async () => {
    render(<App />);

    expect(screen.getByTestId('preview')).toBeInTheDocument();
    expect(screen.getByTestId('editor')).toBeInTheDocument();
  });


  test('preview is rendering the correct input text', async () => {
    render(<App />);

    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textArea).toBeInTheDocument();
    const inputText = 'hello';
    await userEvent.type(textArea, inputText);

    await waitFor(() => {
      const previewComponent = screen.getByTestId('preview');
      expect(previewComponent).toBeInTheDocument();
      expect(previewComponent).toHaveTextContent(inputText);
    });
  });
});
