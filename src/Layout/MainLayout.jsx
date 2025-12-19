import React from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import { motion } from 'framer-motion'

const MainLayout = ({children}) => {
  return (
   <motion.div 
   initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }}
  transition={{ duration: 0.5 }}
   className='flex'>
    <SideBar/>
    <div className='flex-1'>
        <NavBar/>
        <div className='p-6 bg-gray-100 min-h-screen'>
            {children}
        </div>
    </div>
   </motion.div>
  )
}

export default MainLayout