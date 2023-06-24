import './App.css';
import { useState } from 'react';

function App() {
  const [lengthA, setLengthA] = useState('');
  const [lengthB, setLengthB] = useState('');
  const [displayA, setDisplayA] = useState('0')
  const [displayB, setDisplayB] = useState('0');
  const [hypot, setHypot] = useState('0');

  const calcResults = (e) => {
    e.preventDefault();
    setDisplayA(lengthA);
    setDisplayB(lengthB);
    setHypot((((lengthA*lengthA)+(lengthB*lengthB))**(.5)).toFixed(2));
    setLengthA('');
    setLengthB('');
    
  }

  


  return (
    <div className="App">
      <header><h1>Pythagoras Theorem</h1>
      </header>
      <main>
        <form onSubmit={calcResults}>
          <label htmlFor='lengthA'>
            Enter the length of side A:
          </label>
          <input 
            type='text' 
            id='lengthA' 
            onChange={(e) => {setLengthA(e.target.value)}}
            value={lengthA}
          />
          <label htmlFor='lengthB'
          >
            Enter the length of side B:
          </label>
          <input 
            type='text' 
            id='lengthB'
            value={lengthB}
            onChange={(e) => {setLengthB(e.target.value)}} 

          />
          <button type='submit' >Calculate</button>
        </form>
        <h2>Results = {hypot}</h2>
      </main>
      <div className='container'>
        <h3>Length of side C =  {hypot}</h3>
        <h3 id='a-side'>Length of side A = {displayA}</h3>
        <h3 id='b-side'>Length of side B = {displayB}</h3>
        <div className='c-leg'></div>
        <div className='a-leg'></div>
        <div className='b-leg'></div>
      </div>
    </div>
  );
}

export default App;
