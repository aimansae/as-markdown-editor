import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};
const Heading = ({ children }: HeadingProps) => {
  return (
    <header>
      <h1 className="mb-2 text-xl font-bold uppercase tracking-wider">{children}</h1>
    </header>
  );
};

export default Heading;
