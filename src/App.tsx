import { useState } from 'react';
import './App.css';
import Markdown from './Markdown';
import Preview from './Preview';

function App() {
  const storedInput = localStorage.getItem('Input');
  const [input, setInput] = useState(storedInput ? storedInput : '');

  const addToLocalStorage = (input: string) => {
    setInput(input);
    localStorage.setItem('Input', input);
  };
  return (
    <main className="flex min-h-screen flex-col p-2 sm:flex-row ">
      <Markdown input={input} onInputChange={addToLocalStorage} />
      <Preview input={input} />
    </main>
  );
}

export default App;
