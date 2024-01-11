import { ContactForm } from "components/contactForm/ContactForm";
import { Filter } from "components/filter/Filter";
import { ContactList } from "components/contactList/ContactList";

const ContactsPage = () => {
    return (
        <>
            <div className="container">
                <ContactForm />
                <Filter />
                <ContactList />
            </div>
        </>
    );
};

export default ContactsPage;