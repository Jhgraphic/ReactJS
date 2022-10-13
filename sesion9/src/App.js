// En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
// Mostrar contacto. Crear contacto. Eliminar contacto. Cambiar el estado del contacto entre Conectado y Desconectado.

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import ContactComponent from './components/contactComponent';
import ContactForm from './components/contactForm';

const App = () => {
  const defaultContact = [
    { name: 'Pablo', surname: 'García', conectado: true },
    { name: 'Juan', surname: 'Rodríguez', conectado: true },
  ];

  const [newContact, setNewContact] = useState(defaultContact);

  function deleteContact(contact){
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];
    tempContact.splice(index,1);
    setNewContact(tempContact);
  }

  function addContact(contact){
    const tempContact = [...newContact];
    tempContact.push(contact);
    setNewContact(tempContact);
  }

  function changeState(contact){
    const index = newContact.indexOf(contact);
    const tempContact = [...newContact];
    tempContact[index].changed = !tempContact[index].changed;
    setNewContact(tempContact);
  }

  return (
    <div className="App">
      <h1 className='display-4 fw-normal mb-3 fw-bold'>Contactos</h1>
      <div className='d-flex flex-wrap'>
        { newContact.map((contact, index) => {
          return (
            <ContactComponent
              key={index}
              contact={contact}
              deleteContact={deleteContact}
              changeState={changeState}>
            </ContactComponent>
          )
        }
        )}
      </div>
      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
}

export default App;
