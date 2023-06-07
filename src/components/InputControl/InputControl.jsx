import { Switch } from '@mui/material'
import './inputControl.css'


export default function InputControl() {
  return (

    <div className='inputControl'>
      <h1>Control Inputs</h1>
      <div className='inputflow'>
        <form className='inputflow'>
        <div className='inputFlowRate'>
                <label className="mfc">MFC_1 - Flow Rate</label>
                <input 
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
      </div>
      <div className="inputControlContainer">
      <span className="switchTitle">Solenoid Valve 2</span>
      <Switch className='inputControlSwitch'/>
      </div>
    </div>
    
  )
}
