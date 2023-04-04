import { Button } from '@mui/material';
import './login.css';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                )
            })
    }

  return (
    <div className='login'>
        <div className="login__container">
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" />
        <Button className='login__button' variant='contained' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login