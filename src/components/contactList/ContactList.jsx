import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { fetchContacts, deleteAsyncContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilterValue } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteClick = contactId => {
    try {
      dispatch(deleteAsyncContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filteredContacts.map((contact) => (
          <li className={css.contacts__item} key={JSON.stringify(contact)}>
            {contact.name} : {contact.number}{' '}
            <button onClick={() => handleDeleteClick(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
