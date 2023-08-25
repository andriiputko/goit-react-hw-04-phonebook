import { Component } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import Filter from './Filter';
import { useState, useMemo } from 'react';

export  function App() {
  const exampleContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? exampleContacts;
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }, { resetForm }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
    } else {
      const person = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, person]);
      resetForm();
    }
  };

  const changeFilter = event => {
    setFilter(event.target.value );
  };

  const getVisibleContacts = useMemo(() => {
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

 const removeContact = id => {
    setContacts(prevState => {
      return prevState.filter(c => c.id !== id);
    });
  };

 
    // const visibleContacts = this.getVisibleContacts();
    // const { filter } = this.state;

    return (
      <>
        <Form onSubmit={addContact} />
          {contacts.length >0 ? 
          <>
          <Filter value={filter} onChangeFilter={changeFilter} />
          
            <Contacts
              contacts={getVisibleContacts()}
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

