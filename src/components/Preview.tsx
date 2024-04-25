import ReactMarkdown from 'react-markdown';
import Heading from './Heading';

type PreviewProps = {
  input: string;
  onIconClick: () => void;
};

const Preview = ({ input, onIconClick }: PreviewProps) => {
  return (
    <div className="flex flex-1 flex-col prose-a:text-blue-600 sm:w-1/2 h-full">
      <Heading onIconClick={onIconClick} mode="preview">
        Preview
      </Heading>
      {input.trim().length === 0 ? (
        <div className="prose p-2 ">
          <p>Type something in Markdown..</p>
        </div>
      ) : (
        <div className="prose p-2 ">
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};
export default Preview;
