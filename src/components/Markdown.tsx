import { MouseEventHandler } from 'react';
import Heading from './Heading';

type MarkdownProps = {
  onIconClick: MouseEventHandler<HTMLButtonElement>;
};

const Markdown = ({ onIconClick }: MarkdownProps) => {
  return (
    <div data-testid="markdown" className="flex flex-1 flex-col border-r-2 border-gray-300">
      <Heading onIconClick={onIconClick} mode="edit">
        Markdown
      </Heading>
    </div>
  );
};
export default Markdown;
