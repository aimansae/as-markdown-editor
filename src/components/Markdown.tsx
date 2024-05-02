import { MouseEventHandler } from 'react';
import Heading from './Heading';

type MarkdownProps = {
  input: string;
  onInputChange: (value: string) => void;
  onIconClick: MouseEventHandler<SVGElement>;
};

const Markdown = ({ input, onInputChange, onIconClick }: MarkdownProps) => {
  return (
    <div
      data-testid="markdown"
      className="flex flex-1 flex-col border-r-2 border-gray-300 sm:w-1/2">
      <Heading onIconClick={onIconClick} mode="edit">
        Markdown
      </Heading>
      <label htmlFor="textarea" className="sr-only">
        Enter text here
      </label>
      <div className="flex-1">
        <textarea
          autoFocus
          id="textarea"
          className="h-full w-full resize-none bg-gray-200 p-2 outline-none"
          placeholder="Write here..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}></textarea>
      </div>
    </div>
  );
};
export default Markdown;
