import InputWidget from '../InputWidget/InputWidget'
import ResisInfo from '../ResisInfo/ResisInfo'
import FanPump from '../fanPump/FanPump'

import './SourceMeter.css'

export default function SourceMeter() {
  return (
    <div className='sourceMeter'>
        <FanPump/>
        <ResisInfo/>
        <InputWidget/>
        
    </div>
  )
}
