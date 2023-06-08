import { Switch } from '@mui/material'
import './inputControl.css'
import { useState,useEffect } from 'react'
import { realdb } from '../../firebase-config';
import {set,ref} from 'firebase/database'

export default function InputControl() {

  const [mfc1,setMFC1] = useState();
  const [mfc2,setMFC2] = useState();
  const [solenoid1,setSolenoid1] = useState();
  const [solenoid2,setSolenoid2] = useState();

  const setValues = () =>{
    try {
        set(ref(realdb,`/ControlInputs`),{
            FlowRate1 : mfc1,
            FlowRate2 : mfc2,
            SolenoidTime1 :solenoid1,
            SolenoidTime2 : solenoid2
        })
        setMFC1("")
        setMFC2("")
        setSolenoid1("")
        setSolenoid2("")
    }catch(e){
        console.log(e)
    }
  }

  return (
    <div className='inputControl'>
      <h1>Control Inputs</h1>
      <div className='inputflow'>
        <form className='inputflow'>
        <div className='inputFlowRate'>
                <label className="mfc">MFC_1 - Flow Rate</label>
                <input 
                  value={mfc1}
                  onChange={e=>setMFC1(e.target.value)}
                    type="text" 
                    placeholder='flow rate'
                    className='initialInputs'
                />
            </div>
        </form>
        <form className='inputflow'>
        <div className='inputFlowRate'>
                <label className="mfc">MFC_2 - Flow Rate</label>
                <input 
                    value = {mfc2}
                    onChange={e=>setMFC2(e.target.value)}
                    type="text" 
                    placeholder='flow rate'
                    className='initialInputs'
                />
            </div>
        </form>
      </div>
    <div className="inputControlContainer">
      <span className="switchTitle">Solenoid Valve 1</span>
      <Switch className='inputControlSwitch'/>
      <label> Open Duration</label>
                <input 
                    value = {solenoid1}
                    onChange={e=>setSolenoid1(e.target.value)}
                    type="text" 
                    placeholder='Turn off after (in Seconds)'
                    className='initialInputs'
                />
      </div>
      <div className="inputControlContainer">
      <span className="switchTitle">Solenoid Valve 2</span>
      <Switch className='inputControlSwitch'/>
      <label> Open Duration</label>
                <input 
                    value = {solenoid2}
                    onChange={e=>setSolenoid2(e.target.value)}
                    type="text" 
                    placeholder='Turn off after (in Seconds)'
                    className='initialInputs'
                />
      </div>
      <button className='setValuesBtn' onClick={setValues}>Set Values</button>
    </div>
    
  )
}
