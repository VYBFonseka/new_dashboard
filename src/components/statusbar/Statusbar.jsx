import './statusbar.css'


export default function Statusbar() {
  return (
    <div className='status'>
        <div>
        
        <span className="statusProductName">Product ID :</span>
        <span className="statusProductName">product_name</span>
        </div>
        <div>
        <span className="statusProductStatus">Status :</span>
        <span className="statusProductStatus">current_status</span>
        </div>
    </div>
  )
}
