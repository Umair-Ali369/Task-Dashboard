import React from 'react'
import { motion } from 'framer-motion'
import { TaskItmeStyle } from '../Style/Dashboard_Style'

const TaskItem = ({task, onEdit, onDelete, onToggle}) => {
  return (
    <motion.div 
    initial={{opacity : 0, y : 20}}
    animate={{opacity : 1, y : 0}}
    transition={{duration : 0.3}}
    className={TaskItmeStyle.mainDiv}>
      {/* Left Side Task title */}
      <div >
        <h3 className={`font-medium ${
          task.completed ? "line-through text-gray-500" : "text-black"
        } `}>
          {task.title}
        </h3>
      </div>

      {/* Right Side Buttons */}
      <div className='flex gap-4 mt-6'>
        {/* Toggle */}
        <button
        onClick={() => onToggle(task.id)}
         className={TaskItmeStyle.toggleBtn}>
          {task.completed ? "Undo" : "Done"}
        </button>

        {/* Edit */}
        <button
        onClick={() => onEdit(task)}
         className={TaskItmeStyle.editBtn}

        >
          Edit
        </button>

        {/* Delete */}
        <button
        onClick={() => onDelete(task.id)}
       className={TaskItmeStyle.deleteBtn}

        >
          Delete
        </button>
      </div>
    </motion.div>
  )
}

export default TaskItem