import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@mui/icons-material'
import './header.css'
import { Avatar, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className='header'>

      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img onClick={() => navigate('/')} src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" />
      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder='Search mail' />
        <ArrowDropDown />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar 
          onClick={signOut}
          src={user?.photoUrl} 
          sx={{ height: 35, width: 35, margin:'10px', cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Header