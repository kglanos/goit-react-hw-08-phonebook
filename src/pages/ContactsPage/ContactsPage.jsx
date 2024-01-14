import { ContactForm } from "components/contactForm/ContactForm";
import { Filter } from "components/filter/Filter";
import { ContactList } from "components/contactList/ContactList";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';

const ContactsPage = () => {
    return (
        <>
            <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <Box maxW={'320px'} mx={'auto'} mt={'10'} textAlign={'center'}>
          <ContactForm />
          <Filter />
          <ContactList />
        </Box>
      </HelmetProvider>
        </>
    );
};

export default ContactsPage;