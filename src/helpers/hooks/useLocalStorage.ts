type UseLocalStorage = [(key: string) => string | null, (key: string, value: string) => void];

const useLocalStorage = (): UseLocalStorage => {
  const ls = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const setLocalStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  return [ls, setLocalStorage];
};

export { useLocalStorage };
