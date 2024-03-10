/* eslint-disable react/prop-types */
import { useState } from "react"
import { useTodocontext} from "../../context/TodoContext"
function Todoitems({todoitem}) {
const[isEditable,setisEditable]=useState(false)
const[todomsg,setTodomsg] = useState(todoitem.tasks)
const {updateTodo,removeTodo,toggleComplete}=useTodocontext()

const editTodo=()=>{
  updateTodo(todoitem.id,{...todoitem,tasks:todomsg})
}

const toggleCompleted = ()=>{
  toggleComplete(todoitem.id)
}


const istodoEditable=()=>{  
  if(todoitem.completed) return;
  if(isEditable){
    setisEditable(false);
    editTodo();
  }else{
    setisEditable(true);
  }
  }
  console.log(isEditable)
  console.log(toggleComplete,toggleCompleted)
  return (
    <div className='w-11/12 flex justify-center gap-5' >
      
      <input type="checkbox" name="" id="" className='' checked={todoitem.completed} onChange={toggleCompleted}/>

      <input type="text" name="" id="" value={todomsg} className={`basis-9/12 p-3 border-2 ${todoitem.completed ? 'strike' :''} ${isEditable ? 'bg-slate-300':''}`} onChange={(e)=>setTodomsg(e.target.value)} readOnly={!isEditable} />


      <div className='flex gap-3'>
        <button className='py-2 px-3 bg-white text-black font-bold hover:text-white hover:bg-black' onClick={istodoEditable} disabled={todoitem.completed}>
          <span className="material-symbols-outlined">
            {isEditable?'save':'edit'}
          </span>
        </button>
        <button className='py-2 px-3 bg-white text-black font-bold hover:text-white hover:bg-black' onClick={()=>removeTodo(todoitem.id)}>
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
      </div>
    </div>
  )
}

export default Todoitems