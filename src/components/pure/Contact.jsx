import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
  return (
    <div>
        <h2>
            {contact.name} - {contact.lastName}
        </h2>
        <h3>
            {contact.email}
        </h3>
        <h4>
            { contact.conectado ? 'Contacto en Linea' : 'Contacto no disponible'}
        </h4>
    </div>
  )
}
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}
export default ContactComponent;