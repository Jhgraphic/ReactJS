import React from 'react';

const ContactComponent = ({ contact, deleteContact, changeState }) => {
    return (
        <div className='col ms-3'>
            <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-body'>
                    <h3 className='display-6 text-center'>{contact.name}</h3>
                    <h3 className='display-6 mb-4 text-center'>{contact.surname}</h3>
                <div class="d-grid gap-2">
                    <button 
                        style={{ backgroundColor: contact.changed ? 'green' : 'red' }}
                        className='btn btn-primary border-0 fw-semibold' 
                        onClick={() => {changeState(contact)}}
                    >
                        {contact.changed ? 'Conectado' : 'Desconectado'}
                    </button>
                    <button 
                        className='btn btn-outline-danger'
                        onClick={() => deleteContact(contact)}
                    >
                        <i class="bi bi-x-square-fill"></i> Eliminar contacto
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;
