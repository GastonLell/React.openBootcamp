import React, {useState} from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact';
import ContactForm from '../pure/forms/ContactForm';

const ContactList = () => {
  const defaultContact = new Contact("Gaston", "Lell", "gastonglell@gmail.com", false);

  const [contacts, setContacts] = useState([defaultContact])

  function add (contact){
    const tempContact = [...contacts, contact];
    setContacts(tempContact)
  }

  function edit (contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];

    tempContact[index].conectado = !tempContact[index].conectado;

    setContacts(tempContact);
    
  }
  function remove (contact){
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];

    tempContact.splice(index, 1);

    setContacts(tempContact);

  }
  return (
    
    <div>
      <div>
        Your contacts:
      </div>
      <div>
        {
          contacts.map((contact, index) =>  <ContactComponent key={index} contact={contact} edit={edit} remove={remove} />)
        }
       
      </div>

      <ContactForm add={add}/>
    </div>
  )
}

export default ContactList