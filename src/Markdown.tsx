import Heading from "./Heading";

type MarkdownProps = {
  input: string;
  onInputChange: (value: string) => void;
};

const Markdown = ({ input, onInputChange }: MarkdownProps) => {
  return (
    <div className="flex-1 sm:w-1/2">
      <Heading>Markdown</Heading>
      <label htmlFor="textarea" className="sr-only">
        Enter text here
      </label>
      <textarea
        id="textarea"
        className="w-full h-full outline-none"
        placeholder="Write here..."
        value={input}
        onChange={(e) => onInputChange(e.target.value)}></textarea>
    </div>
  );
};

export default Markdown;
