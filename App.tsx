
import React, { useState, useCallback } from 'react';
import Button from './components/Button';
import CounterDisplay from './components/CounterDisplay';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 font-sans p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
              Simple Counter
            </h1>
            <p className="text-gray-400 mt-2">A basic React app for beginners.</p>
          </header>
          
          <main>
            <CounterDisplay count={count} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Button onClick={handleDecrement} className="bg-red-500 hover:bg-red-600">
                Decrement
              </Button>
              <Button onClick={handleReset} className="bg-gray-500 hover:bg-gray-600">
                Reset
              </Button>
              <Button onClick={handleIncrement} className="bg-green-500 hover:bg-green-600">
                Increment
              </Button>
            </div>
          </main>
        </div>
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
