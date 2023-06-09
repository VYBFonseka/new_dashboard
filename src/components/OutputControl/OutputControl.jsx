import { Switch } from '@mui/material'
import './outputControl.css'
import { useEffect, useState } from "react";
import { realdb } from '../../firebase-config';
import {set,ref} from 'firebase/database'


export default function OutputControl() {
  
  return (
    <div className='outputControl'>
      <h1>Control Output Components</h1>
    <div className="outputControlContainer">
      <span className="switchTitle">Mixing Fan</span>
      <Switch className='outputControlSwitch' />
      
      </div>
      <div className="outputControlContainer">
      <span className="switchTitle">Vaccum Pump</span>
      <Switch className='outputControlSwitch'/>
      
      </div>
      <div className="outputControlContainer">
      <span className="switchTitle">Other 1</span>
      <Switch className='outputControlSwitch'/>
      </div>

      <div className="outputControlContainer">
      <span className="switchTitle">Other 2</span>
      <Switch className='outputControlSwitch'/>
      </div>

    </div>
    
  )
}
