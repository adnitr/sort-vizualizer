import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState([8, 3, 1, 2]);
  setTimeout(() => {
    setArr([3, 8, 1, 2]);
  }, 1000);
  console.log('Hello');
  return (
    <div className='App'>
      {arr.map((item) => (
        <div className='box' key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
