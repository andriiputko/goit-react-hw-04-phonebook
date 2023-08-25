import { Component } from 'react';
import { nanoid } from 'nanoid';
import cl from "./Form.module.css"

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  addSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.reset();
  };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  
  reset = () => {
    this.setState({ number: '', name: '' });
  };


  render() {
    return (
      <form className={cl.form} onSubmit={this.addSubmit}>
        <label className={cl.label} htmlFor={this.nameInputId}>Name</label>
        <input
        className={cl.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Input name"
          required
        />

        <label className={cl.label} htmlFor={this.numberInputId}>Number</label>
        <input
        className={cl.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Input phone number"
          required
        />
        <button className={cl.button} type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
