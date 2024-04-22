import { MouseEventHandler, ReactNode } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

type HeadingProps = {
  children: ReactNode;
  onIconClick: MouseEventHandler<SVGElement>;
};

const Heading = ({ children, onIconClick }: HeadingProps) => {
  return (
    <header className="flex items-center justify-between bg-gray-900 p-2 text-gray-400 hover:text-white">
      <h1 className="text-xl font-bold uppercase tracking-wider">{children}</h1>
      <AiOutlineEye className="cursor-pointer text-xl sm:hidden " onClick={onIconClick} />{' '}
    </header>
  );
};
export default Heading;
