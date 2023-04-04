import { Close } from '@mui/icons-material';
import './sendMail.css';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

const SendMail = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    };
   

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to' 
                    type="email" 
                    placeholder='To' 
                    {...register("to", { required: true })} 
                />
                {errors.to && <p className='sendMail__error'>To is Required</p>}

                <input 
                    name='subject' 
                    type="text" 
                    placeholder='Subject'
                    {...register("subject", { required: true })}
                />
                {errors.subject && <p className='sendMail__error'>Subject is Required</p>}
                <input 
                    name='message' 
                    type="text" 
                    placeholder='Message...' 
                    className='sendMail__message'
                    {...register("message", { required: true })}
                />
                {errors.message && <p className='sendMail__error'>Message is Required</p>}

                <div className="sendMail__options">
                    <Button variant='contained' className='sendMail__send' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail