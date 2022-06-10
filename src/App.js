import { useState, useEffect } from 'react';
import './App.css';
import Box from './components/Box';
var myarr = [
  8, 3, 4, 1, 0, 9, 2, 7, 5, 6, 10, 15, 17, 19, 12, 18, 14, 13, 11, 16,
];
// var i, j;
const n = 20;

function App() {
  const [arr, setArr] = useState([...myarr]);
  const [trans, setTrans] = useState({ pos: null, neg: null });
  const [col, setCol] = useState([0, null]);
  const [isSorted, setIsSorted] = useState(false);
  const [randVar, setRandVar] = useState(false);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  // console.log(j);

  useEffect(() => {
    if (!isSorted) {
      setTimeout(() => {
        if (i < n) {
          if (myarr[j] > myarr[j + 1] && j < n - i - 1) {
            let temp = myarr[j];
            myarr[j] = myarr[j + 1];
            myarr[j + 1] = temp;
            console.log(myarr);
            setRandVar(false);
            setTimeout(() => {
              setCol([j, j + 1]);
              setTrans({ pos: j, neg: j + 1 });
            }, 50);
            setTimeout(() => {
              setTrans({ pos: null, neg: null });
              setCol([j + 1, null]);
              setArr([...myarr]);
            }, 450);
          }
          if (j === n - i - 1) {
            if (randVar) {
              setIsSorted(true);
            }
            setI((prevVal) => {
              return prevVal + 1;
            });
            setJ(0);
            setCol((prevVal) => [0, prevVal[1]]);
            if (randVar) {
              setCol([null, null]);
            }
            setRandVar(true);
          } else {
            setJ((prevVal) => {
              return prevVal + 1;
            });
            setCol((prevVal) => [prevVal[0] + 1, prevVal[1]]);
          }
        }
      }, 500);
    }
  }, [i, j, isSorted, randVar]);

  return (
    <div className='App'>
      {arr.map((item, index) => {
        return (
          <Box
            key={item}
            val={item}
            col={(index === col[0]) | (index === col[1])}
            trans={
              index === trans.pos
                ? 'translatepos'
                : index === trans.neg
                ? 'translateneg'
                : null
            }
          />
        );
      })}
    </div>
  );
}

export default App;
