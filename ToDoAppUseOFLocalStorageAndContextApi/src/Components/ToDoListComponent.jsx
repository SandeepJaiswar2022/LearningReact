import React, { useId, useState } from 'react'
import { useMyToDo } from '../Contexts'

export default function ToDoListComponent({ toDoObject }) {
    const [title, setTitle] = useState(toDoObject.title);
    const [isStrike,setIsStrike] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const { updateToDo, deleteToDo, isCompletedToggle } = useMyToDo();

    const updateTitle = () => {
        updateToDo({ ...toDoObject, title: title });
        setIsEditable(!isEditable);
    }

    const deleteHandler = () => {
        deleteToDo(toDoObject.id);
    }

    const toggleCompleted = () => {
        isCompletedToggle(toDoObject.id);
        setIsStrike((prev)=>!prev);
    }
    return (
        <>
            <input disabled={isEditable} type="checkbox" onChange={toggleCompleted} className="mr-2 cursor-pointer" />
            <input required className={`w-full rounded-lg ${isStrike?`line-through`:``} ${isEditable ? `bg-white outline-1` : `bg-indigo-200 outline-none`}`} value={title} onChange={(e) => (setTitle(e.currentTarget.value))} type="text" readOnly={!isEditable} />
            <button onClick={updateTitle} className="bg-green-300 hover:bg-green-200 font-medium p-1 rounded-lg mx-1">{isEditable ? "📁" : "✏️"}</button>
            <button onClick={deleteHandler} className="bg-red-100 hover:bg-red-50  p-1 font-medium rounded-lg">❌</button>
        </>
    )
}

