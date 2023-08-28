import Form from './Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import Filter from './Filter';
import { useState, useEffect } from 'react';

export  function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorage) {
      setContacts(contactsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = task => {
    const searchSameName = contacts.some(contact => contact.name === task.name);

    if (searchSameName) {
      return alert(`${task.name} is already in contacts`);
    }

    if (!task.name.length) {
      return alert('Fields must be filled!');
    }

    const contact = {
      ...task,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = filter => {
    setFilter(filter.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

    return (
      <>
        <Form onSubmit={addContact} />
          {contacts.length >0 ? 
          <>
          <Filter value={filter} onChangeFilter={changeFilter} />
          
            <Contacts
              contacts={visibleContacts}
              onRemoveContact={removeContact}
            />
          
          </> : <p style={{
            backgroundColor: "antiquewhite",
            color: "rgb(99, 104, 85)",
            padding: "15px 0",
            fontSize: "25px",
            fontWeight: "600",
            margin: "0",
            textAlign: "center"
      
          }}>Phonebook is empty</p>
        }
        
        
      </>
    );
  }

