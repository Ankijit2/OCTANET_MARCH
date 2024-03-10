import React, { useState } from 'react'
import { useTodocontext } from '../../context/TodoContext'

export default function TodoInput() {
    const[tasks,setTasks]=useState('')
    const {addTodo} = useTodocontext()

    const add = (e) =>{
        e.preventDefault()
        if(!tasks) return

        addTodo({id:Date.now(),tasks,completed:false})
        setTasks("")
    }
    console.log(tasks);
    return (


        <form onSubmit={add} className='flex w-full gap-2 justify-center items-center'>
            <input type="text" placeholder='Enter Todo' value={tasks} onChange={(e)=>setTasks(e.target.value)} className='bg-transparent border-white border-2 w-9/12 p-2 placeholder-white focus:outline-none text-white' />
            <button className='py-2 px-3 bg-white text-black font-bold hover:text-white hover:bg-black'>Add</button>
        </form>

    )
}
