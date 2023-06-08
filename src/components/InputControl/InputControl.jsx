import { Switch } from '@mui/material'
import './inputControl.css'
import { useEffect, useState } from "react";
import { realdb } from '../../firebase-config';
import {set,ref} from 'firebase/database'


export default function InputControl() {
  
  return (
    <div className='inputControl'>
      <h1>Control Inputs</h1>
      <div className='inputflow'>
        <form className='inputflow'>
        <div className='inputFlowRate'>
                <label className="mfc">MFC_1 - Flow Rate</label>
                <input className='initialInputs'
                    type="text" 
                    placeholder='flow rate'
                    name='flowRate1'
                />
            </div>
        </form>
        <form className='inputflow'>
        <div className='inputFlowRate'>
                <label className="mfc">MFC_2 - Flow Rate</label>
                <input className='initialInputs'
                    type="text" 
                    placeholder='flow rate'
                    name='flowRate2'
                />
            </div>
        </form>
      </div>
    <div className="inputControlContainer">
      <span className="switchTitle">Solenoid Valve 1</span>
      <Switch className='inputControlSwitch'/>
      <label> Open Duration</label>
                <input className='initialInputs'
                    type="text" 
                    placeholder='Turn off after (in Seconds)'
                    name='solenoidTime1'
                />
      </div>
      <div className="inputControlContainer">
      <span className="switchTitle">Solenoid Valve 2</span>
      <Switch className='inputControlSwitch'/>
      <label> Open Duration</label>
                <input className='initialInputs'
                    type="text" 
                    placeholder='Turn off after (in Seconds)'
                    name='solenoidTime1'
                />
      </div>
      <button className='setValuesBtn'>Set Values</button>
    </div>
    
  )
}
