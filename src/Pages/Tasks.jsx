import React, { useEffect, useState } from 'react'
import { useTasks } from '../Context/TaskContext'
import { motion } from 'framer-motion'

const Tasks = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const [filter, setFilter] = useState('all')

  let tasks = todos;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
         const res = await fetch('https://dummyjson.com/todos?limit=200');
         const data = await res.json()
         setTodos(data.todos)
      } catch {
       console.log(err)
      } finally {
        setLoading(false)

      }
    }
    fetchTasks()

  },[])

     const getFilteredTasks = () => {
    if(filter === 'completed') return todos.filter((t) => t.completed)
    if(filter === 'pending') return todos.filter((t) => !t.completed)
    return todos;
  }

  tasks = getFilteredTasks()

  if(loading) return <p>Loading...</p>
  return (
    <motion.section 
    initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.6 }}>
      <h2 className='text-3xl font-bold mb-4'>Tasks</h2>

      {/* Fitler Buttons */}
      <div className='flex gap-3 my-5'>
        <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-md ${
          filter === 'all' ? 'bg-blue-600 text-white' : "bg-gray-200"
        }`}  
        >
          All
        </button>
        <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-md ${
          filter === 'completed' ? 'bg-green-600 text-white' : "bg-gray-200"
        }`}
        >
          Completed
        </button>
        <button
        onClick={() => setFilter('pending')}
        className={`px-4 py-2 rounded-md ${
          filter === 'pending' ? 'bg-yellow-600 text-white' : "bg-gray-200"
        }`}
        >
          Pending
        </button>
      </div>

      {/* Tasks */}
      <ul className=' p-4 grid md:grid-cols-3 gap-5'>
        {tasks.map((task) => (
          <li key={task.id} className='bg-white py-2 border px-4 rounded-md text-center flex items-center justify-center'>
            <span className={task.completed ? "line-through text-gray-500" : ''}>
              {task.todo}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}

export default Tasks