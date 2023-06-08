import InputControl from '../InputControl/InputControl'
import './SourceMeter.css'
import ReadingsWidget from '../ReadingsWidget/ReadingsWidget'
import OutputControl from '../OutputControl/OutputControl'

export default function SourceMeter() {
  return (
    <div className='sourceMeter'>
        <InputControl/>
        <OutputControl/>
        <ReadingsWidget/>
        
        
    </div>
  )
}
