import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../Features/ToDoSlice'
function AddToDoTask() {
    const [task, setTask] = useState('');
    const dispatcher = useDispatch();
    const addToDoHandler = (e) => {
        e.preventDefault();
        if (!task) return;
        dispatcher(addToDo(task));//Dispatching the value to store.....
        setTask('');
    }

    return (
        <div>
            <div className="mb-4">
                <form onSubmit={addToDoHandler}>
                    <input value={task} onChange={(e) => setTask(e.target.value)}
                        type="text"
                        className="w-full outline-blue-400  p-2 border-2 rounded-lg"
                        placeholder="Add a new task"
                        id="new-task-input" />
                    <button type='submit'
                        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg font-bold hover:bg-blue-600"
                        id="add-task-button">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddToDoTask
