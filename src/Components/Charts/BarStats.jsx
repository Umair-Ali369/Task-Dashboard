import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { ChartsStyle } from '../../Style/Dashboard_Style';

const BarStats = () => {
  const [userData, setUsersData] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch('https://dummyjson.com/todos?limit=230')
      const data = await res.json()

      const grouped = {}

      data.todos.forEach((task) => {
        if(!grouped[task.userId]) grouped[task.userId] = 0;
        grouped[task.userId]++
      });

      const chartData = Object.keys(grouped).map((userId) => ({
        user : `User ${userId}`,
        tasks : grouped[userId]
      }))

      setUsersData(chartData)
    }

    load()
  },[])
  return (
    
    <section className={ChartsStyle.Chart}>
      <h2 className={ChartsStyle.chartHeading}>Tasks By User</h2>

      <BarChart width='100%'  height={250} data={userData}>
        <XAxis dataKey='user'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='tasks' fill='#3B82F6'/>
      </BarChart>
    </section>
  )
}

export default BarStats