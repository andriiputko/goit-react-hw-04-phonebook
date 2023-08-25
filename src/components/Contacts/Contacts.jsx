import PropTypes from 'prop-types';
import cl from "./Contacts.module.css"

const Contacts = ({ contacts, onRemoveContact }) => (
  <ul className={cl.list}>
    {contacts.map(contact => (
    <li key={contact.id} className={cl.li}>
      {contact.name + ' : ' + contact.number}
      <button type="button" name="delete" className={cl.button} onClick={() => onRemoveContact(contact.id)}>
        Delete
      </button>
    </li>
    ))}
  </ul>
);

Contacts.propTypes = {
contacts: PropTypes.array.isRequired,
onRemoveContact: PropTypes.func.isRequired,
};

export default Contacts;
