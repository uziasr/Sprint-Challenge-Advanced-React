import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    console.log(key,initialValue)
    if(typeof key!=='string'){
        throw new Error('Invalid Param: we need a string!')
        }
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      console.log('this is item',item)
      return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };
  
    return [storedValue, setValue];
  };
  export default useLocalStorage