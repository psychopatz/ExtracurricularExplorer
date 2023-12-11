import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get data from localStorage and parse it
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Update localStorage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Function to update the value
  const updateValue = (newValue) => {
    setValue(newValue);
  };

  // Function to clear the value from localStorage
  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, updateValue, clearValue];
};

export default useLocalStorage;
