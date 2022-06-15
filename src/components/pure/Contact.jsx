import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact, edit, remove }) => {

    function conectedEdit() {
        return contact.conectado
            ? (<i onClick={() => edit(contact)} className='bi-toggle-on' style={{ color: 'green' }}></i>)
            : (<i onClick={() => edit(contact)} className='bi-toggle-off' style={{ color: 'grey' }}></i>)
    }
    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{contact.lastName}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {
                    conectedEdit()
                }
                <i className='bi-trash' onClick={() => remove(contact)} style={{ color: 'tomato', fontWeight: 'bold' }}></i>
            </td>
        </tr>

    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default ContactComponent;