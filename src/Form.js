import React from 'react'
import { useForm } from './useForm'
import {firestore} from '../firebase';

const Form = () => {
    const name = useForm('');
    const email = useForm('');
    const message = useForm('');
    const postData = async (e)=>{
        e.preventDefault();
        console.log('name:', name);
        console.log('email:', email);
        console.log('message:', message);
        firestore.collection('contact').add({
            name: name.value,
            email: email.value,
            message: message.value,
            CreatedAt: new Date(),
          })
    }
  return (
    <form className='form' method='POST'>
        <label>Your Name:</label>
        <input type='text' name="name" {...name} placeholder="Enter Your Name" autoComplete="off" required /><br />
        <label>Your Email:</label>
        <input type='email' name="email" {...email} placeholder="Enter Your Email" autoComplete="off" required /><br />
        <label>Your Message:</label>
        <input type='text' name="message" {...message} placeholder="Enter Your Message" autoComplete="off" required /><br />
        <button onClick={postData}>Submit</button>
      </form>
  )
}

export default Form