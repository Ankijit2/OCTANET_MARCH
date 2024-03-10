/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const  TodoContext = createContext({
    Todo:[
        {
            id:1,
            task:'Learn React',
            completed:false,
        }
    ],
    addTodo: (task)=>{},
    updateTodo: (id,task)=>{},
    removeTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const useTodocontext = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider;