import { Component } from 'react';
import { nanoid } from 'nanoid';
import cl from "./Form.module.css"

export default function Form({addSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts, setContacts } = useContext(Context);

  const reset = () => {
    setName('');
    setNumber('');
  };
    return (
      <form className={cl.form} onSubmit={addSubmit}>
        <label className={cl.label} htmlFor={name}>Name</label>
        <input
        className={cl.input}
          type="text"
          name="name"
          // value={name}
          // onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Input name"
          required
        />

        <label className={cl.label} htmlFor={number}>Number</label>
        <input
        className={cl.input}
          type="tel"
          name="number"
          // value={this.state.number}
          // onChange={this.handleChange}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Input phone number"
          required
        />
        <button className={cl.button} type="submit">Add contact</button>
      </form>
    );
  }


