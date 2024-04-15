import ReactMarkdown from 'react-markdown';
import Heading from './Heading';

type PreviewProps = {
  input: string;
};
const Preview = ({ input }: PreviewProps) => {
  return (
    <div className="prose prose-a:text-blue-600 flex-1 sm:w-1/2">
      <Heading>Preview</Heading>
      <div>
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
