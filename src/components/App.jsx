import { Component } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  componentDidMount () {
    const localSetContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.setState({contacts: localSetContacts})
    
  }

  componentDidUpdate (prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
      
    }

  }

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <>
        <Form onSubmit={this.addContact} />
          {this.state.contacts.length >0 ? 
          <>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          
            <Contacts
              contacts={visibleContacts}
              onRemoveContact={this.removeContact}
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
}
