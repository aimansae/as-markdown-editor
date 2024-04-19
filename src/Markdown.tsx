import { MouseEventHandler, useEffect, useRef } from 'react';
import Heading from './Heading';

type MarkdownProps = {
  input: string;
  onInputChange: (value: string) => void;
  onIconClick: MouseEventHandler<SVGElement>;
}
const Markdown = ({ input, onInputChange,onIconClick }: MarkdownProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    resizeTextareaHeight();
  }, [input]);

  const resizeTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  return (
    <div className="sm:w-1/2border-r-2 flex-1 border-r-2  border-gray-300">
      <Heading onIconClick={onIconClick}>
        Markdown
      </Heading>
      <label htmlFor="textarea" className="sr-only">
        Enter text here
      </label>
      <textarea
        autoFocus
        id="textarea"
        className="overflow-y:hidden h-auto w-full resize-none bg-gray-200 p-2 outline-none  sm:h-full"
        placeholder="Write here..."
        value={input}
        ref={textareaRef}
        onChange={(e) => onInputChange(e.target.value)}></textarea>
    </div>
  );
};

export default Markdown;
