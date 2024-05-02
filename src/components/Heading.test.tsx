import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Heading from './Heading';

describe('Heading component', () => {
  test('renders edit mode', async () => {
    const onClickMock = jest.fn();

    render(
      <Heading onIconClick={onClickMock} mode="edit">
        Markdown
      </Heading>
    );

    const editIcon = screen.getByTestId('editIcon');
    await userEvent.click(editIcon);

    expect(screen.getByRole('heading', { name: /markdown/i })).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalled();
    expect(editIcon).toBeInTheDocument();
  });

  test('renders preview mode', async () => {
    const onClickMock = jest.fn();

    render(
      <Heading onIconClick={onClickMock} mode="preview">
        Preview
      </Heading>
    );

    const previewIcon = screen.getByTestId('previewIcon');
    await userEvent.click(previewIcon);

    expect(screen.getByRole('heading', { name: /preview/i })).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalled();
    expect(previewIcon).toBeInTheDocument();
  });
});
