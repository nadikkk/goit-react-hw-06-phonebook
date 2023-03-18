import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContact } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/contactSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();
  const dispatch = useDispatch();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const contacts = useSelector(selectorContact);
//   console.log(contacts);

  const newContact = {
    name,
    number,
    id,
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(contacts);
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="">Name</label>
      <input
        className={css.input}
        onChange={changeInput}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="">Number</label>
      <input
        className={css.input}
        onChange={changeInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}