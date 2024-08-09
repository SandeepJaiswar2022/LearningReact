import { useState, useRef } from 'react'
import PrevState from './PrevState.jsx'
import PlayPauseVideoUsingUseRef from './PlayPauseVideoUsingUseRef.jsx';

/*
Exercise 1: Focus Input on Button Click
Create a simple form with the following features:

1. An input field where users can type text.
2. A button that, when clicked, focuses the input field.
*/

function App() {
  const [myText, setText] = useState("");
  const inputFieldReference = useRef(null);
  const copyToClipBoard = (e) => {
    e.target.classList.toggle("bg-yellow-700");
    inputFieldReference.current?.select();
    window.navigator.clipboard.writeText(myText);
  }

  return (
    <>
      <div className='bg-gray-500 w-full h-fit flex flex-col items-center justify-center'>
        <div className="flex w-96 h-44 flex-col space-y-3 border bg-black text-white p-6 m-6">
          <h2>Exercise 1: Focus Input on Button Click</h2>
          <div className="max-w-sm space-y-3">
            <div>
              <div className="flex rounded-lg shadow-sm">
                <input value={myText} onChange={(e) => setText(e.target.value)} ref={inputFieldReference} type="text" className="text-black text-xl py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-s-lg  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                <button onClick={copyToClipBoard} className="px-4 inline-flex items-center min-w-fit rounded-e-md border border-gray-200 text-xl text-gray-900 bg-yellow-500">Copy</button>
              </div>
            </div>
          </div>
        </div>
        <PrevState />
        <PlayPauseVideoUsingUseRef />
      </div>
    </>
  )
}

export default App
