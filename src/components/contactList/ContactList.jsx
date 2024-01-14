import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { fetchContacts, deleteAsyncContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilterValue } from '../../redux/contacts/selectors';
import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";


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
    <Box mt={6}>
      <Heading as="h2" fontSize="2xl"mt={4}>
        Contacts
      </Heading>
      <List className={css.contacts__list} mt={2}>
        {filteredContacts.map((contact) => (
          <ListItem className={css.contacts__item} key={JSON.stringify(contact)} mb={2}>
            {contact.name} : {contact.number}{' '}
            <Button colorScheme="blue"
                    size="lg"
                    ml = {4}
                    borderRadius="md"
                    p="2"
                    w="120px"
                    _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                    }}
                    bgGradient="linear(to-r, blue.500, orange.500)" onClick={() => handleDeleteClick(contact.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
