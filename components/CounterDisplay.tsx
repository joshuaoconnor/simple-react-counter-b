
import React from 'react';

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  const getCountColor = () => {
    if (count > 0) return 'text-green-400';
    if (count < 0) return 'text-red-400';
    return 'text-gray-300';
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 text-center shadow-inner">
      <p className="text-2xl font-medium text-gray-400 mb-2">Current Count</p>
      <p className={`text-7xl font-bold tracking-tighter ${getCountColor()}`}>
        {count}
      </p>
    </div>
  );
};

export default CounterDisplay;
