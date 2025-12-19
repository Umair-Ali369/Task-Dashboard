import React, { useEffect, useState } from 'react'
import PieState from '../Components/Charts/PieState'
import BarStats from '../Components/Charts/BarStats'
import LIneStats from '../Components/Charts/LIneStats'
import AddTask from '../Components/AddTask'
import TaskList from '../Components/TaskList'

import { useTasks } from '../Context/TaskContext'
import Model from '../Components/Model'
import { motion } from 'framer-motion'

const Dashboard = () => {

  const { tasks, deleteTask, toggleTask } = useTasks
  const [isModleOpen, setIsModelOpen] = useState(false)


  const [stats, setStats] = useState({
    total : 0,
    completed : 0,
    pending : 0,
    productivity : 0
  })

  useEffect(() => {
    const loadStats = async () => {
      const res = await fetch("https://dummyjson.com/todos?limit=230")
      const data = await res.json()

      const total = data.todos.length
      const completed = data.todos.filter(task => task.completed).length
      const pending = total - completed
      const productivity = Math.round((completed / total) * 100)

      setStats({ total, completed, pending, productivity})
    }

    loadStats()
  },[])

  //data 
  const Stats = [
    {
      head : "Total Tasks",
      stat : stats.total,
      bg : "bg-white"
    },
    {
      head : "Completed Tasks",
      stat : stats.completed,
      bg : "bg-green-100"
    },
    {
      head : "Pending",
      stat : stats.pending,
      bg : "bg-yellow-100"
    },
    {
      head : "Productivity",
      stat : stats.productivity + "%",
      bg : 'bg-purple-200'
    }
  ]

  return (
    <motion.section 
    initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.6 }}
  >
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {Stats.map((s) => (
          <div key={s.head} className={`${s.bg} p-6 shadow-md  border rounded-md`}>
            <h3 className='text-gray-700 text-sm'> {s.head} </h3>
            <h2 className='text-3xl font-bold'> {s.stat} </h2>
          </div>
        ))}
      </div>

      <button 
      onClick={() => setIsModelOpen(!isModleOpen)}
      className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 mt-4'
      >
        + Add Task
      </button>

      {/* ADD MODEL */}
      <Model isOpen={!isModleOpen} isClose={() => setIsModelOpen(!isModleOpen)}>
        <AddTask cancel={() => setIsModelOpen(!isModleOpen)} />
      </Model>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-3'>
        <BarStats/>
        <LIneStats/>
        <PieState completed={stats.completed} pending={stats.pending}/>
      </div>

      <TaskList/>
    </motion.section>
  )
}

export default Dashboard