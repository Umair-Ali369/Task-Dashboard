import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')
  const [username, setUsername] = useState(localStorage.getItem('username') || 'User')
  const [email, setEmail] = useState(localStorage.getItem('email') || "Email")


  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)

  },[theme])
  useEffect(() => {
    localStorage.setItem('username', username)

  },[username])
  useEffect(() => {
    localStorage.setItem('email', email)

  },[email])

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // FILTER 
  const getFilteredTasks = () => {
    let filtered = [...tasks]

    if(filter === 'completed') return filtered.filter((t) => t.completed)
    if(filter === 'pending') return filtered.filter((t) => !t.completed)

      //search
    if(search.trim() !== '') {
       filtered = filtered.filter((t) => 
      t.title.toLowerCase().includes(search.toLowerCase())
      )
    };

    // sort
    filtered.sort((a, b) => 
    sortOrder === 'newest' ? b.id - a.id : a.id - b.id
    )
      
    return filtered;
  }

  // serach Filter 
  

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length
  const pendingTasks = totalTasks - completedTasks


  const productivity = totalTasks.length === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)



  // ADD TASK
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // TOGGLE TASK
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // EDIT TASK
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    );
  };

  const values = { tasks, addTask, deleteTask, toggleTask,
     editTask, filter, setFilter, getFilteredTasks,
    totalTasks, completedTasks, pendingTasks, productivity,
    search, setSearch, sortOrder, setSortOrder,
   theme, setTheme, username , setUsername, email, setEmail }

  return (
    <TaskContext.Provider
      value={values}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
