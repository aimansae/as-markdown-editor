import { MouseEventHandler, ReactNode } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';

type HeadingProps = {
  children: ReactNode;
  onIconClick: MouseEventHandler<SVGElement>;
  mode: 'edit' | 'preview';
};

const Heading = ({ children, onIconClick, mode }: HeadingProps) => {
  return (
    <header
      data-testid="heading"
      className="flex items-center justify-between bg-gray-900 p-2 text-gray-400 hover:text-white">
      <h1 className="text-xl font-bold uppercase tracking-wider">{children}</h1>
      {mode === 'edit' && (
        <button className="block sm:hidden">
          <AiOutlineEye data-testid='editIcon' className="cursor-pointer text-xl" onClick={onIconClick} />
        </button>
      )}
      {mode === 'preview' && (
        <button className="block sm:hidden">
          <MdEdit data-testid='previewIcon' className="cursor-pointer text-xl" onClick={onIconClick} />
        </button>
      )}
    </header>
  );
};
export default Heading;
