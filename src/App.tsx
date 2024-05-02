import { useEffect, useState } from 'react';
import Markdown from './components/Markdown';
import Preview from './components/Preview';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { value: input, setItem: setInput } = useLocalStorage('Input');
  const [showPreview, setShowPreview] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleShowPreview = () => {
    setShowPreview((prevShowPreview) => !prevShowPreview);
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
          <Markdown input={input} onInputChange={setInput} onIconClick={handleShowPreview} />
        )
      ) : (
        <>
          <Markdown input={input} onInputChange={setInput} onIconClick={handleShowPreview} />
          <Preview input={input} onIconClick={handleShowPreview} />
        </>
      )}
    </main>
  );
}
export default App;
