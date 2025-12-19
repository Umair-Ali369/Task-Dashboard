import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { ChartsStyle } from '../../Style/Dashboard_Style'

const PieState = ({completed, pending}) => {
    const data = [
        {name : "Completed", value : completed},
        {name : "Pending", value : pending}
    ]

    const COLORS = ["#10B981", "#FBBF24"]
  return (
    <section className={ChartsStyle.Chart}>
        <h2 className={ChartsStyle.chartHeading}>Task Completion Overview</h2>
        <PieChart width='100%' height={250}>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
            >
                {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]}/>
                ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
    </section>
  )
}

export default PieState