import { useState } from 'react';

export const useCounter = (actualindex = 1, totalPages) => {
  const [index, setIndex] = useState(actualindex); // 10

  const reset = () => {
    setIndex(1);
  };

  const increment = () => {
    if (index < totalPages) {
      setIndex(index + 1);
    }
  };

  const decrement = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  return {
    index,
    increment,
    decrement,
    reset,
  };
};
