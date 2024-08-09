import { useEffect, useState } from 'react';
import ToDoForm from './Components/ToDoForm'
import { ToDoContextProvider } from './Contexts'
import ToDoListComponent from './Components/ToDoListComponent';

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos((prev) => ([{ id: Date.now(), ...toDo }, ...prev]));
  }

  const updateToDo = (newToDo) => {
    setToDos(
      (prevToDos) => (prevToDos.map((toDo) =>
        (toDo.id === newToDo.id ? newToDo : toDo))))
  }

  const deleteToDo = (id) => {
    setToDos((prevToDos) => (prevToDos.filter((toDo) => (toDo.id !== id))));
  }

  const isCompletedToggle = (id) => {
    setToDos((prevToDos) => (prevToDos.map((toDo) => (toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo))));
  }

  //Very first it will load the data from local storage , will not be executed further because of no dependencies
  useEffect(() => {
    const toDoData = JSON.parse(localStorage.getItem('toDoData'));
    if (toDoData && toDoData.length > 0) {
      setToDos(toDoData);
    }
  }, []);

  //Any changes in todos (array) then just update in local storage
  useEffect(() => {
    localStorage.setItem('toDoData', JSON.stringify(toDos));
  }, [toDos]);


  return (
    <ToDoContextProvider value={{ toDos, addToDo, updateToDo, deleteToDo, isCompletedToggle }}>
      <div className='flex flex-col p-16 justify-center items-center'>
        <h1 className='text-white mb-5 text-2xl text-center p-4 font-bold'>To do app using context api and local storage</h1>
        <div className="bg-rose-50 p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">To-Do List</h1>

          <ToDoForm />
          <ul>
            {toDos.map((item) => (
              <li key={item.id} className="bg-indigo-200 p-2 flex items-center rounded-lg mb-2">
                <ToDoListComponent toDoObject={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ToDoContextProvider >
  )
}

export default App
