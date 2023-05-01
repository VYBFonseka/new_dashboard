import "./topbar.css"
import LogoutIcon from '@mui/icons-material/Logout';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Automated Data Aquisition System</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <LogoutIcon />


                </div>
            </div>
        </div>
    
    </div>
  )
}
