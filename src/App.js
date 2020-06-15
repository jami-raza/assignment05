import React, {useState} from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import Child2 from './Child2.js';
import './App.css';

function App() {
  let countState = useState(0);
  return (
    <CounterContext.Provider value = {countState}>
    <div className='box'>
      <Parent/>
    </div>
    <div className='box2'>
      <Child2/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
