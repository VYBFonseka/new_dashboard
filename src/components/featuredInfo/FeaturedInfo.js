import './featuredInfo.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SpeedIcon from '@mui/icons-material/Speed';



export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Temparature</span>
            <ThermostatIcon className='featuredIconTemp'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> temp &#8451;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Pressure</span>
            <SpeedIcon className='featuredIconPressure'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> press &#13225;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Humidity</span>
            <WaterDropIcon className='featuredIconHumidity'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> humid &#x25;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Surface Temparature</span>
            <WhatshotIcon className='featuredIconSurfTemp'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> surfTemp &#8451;</span>
            </div>
        </div>
    </div>
  )
}