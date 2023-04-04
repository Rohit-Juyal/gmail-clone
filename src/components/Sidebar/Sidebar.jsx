import { Button, IconButton } from '@mui/material';
import './sidebar.css';
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, Note, Person, Phone, StarOutline } from '@mui/icons-material';
import SidebarOption from '../SidebarOption/SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

const Sidebar = () => {
    const dispatch = useDispatch()
  return (
    <div className='sidebar'>
        <Button 
            startIcon={<Add />}
            className='sidebar__compose'
            onClick={() => dispatch(openSendMessage())} 
        >
            Compose
        </Button>

        <SidebarOption Icon={Inbox} title='Inbox' number='44' selected={true} />
        <SidebarOption Icon={StarOutline} title='Starred' number='54' />
        <SidebarOption Icon={AccessTime} title='Snoozed' number='23' />
        <SidebarOption Icon={LabelImportant} title='Important' number='39' />
        <SidebarOption Icon={Note} title='Drafts' number='10' />
        <SidebarOption Icon={ExpandMore} title='More' />

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <Person />
                </IconButton>
                <IconButton>
                    <Duo />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar