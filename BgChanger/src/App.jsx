import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray");



  return (
    <div class={`w-full h-screen flex items-center justify-center bg-${color}-500`}>
      <div class="flex items-center justify-center">
        <div class="flex flex-row space-x-3 rounded-lg bg-white p-3 shadow-lg">
          <button onClick={() => setColor("blue")} class="rounded  bg-blue-500 p-1 hover:bg-blue-900 text-white">blue</button>
          <button onClick={() => setColor("green")} class="rounded bg-green-500 p-1  hover:bg-green-900 text-white">green</button>
          <button onClick={() => setColor("red")} class="rounded bg-red-500 p-1  hover:bg-red-900 text-white">red</button>
          <button onClick={() => setColor("yellow")} class="rounded bg-yellow-500 p-1  hover:bg-yellow-900 text-white">yellow</button>
          <button onClick={() => setColor("purple")} class="rounded bg-purple-500 p-1  hover:bg-purple-900 text-white">purple</button>
          <button onClick={() => setColor("pink")} class="rounded bg-pink-500 p-1  hover:bg-pink-900 text-white">pink</button>
          <button onClick={() => setColor("indigo")} class="rounded bg-indigo-500 p-1  hover:bg-indigo-900 text-white">indigo</button>
          <button onClick={() => setColor("teal")} class="rounded bg-teal-500 p-1  hover:bg-teal-900 text-white">teal</button>
          <button onClick={() => setColor("orange")} class="rounded bg-orange-500 p-1  hover:bg-orange-900 text-white">orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
