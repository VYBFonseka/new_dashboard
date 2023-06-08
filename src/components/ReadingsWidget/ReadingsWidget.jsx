import './readingsWidget.css'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


export default function ReadingsWidget() {


  return (
    <div className='ReadingsWidget'>
        <form className='inputform'>
            
            <div className='inputItem'>
                <label>Test Time Duration</label>
                <input 
                    type="text" 
                    placeholder='test time'
                    className="initialInputs"
                />
            </div>
            <div className='inputItem'>
                <label>No of Readings</label>
                <input 
                    type="text" 
                    placeholder='no of readings'
                    className='initialInputs'
                />
            </div>
            <div className='inputItem'>
                <label>Time Interval</label>
                <input 
                    type="text" 
                    placeholder='time interval'
                    className='initialInputs'
                />
            </div>
            <button className='setValuesBtn' onClick={setValues}>Set Values</button>
        </form>
    </div>
  )
}
