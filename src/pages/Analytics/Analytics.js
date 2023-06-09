
import Humid from '../../components/Graphs/Humid/Humid'
import Pressure from '../../components/Graphs/Pressure/Pressure'
import ResGraph from '../../components/Graphs/ResGraph/ResGraph'
import SurfTemp from '../../components/Graphs/SurfTemp/SurfTemp'
import Temp from '../../components/Graphs/Temp/Temp'
import './analytics.css'



export default function Analytics() {
  return (
    <div className='analytics'>
    <div className='graphs'>
      <h1>Time Synchronized Graphs</h1>
      <h2>Time vs Temperature</h2>
      <Temp/>
      <h2>Time vs Pressure</h2>
      <Pressure/>
      <h2>Time vs Humidity</h2>
      <Humid/>
      <h2>Time vs Object Temperature</h2>
      <SurfTemp/>
      <h2>Time vs Resistance</h2>
      <ResGraph/>

    </div>
    
    </div>
    
  )
}
