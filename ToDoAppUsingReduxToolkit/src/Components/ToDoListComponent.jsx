import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToDo, editToDo, completedToggler } from '../Features/ToDoSlice';
function ToDoListComponent({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [task, setTask] = useState(todo.task);
    const dispatcher = useDispatch();

    const editHandler = () => {
        setIsEditable(!isEditable);
        if (!isEditable) return;
        dispatcher(editToDo(todo.id, task));
    }
    const checkBoxHandler = () => {
        dispatcher(completedToggler(todo.id))
        setIsChecked(!isChecked);
    }
    return (
        <div className="flex bg-indigo-200 items-center justify-between mb-2 p-2 rounded-lg">
            <div>
                <input type='checkbox' disabled={isEditable} onChange={checkBoxHandler} className='cursor-pointer mx-2' />
                <input required value={task} onChange={(e) => setTask(e.target.value)} type='text' readOnly={!isEditable} className={`rounded-sm font-bold ${isChecked ? `line-through` : ``} ${isEditable ? `border-2 border-black` : ` bg-indigo-200 outline-none`}`}></input>
            </div>
            <div>
                <button onClick={editHandler} disabled={todo.isCompleted} className={`bg-green-500 hover:bg-green-700 p-1 font-bold rounded-lg text-white mr-2 ${todo.isCompleted ? "bg-gray-500 hover:bg-gray-500" : ""}`}>{isEditable ? "Save" : "Edit"}</button>
                <button onClick={() => dispatcher(removeToDo(todo.id))} className="bg-red-500 hover:bg-red-700 p-1 font-bold rounded-lg text-white">Remove</button>
            </div>
        </div>
    )
}

export default ToDoListComponent
