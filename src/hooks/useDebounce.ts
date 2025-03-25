import { useEffect, useState } from 'react';

export const useDebounce = (func: (query: string) => void, delay: number = 500) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const hold = setTimeout(() => {
      func(query);
    }, delay);

    return () => {
      clearTimeout(hold);
    };
  }, [query, func, delay]);

  return {
    query,
    setQuery,
  };
};
