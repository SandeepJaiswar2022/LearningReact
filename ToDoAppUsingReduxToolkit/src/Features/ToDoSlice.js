import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            task: 'demo',
            isCompleted: false
        }
    ]
}

export const ToDoSlice = createSlice({
    name: 'myToDo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            //creating new todo
            const newToDo = {
                id: nanoid(),
                task: action.payload
            }
            state.todos.unshift(newToDo);
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editToDo: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload ? todo.task = action.payload : todo))
        },
        completedToggler: (state, action) => {
            state.todos.map((todo) => todo.id === action.payload ? todo.isCompleted=!todo.isCompleted : todo);
        }
    }
})

export const { addToDo, removeToDo, editToDo, completedToggler } = ToDoSlice.actions;

export default ToDoSlice.reducer;