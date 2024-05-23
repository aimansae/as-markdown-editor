import { ChangeEvent, MouseEventHandler } from 'react';
import Header from './Header';

type editorProps = {
  onIconClick: MouseEventHandler<HTMLButtonElement>;
  input: string;
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Editor = ({ onIconClick, input, onInputChange }: editorProps) => {
  return (
    <div data-testid="editor" className="h-full flex-col border-r-2 border-gray-300">
      <Header onIconClick={onIconClick} mode="edit">
        editor
      </Header>
        <textarea
          autoFocus
          id="textarea"
          className="h-full w-full resize-none bg-gray-200 p-2 outline-none"
          placeholder="Enter Markdown here..."
          value={input}
          onChange={onInputChange}></textarea>
      </div>
    
  );
};
export default Editor;
