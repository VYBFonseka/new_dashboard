import { Link } from "react-router-dom";
import "./topbar.css"
import { RefreshRounded } from "@mui/icons-material";

export default function Topbar() {

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Automated Data Aquisition System</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    
                    <RefreshRounded onClick={()=> window.location.reload(false)}/>

                </div>
            </div>
        </div>
    
    </div>
  )
}
