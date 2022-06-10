import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact';

const ContactList = () => {
    const defaultContact = new Contact("Gaston", "Lell", "gastonglell@gmail.com", false);

  return (
    <div>
        <div>
            Your contacts:
        </div>
        <div>
            <ContactComponent contact={defaultContact}/>
        </div>
    </div>
  )
}

export default ContactList