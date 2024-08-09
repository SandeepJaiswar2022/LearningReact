import { useEffect, useState } from 'react'
import AddToDoTask from './Components/AddToDoTask'
import ToDoListComponent from './Components/ToDoListComponent'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const toDoArray = useSelector(state => state.todos);



  return (
    <>
      <div className="container mx-auto text-center p-4">
        <h1 className='mb-5 inline-block p-3 text-white font-bold text-center text-2xl'>This is Todo list app using Redux-Toolkit</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <AddToDoTask />
          <ul id="task-list" className="list-disc mt-8">
            {toDoArray.map((todo) => (
              <li key={todo.id} className='list-none'>
                <ToDoListComponent todo={todo} />
              </li>))}
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
