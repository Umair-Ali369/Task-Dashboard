import { motion } from "framer-motion"
import { useState } from "react"
import { useTasks } from "../Context/TaskContext"

const Settings = () => {

  const { setTasks, theme, setTheme, username, setUsername, email, setEmail } = useTasks()

   const handleSave = () => {
    setEmail('')
    setUsername('')
   }
  return (
    <motion.section
    initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.5 }}
  
    >
     <h1 className='text-3xl font-bold mb-6'>Settings</h1>

        {/* Theme section */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Theme</h2>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input 
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() =>setTheme(theme === "dark" ? "light" : "dark")}
          />

          <p> {theme === 'dark' ? "Dark Mode" : "Light Mode"} </p>
        </label>
      </div>

      {/* Profile Section */}
      <div  className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Profile Info</h2>
        <input 
        type="text"
        placeholder="Your Name..."
        className="border p-2 rounded w-full mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="email"
        placeholder="Your Email..."
        className="border p-2 rounded w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Save Info
        </button>
      </div>

      {/* App preference */}
      <div  className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">App Preference</h2>
        <button className="border px-4 py-2" onClick={() => setTasks([])}>Reset All Tasks</button>
      </div>
      </motion.section>
  )
}

export default Settings