import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Markdown from './Markdown';
import userEvent from '@testing-library/user-event';

describe('Markdown component', () => {
  test('Markdown Renders', async () => {
    const iconClickMock = jest.fn();

    render(<Markdown onIconClick={iconClickMock} />);
    expect(screen.getByTestId('markdown')).toBeInTheDocument();
    expect(screen.getByTestId('heading')).toHaveTextContent(/markdown/i);

    const icon = screen.getByTestId('editIcon');
    await userEvent.click(icon);
    expect(iconClickMock).toHaveBeenCalledTimes(1);
  });
});
