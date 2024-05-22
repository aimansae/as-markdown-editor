import { MouseEventHandler, ReactNode } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';

type HeadingProps = {
  children: ReactNode;
  onIconClick: MouseEventHandler<HTMLButtonElement>;
  mode: 'edit' | 'preview';
};

const Header = ({ children, onIconClick, mode }: HeadingProps) => {
  return (
    <header
      data-testid="heading"
      className="flex h-11 w-full items-center justify-between bg-gray-900 p-2 text-gray-400 hover:text-white">
      <h1 className="text-xl font-bold uppercase tracking-wider">{children}</h1>
      {mode === 'edit' && (
        <button
          className="block sm:hidden"
          onClick={onIconClick}
          aria-label="Switch to Preview mode">
          <AiOutlineEye
            data-testid="editIcon"
            className="transform cursor-pointer text-xl transition duration-300 hover:scale-110"
          />
        </button>
      )}
      {mode === 'preview' && (
        <button className="block sm:hidden" onClick={onIconClick} aria-label="Switch to Edit mode">
          <MdEdit
            data-testid="previewIcon"
            className="transform cursor-pointer text-xl transition duration-300 hover:scale-110"
          />
        </button>
      )}
    </header>
  );
};
export default Header;
