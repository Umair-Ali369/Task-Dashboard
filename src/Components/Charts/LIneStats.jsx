import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { ChartsStyle } from '../../Style/Dashboard_Style';

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 8 },
  { day: "Wed", tasks: 6 },
  { day: "Thu", tasks: 10 },
  { day: "Fri", tasks: 7 },
  { day: "Sat", tasks: 3 },
  { day: "Sun", tasks: 5 },
];

const LIneStats = () => {


  return (
    <section className={ChartsStyle.Chart}>
        <h2 className={ChartsStyle.chartHeading}>Weekly Productivity</h2>

        <LineChart width='100%' height={250} data={data}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='day'/>
            <YAxis/>
            <Tooltip/>
            <Line type='monotone' dataKey='tasks' stroke='#6366F1' strokeWidth='3'/>
        </LineChart>
    </section>
  )
}

export default LIneStats