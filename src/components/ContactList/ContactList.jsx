import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import { selectorContact } from 'redux/contacts/selector';
import { selectorFilter } from 'redux/filter/selector';
import css from './ContactList.module.css';

export function ContactList() {
	const contacts = useSelector(selectorContact);
	const dispatch = useDispatch();
	const woldFilter = useSelector(selectorFilter)

	const isDelete = (code) => {
		dispatch(deleteContact(code))
	}
	// console.log(contacts);
	const contactsAfterFiltr =  contacts.filter(({ name }) => name.toLowerCase().includes(woldFilter));
	// console.log(contactsAfterFiltr);

	if (contactsAfterFiltr.length === 0) {
		return <p>Not contacts</p>
	}
  return (
    <ul className={css.list}>
      {contactsAfterFiltr.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name} : {number}
            </span>
            <button type="button" className={css.btn} onClick={() => {isDelete(id)}}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

