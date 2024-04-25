import { MouseEventHandler } from 'react';
import Heading from './Heading';

type MarkdownProps = {
  input: string;
  onInputChange: (value: string) => void;
  onIconClick: MouseEventHandler<SVGElement>;
};

const Markdown = ({ input, onInputChange, onIconClick }: MarkdownProps) => {

  
  
  return (
    <div className="flex-1 border-r-2 border-gray-300 sm:w-1/2 flex flex-col">
      <Heading onIconClick={onIconClick} mode="edit">
        Markdown
      </Heading>
      <label htmlFor="textarea" className="sr-only">
        Enter text here
      </label>
      <div className='flex-1'>
      <textarea
        autoFocus
        id="textarea"
        className="w-full resize-none bg-gray-200 p-2 outline-none h-full"
        placeholder="Write here..."
        value={input}
        onChange={(e) => onInputChange(e.target.value)}></textarea>
    </div></div>
  );
};
export default Markdown;
