import React from 'react'
import { useTasks } from '../Context/TaskContext' 
import { navBar } from '../Style/Dashboard_Style'

const NavBar = () => {

  const { username } = useTasks()
  return (
    <> 
    <div className={navBar.mainDiv}>

        <h2 className='text-xl font-bold'>Task Dashboard</h2>
        <div className='flex gap-4'>

        <div className={navBar.subDiv}>
          <button className={navBar.logoutBtn}> Logout </button>
        </div>
        <div className={navBar.roundedCircle}></div>
        </div>
    </div>
    </>
  )
}

export default NavBar