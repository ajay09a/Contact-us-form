import React from 'react'
import { useForm } from './useForm'

const Form = () => {
    const name = useForm('');
    const email = useForm('');
    const message = useForm('');
    const postData = async (e)=>{
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        }
        fetch("https://console.firebase.google.com/project/personal-blog-5fbac/database/personal-blog-5fbac-default-rtdb/data/~2F/contactform.json", requestOptions)
        .then(response => {response.json(); console.log(response)})
        .then(data => console.log(data));
        console.log('name:', name);
        console.log('email:', email);
        console.log('message:', message);
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