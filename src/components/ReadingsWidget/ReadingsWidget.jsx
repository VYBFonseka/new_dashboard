import './readingsWidget.css'
import { useState } from 'react';
import { realdb } from '../../firebase-config';
import {set,ref} from 'firebase/database'


export default function ReadingsWidget() {

    const [testTime ,setTestTime] = useState();
    const [noOfReadings, setNoOfReadings] = useState();
    const [timeInterval,setTimeInterval] = useState();

    const setValues = () =>{
        try {
            set(ref(realdb,`ADAS/Inputs`),{
                NumberOfReadings :noOfReadings,
                TestStartTime:testTime,
                TimeInterval :timeInterval
            })
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div className='ReadingsWidget'>
        <form className='inputform'>
            
            <div className='inputItem'>
                <label>Test Start Time</label>
                <input 
                    type="text"
                    value = {testTime}
                    onChange={ (e)=>{setTestTime(e.target.value)}}
                    placeholder='test time'
                    className="initialInputs"
                />
            </div>
            <div className='inputItem'>
                <label>No of Readings</label>
                <input 
                    type="text"
                    value = {noOfReadings}
                    onChange={e=>{setNoOfReadings(e.target.value)}} 
                    placeholder='no of readings'
                    className='initialInputs'
                />
            </div>
            <div className='inputItem'>
                <label>Time Interval</label>
                <input 
                    type="text" 
                    value = {timeInterval}
                    onChange={e=>{setTimeInterval(e.target.value)}}
                    placeholder='Time Interval (in Seconds)'
                    className='initialInputs'
                />
            </div>
            <button className='setValuesBtn' onClick={setValues}>Set Values</button>
        </form>
    </div>
  )
}
