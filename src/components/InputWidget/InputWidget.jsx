import './inputWidget.css'


export default function InputWidget() {
  return (
    <div className='inputWidget'>
        <form className='inputform'>
            <div className='inputFlowRate'>
                <label>Flow Rate</label>
                <input 
                    type="text" 
                    placeholder='flow rate'
                    className='initialInputs'
                />
            </div>
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
    </div>
  )
}
