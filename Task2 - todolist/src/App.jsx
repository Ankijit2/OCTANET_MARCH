/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/Todoinput/TodoInput'
import Todoitems from './components/Todoitems/Todoitems'
import { Todoprovider } from './context/TodoContext'



export default function App() {
const[Todo,setTodo]=useState([])
const addTodo=(todo)=>{
  setTodo((prev)=>[{...todo},...prev])
}

const updateTodo =(id,todo)=>{
  setTodo((prev)=>prev.map((todoitem)=>(todoitem.id===id?todo:todoitem)))
}

const removeTodo=(id)=> {
  setTodo((prev)=>prev.filter((todoitem)=>(todoitem.id!==id)))
}

const toggleComplete=(id)=>{
  setTodo((prev)=>prev.map((todoitem)=>todoitem.id===id?{...todoitem,completed:!todoitem.completed}:todoitem))
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem(('todos')));
  if(todos && todos.length>0){
    setTodo(todos)
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(Todo))

},[Todo])

  return (
    <>
    <div className="flex flex-col gap-5 justify-center items-center mt-10">
    <h1 className='text-white text-3xl'>Todolist App</h1>
    <Todoprovider value={{Todo,addTodo,updateTodo,removeTodo,toggleComplete}}>
    <TodoInput/>
  {Todo.map((todoitem)=>(
    <Todoitems key={todoitem.id} todoitem={todoitem} />
  ))}
    
    </Todoprovider>
    </div>
    
    </>
  )
}
