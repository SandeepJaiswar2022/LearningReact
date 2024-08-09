import React, { useState } from 'react'
import { useMyToDo } from '../Contexts'

function ToDoForm() {
    const [title, setTitle] = useState("");
    const { addToDo } = useMyToDo();
    const addToDoHandler = (e) => {
        e.preventDefault();
        if (!title) return;
        addToDo({ title, isCompleted: false });
        setTitle("");
    }
    return (
        <form id="todo-form" className="flex mb-4">
            <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} id="new-todo" required type="text" className="flex-grow p-2 border rounded-l" placeholder="Add a new to-do" />
            <button onClick={addToDoHandler} type="submit" className="bg-blue-500 hover:bg-blue-400 font-medium text-white p-2 rounded-r">Add</button>
        </form>
    )
}

export default ToDoForm
