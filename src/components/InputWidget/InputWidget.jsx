import './inputWidget.css'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


export default function InputWidget() {
  return (
    <div className='inputWidget'>
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
            <button className='setValuesBtn'>Set Values</button>
        </form>
        <div className="resisInfoItem">
            <span className="resisInfoTitle">Resistance</span>
            <ElectricBoltIcon className='resisInfoIconTemp'/>
            <div className='resisInfocontainer'>
            <span className='resisInfoResistance'> res &#937;</span>
            
            </div>
        </div>
    </div>
  )
}
