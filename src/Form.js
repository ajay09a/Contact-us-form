import React, {useState} from 'react'
import {firestore} from './firebase';

const Form = () => {
    const [user, setuser] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        setuser({...user, [name]:value})
    }

    const postData = async (e)=>{
        e.preventDefault();
        console.log('name:', user.name);
        console.log('email:', user.email);
        console.log('message:', user.message);
        firestore.collection('contact').add({
            name: user.name,
            email: user.email,
            message: user.message,
            CreatedAt: new Date(),
          })
          setuser({
            name:'',
            email: '',
            message: ''
          });
    }
  return (
    <form className='form' onSubmit={postData}>
        <div className='form-group'>
          <input className='form-control' type='text' name="name" value={user.name} onChange={handleChange} placeholder="Name" autoComplete="off" required />
        </div>
        <div className='form-group'>
          <input className='form-control' type='email' name="email" value={user.email} onChange={handleChange} placeholder="Email" autoComplete="off" required />
        </div>
        <div className='form-group'>
          <textarea className='form-control' rows='5' name="message" value={user.message} onChange={handleChange} placeholder="Enter Your Message" autoComplete="off" required />
        </div>
        <button>Submit</button>
      </form>
  )
}

export default Form