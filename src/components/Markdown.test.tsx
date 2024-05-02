import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Markdown from './Markdown';
import userEvent from '@testing-library/user-event';

describe('Markdown component', () => {
  test('textarea input works', async () => {
    const inputMock = 'WTF';
    const onInputChangeMock = jest.fn();
    const onIconClickMock = jest.fn();

    render(
      <Markdown input={inputMock} onInputChange={onInputChangeMock} onIconClick={onIconClickMock} />
    );

    const textarea = screen.getByLabelText(/enter text here/i);
    await userEvent.type(textarea, 'hello');

    expect(textarea).toBeInTheDocument();

    expect(onInputChangeMock).toHaveBeenCalledWith('WTFh');
    expect(onInputChangeMock).toHaveBeenCalledWith('WTFe');
    expect(onInputChangeMock).toHaveBeenCalledWith('WTFl');
    expect(onInputChangeMock).toHaveBeenCalledWith('WTFl');
    expect(onInputChangeMock).toHaveBeenCalledWith('WTFo');
  });
});
