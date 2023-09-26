import React, { useState } from 'react';
import './Contact.css';

const Contact = () =>{
    
    const [info, setInfo] = useState({
        firstName: '',
        number: '',
        email: '',
        comment:''
    });

    function sendForm(){
        console.log("Name is " + info.firstName);
        console.log("Number is " + info.number);
        console.log("Email is " + info.email); 
        console.log("Comment is " + info.comment);
    }

    function handleChange(event){
        const {name,value} = event.target;
        setInfo({...info,[name]:value});
    }

    return(
        <main className="make-bigger-animation">
            <h1>Contact Us</h1>
            <form>
                <fieldset>
                    <label htmlFor="input-text-name">First Name</label>
                    <input
                        name='firstName'
                        type="text" 
                        id="input-text-name" 
                        required
                        value={info.firstName} 
                        onChange={handleChange}
                    />
                    <label htmlFor="input-text-phone">Phone Number</label>
                    <input
                        name='number'
                        type="tel" 
                        id="input-text-phone"
                        value={info.number}
                        onChange={handleChange}
                    />
                    <label htmlFor="input-text-email">Email</label>
                    <input
                        name='email'
                        type="email" 
                        id="input-text-email"
                        required
                        value={info.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="textarea-comments">Comments</label>
                    <textarea 
                        name="comment" 
                        id="textarea-comments" 
                        cols="30" 
                        rows="3"
                        value={info.comment}
                        onChange={handleChange}
                    />
                </fieldset>
                <button onClick={sendForm}>Send</button>
            </form>
        </main>
    )
}

export default Contact;