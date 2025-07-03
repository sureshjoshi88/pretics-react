import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo,removeTodo,updatedTodo } from '../todos/todoSlice'


const Todo = () => {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch()
    const addTodohandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(todo))
        setTodo("")
    }
    const todos = useSelector(state =>state.todos);
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    {/* Form */}
    <form onSubmit={addTodohandler} className="flex gap-2 mb-6">
      <input
        className="flex-1 border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a todo"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>

    {/* Todo List */}
    <ul className="space-y-3">
      {todos.map((item, index) => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
        >
          <span>{item.text}</span>
          <button
            onClick={() => dispatch(removeTodo(item.id))}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(updatedTodo(item.id))}
            className="bg-amber-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
edit          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
}

export default Todo
