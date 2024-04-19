import { useEffect, useState } from 'react';
import './App.css';
import Markdown from './Markdown';
import Preview from './Preview';

function App() {
  const storedInput = localStorage.getItem('Input');
  const [input, setInput] = useState(storedInput ? storedInput : '');
  const [showPreview, setShowPreview] = useState(false);

  const handleShowPreview = () => {
    setShowPreview((prevShowPreview) => !prevShowPreview);
  };
  const addToLocalStorage = (input: string) => {
    setInput(input);
    localStorage.setItem('Input', input);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowPreview(window.innerWidth >= 640);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col bg-gray-200 sm:flex-row ">
      {showPreview ? (
        <Preview input={input} onIconClick={handleShowPreview} />
      ) : (
        <>
          <Markdown
            input={input}
            onInputChange={addToLocalStorage}
            onIconClick={handleShowPreview}
          />
          <Preview input={input} onIconClick={handleShowPreview} />
        </>
      )}
    </main>
  );
}

export default App;