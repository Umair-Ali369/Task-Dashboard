import React, { useState } from 'react'
import { useTasks } from '../Context/TaskContext'
import { adding_task} from '../Style/Dashboard_Style'

const AddTask = ({cancel}) => {
    const { addTask } = useTasks()
    const [title, setTitle] = useState('')

    const handleAddSubmit = () => {
        if(!title.trim()) return;
        addTask(title)
        setTitle("")
        cancel()
   }
  return (
    <form onSubmit={handleAddSubmit} className='space-y-4 mt-4'>
      <h2 className={adding_task.heading}> Add New Task </h2>
        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Add Task...' 
        className={adding_task.titleInput}
        />

       <div className='flex gap-4'>

        <button type='submit' className={adding_task.addBtn}>
            Add
        </button>
        <button 
        onClick={cancel}
        className={adding_task.cancelBtn}>
          Cancel
        </button>
       </div>
    </form>
  )
}

export default AddTask