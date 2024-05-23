import { ChangeEvent, useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { value: input, setItem: setInput } = useLocalStorage('Input');
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const togglePreview = () => {
    setShowPreview((prevShowPreview) => !prevShowPreview);
  };

  return (
    <main className="flex min-h-screen bg-gray-200 sm:flex-row">
      <div className={`w-full ${showPreview ? 'hidden' : 'block'} sm:block sm:w-1/2`}>
        <Editor onIconClick={togglePreview} input={input} onInputChange={handleChange}></Editor>
      </div>
      <div className={`w-full ${showPreview ? 'block' : 'hidden'} sm:block sm:w-1/2`}>
        <Preview input={input} onIconClick={togglePreview} />
      </div>
    </main>
  );
}
export default App;
