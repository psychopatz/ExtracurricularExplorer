import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get data from localStorage and parse it
  const storedValue = localStorage.getItem(key);
  console.log("localStorage Get:")
  console.log(storedValue)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  console.log("localStorage Init:")
  console.log(initial)

  // State to hold the current value
  const [value, setValue] = useState(initial);
  console.log("localStorage State:")
  console.log(value)

  // Update localStorage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("localStorage Update Key:")
    console.log(key)
    console.log("localStorage Update Value:")
    console.log(value)
  }, [key, value]);

  // Function to update the value
  const updateValue = (newValue) => {
    setValue(newValue)
    console.log("localStorage PutValue:")
    console.log(newValue)
  };

  // Function to clear the value from localStorage
  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
    console.log("localStorage Clear:")
    console.log(key)
  };

  return [value, updateValue, clearValue];
};

export default useLocalStorage;
