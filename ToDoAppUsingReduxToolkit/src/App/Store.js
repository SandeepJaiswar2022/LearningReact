import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../Features/ToDoSlice'
export const Store = configureStore({
    reducer: ToDoReducer
})