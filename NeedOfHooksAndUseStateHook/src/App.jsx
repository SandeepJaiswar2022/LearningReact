import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const incrementCountValue = () => {
    if (counter < 20)
      setCount(counter + 1);
  }

  const decrementCountValue = () => {
    if (counter > 0)
      setCount(counter - 1);
  }

  return (
    <>
      <h1>Need of Hooks and Exploring UseStateHook</h1>
      <hr />
      <h2>1.Counter Application [1.counter : {counter}] </h2>
      <div>
        <button onClick={incrementCountValue} className="btn">IncrementCount [2.counter : {counter}]</button>
        <br />
        <br />
        <button onClick={decrementCountValue} className="btn">DecrementCount [3.counter : {counter}]</button>
      </div>
      <div>
        <p>Value of counter [4.counter : {counter}]</p>
      </div>
      <hr />
    </>
  )
}

export default App
