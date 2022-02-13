import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const [origin, setOrigin] = useState([])
  const undertaker = function (el) {
    let value = document.getElementById(el).value
    if (el === 'red') {
      setRed(value)
    }
    else if (el === 'green') {
      setGreen(value)
    }
    else if (el === 'blue') {
      setBlue(value)
    }

    console.log(red, green, blue, origin);
  }
  const saver = function () {
    setOrigin([red, green, blue])
    console.log(origin[0]);
  }
  const reTerner = function () {
    setRed(origin[0])
    setGreen(origin[1])
    setBlue(origin[2])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{ backgroundColor: `rgb(${red},${green},${blue})` }} className="App-logo" alt="logo" />
      </header>
      <div className='wrapper'>
        <input id='red' type='range' min='0' max='250' onChange={() => undertaker('red')}></input>
        <input id='green' min='0' max='250' type='range' onChange={() => undertaker('green')}></input>
        <input id='blue' min='0' max='250' type='range' onChange={() => undertaker('blue')}></input>
        <br />
        <button type='submit' onClick={() => reTerner()}>return</button>
        <button type='submit' onClick={() => saver()}>save</button>

      </div>


    </div>
  );
}

export default App;
