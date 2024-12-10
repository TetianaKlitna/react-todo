import { useState, useEffect } from "react";

const useSemiPersistentState = (key, initialValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

export default useSemiPersistentState;