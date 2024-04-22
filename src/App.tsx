import { useEffect, useState } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

function App() {
  const storedInput = localStorage.getItem('Input');
  const [input, setInput] = useState(storedInput ? storedInput : '');
  const [showPreview, setShowPreview] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleShowPreview = () => {
    setShowPreview((prevShowPreview) => !prevShowPreview);
  };

  const addToLocalStorage = (inputValue: string) => {
    setInput(inputValue);
    localStorage.setItem('Input', inputValue);
  };

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 640;
      setIsSmallScreen(smallScreen);
      setShowPreview(!smallScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-200">
      {isSmallScreen ? (
        showPreview ? (
          <Preview input={input} onIconClick={handleShowPreview} />
        ) : (
          <Markdown
            input={input}
            onInputChange={addToLocalStorage}
            onIconClick={handleShowPreview}
          />
        )
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
