import "./sidebar.css"
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StorageIcon from '@mui/icons-material/Storage';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                
                <ul className='sidebarList'>
                    <Link to="/dashboard" className="link">
                    <li className="sidebarListItem">
                        <DesktopWindowsIcon className='sidebarIcon'/>
                        Dashboard 
                    </li>
                    </Link>
                    <Link to="/analytics" className="link">
                    <li className='sidebarListItem'>
                        <AutoGraphIcon className='sidebarIcon'/>
                        Analytics 
                    </li>
                    </Link>
                    <Link to="/dataTables" className="link">
                    <li className='sidebarListItem'>
                        <StorageIcon className='sidebarIcon'/>
                        Data Tables
                    </li>
                    </Link>
                    <Link to="/logIn" className="link">
                    <li className='sidebarListItem'>
                        <LogoutIcon className='sidebarIcon'/>
                        Log Out
                    </li>
                    </Link>
                </ul>

            </div>
        </div>

    </div>
  )
}
