import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    
        const handleSubmit = e => {
        e.preventDefault();
    
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const id = nanoid();
        let exist = false;
    
        if (Array.isArray(contacts)) {
            contacts.forEach(contact => {
            if (contact.name.toLowerCase().trim() === name.toLowerCase().trim()) {
                alert(`${name} is already in contacts`);
                exist = true;
            }
            });
        }
    
        if (!exist) {
            dispatch(addAsyncContact ({ id, name, number }));
        }
        e.target.reset();
        };

    return (
        <>
        <div className={css.form}>
    <h1 className={css.form__title}>Phonebook</h1>
    <form className={css.form__form} onSubmit={handleSubmit}>
        <label className={css.form__label} htmlFor={"name"}>
            Name
        </label>
        <input
            type="text"
            name="name"
            id="name"
            className={css.form__input}
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)?"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Adrian Smith"
            autoComplete="name"
            required
        />
        <label className={css.form__label} htmlFor={"number"}>
            Number
        </label>
        <input
            type="tel"
            name="number"
            id="number"
            className={css.form__input}
            placeholder="+48 123-456-789"
            autoComplete="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button className={css.form__btn} type="submit">
            Add contact
        </button>
    </form>
</div>
        </>
    );
};