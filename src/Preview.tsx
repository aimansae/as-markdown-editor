import ReactMarkdown from 'react-markdown';
import Heading from './Heading';

type PreviewProps = {
  input: string;
  onIconClick: () => void
};
const Preview = ({ input, onIconClick }: PreviewProps) => {
  return (
    <div className="flex-1 prose-a:text-blue-600 sm:w-1/2 ">
      <Heading onIconClick={onIconClick}>Preview</Heading>
      <div className="prose p-2 ">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
