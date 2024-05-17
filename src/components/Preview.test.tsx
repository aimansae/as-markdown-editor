import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Preview from './Preview';
import userEvent from '@testing-library/user-event';

describe('Preview component', () => {
  test('preview renders', async () => {
    const iconClickMock = jest.fn();
    render(<Preview input="" onIconClick={iconClickMock} />);

    expect(screen.getByTestId('preview')).toBeInTheDocument();
    expect(screen.getByTestId('heading')).toHaveTextContent(/preview/i);

    const icon = screen.getByTestId('previewIcon');
    await userEvent.click(icon);

    expect(iconClickMock).toHaveBeenCalledTimes(1);
  });
});
