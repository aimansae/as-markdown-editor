import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Markdown from './Markdown';
import userEvent from '@testing-library/user-event';

describe('Markdown component', () => {
  test('textarea input works', async () => {
    const inputMock = 'input';
    const onInputChangeMock = jest.fn();
    const onIconClickMock = jest.fn();

    render(
      <Markdown input={inputMock} onInputChange={onInputChangeMock} onIconClick={onIconClickMock} />
    );

    const textarea = screen.getByLabelText(/enter text here/i);
    await userEvent.type(textarea, 'new input',{ delay: 50 });

    expect(textarea).toBeInTheDocument();
    await waitFor(() => {
      expect(onInputChangeMock).toHaveBeenCalledWith('inputnew input');
    });

    expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  });
});
