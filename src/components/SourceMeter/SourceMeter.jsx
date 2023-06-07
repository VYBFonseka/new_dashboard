import InputControl from '../InputControl/InputControl'
import './SourceMeter.css'
import ReadingsWidget from '../ReadingsWidget/ReadingsWidget'

export default function SourceMeter() {
  return (
    <div className='sourceMeter'>
        <InputControl/>
        <ReadingsWidget/>
        
    </div>
  )
}
