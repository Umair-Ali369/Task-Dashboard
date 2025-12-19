import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiHome, FiList, FiSettings } from 'react-icons/fi'
import { sideBar } from '../Style/Dashboard_Style'

const SideBar = () => {
    const [ open , setOpen ] = useState(true)
  return (
    <section className={`${sideBar.mainSection} ${open ? 'w-60' : 'w-16'} p-4`}>
        <button className='mb-8 fixed' onClick={() => setOpen(!open)}> <FiMenu size={30}/> </button>

        <nav className={sideBar.nav}>
            <Link className={sideBar.NavLink} to='/'> <FiHome size={22}/> {open && <span>Dashboard</span>} </Link>
            <Link className={sideBar.NavLink} to='/tasks'> <FiList size={22}/> {open && <span>Tasks</span>} </Link>
            <Link className={sideBar.NavLink} to='/settings'> <FiSettings size={22}/> {open && <span>Settings</span>} </Link>
        </nav>
    </section>
  )
}

export default SideBar