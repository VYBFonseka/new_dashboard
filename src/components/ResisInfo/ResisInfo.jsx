import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import "./resisInfo.css"

export default function ResisInfo() {
  return (
    <div className="resisInfo">
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
