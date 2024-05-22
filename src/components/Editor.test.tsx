import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Editor from './Editor';
import userEvent from '@testing-library/user-event';
import { useLocalStorage } from '../hooks/useLocalStorage';

jest.mock('../hooks/useLocalStorage');

describe('Editor component', () => {
  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockReturnValue({
      value: 'hello',
      setItem: jest.fn()
    });
  });

  const iconClickMock = jest.fn();
  const iconInputChangeMock = jest.fn();

  test('Editor Renders', async () => {
    render(<Editor onIconClick={iconClickMock} input="" onInputChange={iconInputChangeMock} />);
    expect(screen.getByTestId('editor')).toBeInTheDocument();
    expect(screen.getByTestId('heading')).toHaveTextContent(/editor/i);

    const icon = screen.getByTestId('editIcon');
    await userEvent.click(icon);
    expect(iconClickMock).toHaveBeenCalledTimes(1);
  });

  test('textarea works', async () => {
    render(<Editor onIconClick={iconClickMock} input="" onInputChange={iconInputChangeMock} />);

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

    expect(textarea).toBeInTheDocument();
    await userEvent.type(textarea, 'hello');

    expect(iconInputChangeMock).toHaveBeenCalled();
  });
});
