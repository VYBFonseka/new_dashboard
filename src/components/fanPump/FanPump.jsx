import { Switch } from '@mui/material'
import './fanPump.css'


export default function FanPump() {
  return (
    <div className='fanPump'>
    <div className="fanPumpContainer">
      <span className="switchTitle">Solenoid Valve</span>
      <Switch className='fanPumpSwitch'/>
      </div>
      <div className="fanPumpContainer">
      <span className="switchTitle">Mixing Fan</span>
      <Switch className='fanPumpSwitch'/>
      </div>
      <div className="fanPumpContainer">
      <span className="switchTitle">Vaccum Pump</span>
      <Switch className='fanPumpSwitch'/>
      </div>

    </div>
    
  )
}
