import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import './emailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedMail } from '../../features/mailSlice';

const EmailRow = ({ id, title, subject, description, time }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectedMail({
            id,
            title, 
            subject, 
            description, 
            time
        }))

        navigate('/mail')
    }
    
  return (
    <div className='emailRow' onClick={openMail}>
        <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>
        <h3 className="emailRow__title">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>
                {subject}{" "}
                <span className='emailRow__description'>- 
                    {description}
                </span>
            </h4>

        </div>
        <div className="emailRow__time">
            {time}
        </div>
    </div>
  )
}

export default EmailRow