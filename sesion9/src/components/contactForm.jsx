import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {

    const name = useRef('');
    const surname = useRef('');

    function addContact(e){
        e.preventDefault();

        const newContact = {
            name: name.current.value,
            surname: surname.current.value,
            conectado: true
        };

        onAddContact(newContact);
        name.current.value = '';
        surname.current.value = '';
    }

    return (
        <form onSubmit={addContact} className={'card mb-4 rounded-3 shadow-sm '}>
            <h3 className='card-header py-3'>Crear contacto</h3>
                <div className='card-body'>
                    <div className='form-floating'>
                        <input ref={name} id='name' type='text' placeholder='Nombre' className='form-control mb-2'/>
                        <label for='name'>Nombre</label>
                    </div>
                    <div className='form-floating'>
                        <input ref={surname} id='surname' type='text' placeholder='Apellido' className='form-control mb-2'/>
                        <label for='name'>Apellido</label>
                    </div>
                    <button onClick={addContact} type='submit' className='w-100 btn btn-lg btn-primary'>Añadir</button>
                </div>
        </form>
    );
}

export default ContactForm;
