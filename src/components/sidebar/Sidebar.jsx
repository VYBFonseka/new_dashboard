import "./sidebar.css"
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StorageIcon from '@mui/icons-material/Storage';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <DesktopWindowsIcon className='sidebarIcon'/>
                        Dashboard 
                    </li>
                    <li className='sidebarListItem'>
                        <AutoGraphIcon className='sidebarIcon'/>
                        Analytics 
                    </li>
                    <li className='sidebarListItem'>
                        <StorageIcon className='sidebarIcon'/>
                        Data Tables
                    </li>
                </ul>

            </div>
        </div>

    </div>
  )
}
