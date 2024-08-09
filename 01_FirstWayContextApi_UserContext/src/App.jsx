import { useState } from 'react'
import Dashboard from './Components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='p-4 text-center text-xl bg-indigo-200 m-10'>First way to use Context Api (UseContex(a global storage))</h1>
      <Dashboard/>
    </>
  )
}

export default App
