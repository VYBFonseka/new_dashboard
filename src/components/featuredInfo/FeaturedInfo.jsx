import './featuredInfo.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SpeedIcon from '@mui/icons-material/Speed';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useEffect, useState } from 'react';
import { onValue } from 'firebase/database';
import { realdb } from '../../firebase-config';
import { ref} from 'firebase/database'



export default function FeaturedInfo() {
  
    const [readings,setReadings] = useState([]);
    const [didReadData] = useState(false);

    useEffect(()=>{
        if(didReadData === false){
            try {
                onValue(ref(realdb), snapshot =>{
                 console.log("OKOKOKO")

                 const data = snapshot.val()
                 if(data!== null ){
                    console.log(data.ADAS.SensorReadings)
                    setReadings(data.ADAS.SensorReadings)
                 }
                  })
             }catch(e){
                 console.log(e)
             }
        } 
    },[didReadData])

    return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Temparature</span>
            <ThermostatIcon className='featuredIconTemp'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> {readings.Temperature} &#8451;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Pressure</span>
            <SpeedIcon className='featuredIconPressure'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> {readings.Pressure} &#13225;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Humidity</span>
            <WaterDropIcon className='featuredIconHumidity'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> {readings.Humidity} &#x25;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Surface Temparature</span>
            <WhatshotIcon className='featuredIconSurfTemp'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> {readings.ObjectTemp} &#8451;</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Resistance</span>
            <ElectricBoltIcon className='resisInfoIconTemp'/>
            <div className='featuredcontainer'>
            <span className='featuredTemp'> {readings.Resistance} &#937;</span>
            </div>
        </div>
    </div>
  )
}