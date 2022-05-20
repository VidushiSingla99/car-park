import './App.css';
import React, {useState} from 'react';
import Parking from "./Parking";

function App() {
  const [count, setCount] = useState(0);
  const increaseCounter=()=>{
    setCount( c=>c+1);
    }
  return (
   <>
   <Parking setCount={setCount} count={count} increaseCounter={increaseCounter}/>
   </>
  );
}

export default App;
