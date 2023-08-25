import { Component } from 'react';
import { nanoid } from 'nanoid';
import cl from "./Form.module.css"
import { useState } from 'react';

const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName (value);
    } else if (name === 'number') {
      setNumber (value);
    }
  };

  const addSubmit = e => {
    e.preventDefault();
    if (name.length === 0 || number.length === 0) {
      alert('Fields must be filled!');
     
    }
    onSubmit ({ name, number });
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
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Input name"
          required
        />

        <label className={cl.label} htmlFor={number}>Number</label>
        <input
        className={cl.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Input phone number"
          required
        />
        <button className={cl.button} type="submit">Add contact</button>
      </form>
    );
  }
export default Form;
