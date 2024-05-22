import ReactMarkdown from 'react-markdown';
import Header from './Header';

type PreviewProps = {
  input: string;
  onIconClick: () => void;
};

const Preview = ({ input, onIconClick }: PreviewProps) => {
  return (
    <div data-testid="preview" className="h-full flex-col prose-a:text-blue-600">
      <Header onIconClick={onIconClick} mode="preview">
        Preview
      </Header>
      <div className="prose p-2 ">
        <ReactMarkdown>{input}</ReactMarkdown>
      </div>
    </div>
  );
};
export default Preview;
