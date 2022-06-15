import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

function ContactForm({ add }) {
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false,
        )
        add(newContact);
        
        nameRef.current.value = ''
        lastNameRef.current.value = ''
        emailRef.current.value = ''
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4' >
            <div className='form-outline flex-fill'>
                <input type="text" ref={nameRef} id='inputName' className='form-control form-control-lg' placeholder='Contact name' required autoFocus />
                <input type="text" ref={lastNameRef} id='inputLastName' className='form-control form-control-lg' placeholder='Last Name' required />
                <input type="text" ref={emailRef} id='emailRef' className='form-control form-control-lg' placeholder='Email' required />

                <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
            </div>

        </form>
    )
}

ContactForm.prototype = {
    add: PropTypes.func.isRequired
}

export default ContactForm