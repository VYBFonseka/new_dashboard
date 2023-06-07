import './statusbar.css'


export default function Statusbar() {
  return (
    <div className='status'>
        <div>
        
        <span className="statusProductName">Product ID :</span>
        <span className="statusProductName">ADAS_0001</span>
        </div>
        <div>
        <span className="statusProductStatus">Status :</span>
        <span className="statusProductStatus">current_status</span>
        </div>
    </div>
  )
}
