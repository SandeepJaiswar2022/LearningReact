import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    toDos: [
        {
            id: 1,
            title: 'Demo',
            isCompleted: false
        }
    ],
    addToDo: (toDo) => { },
    updateToDo: (newToDo) => { },
    deleteToDo: (id) => { },
    isCompletedToggle: (id) => { }
})

export const useMyToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoContextProvider = ToDoContext.Provider;