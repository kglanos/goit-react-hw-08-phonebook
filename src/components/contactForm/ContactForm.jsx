import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

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
        <Box mt={5}>
            <Heading as="h1" mb={4}>
                Phonebook
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl htmlFor="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)?"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Adrian Smith"
                        autoComplete="name"
                        required
                    />
                </FormControl>
                <FormControl htmlFor="number" mb={4}>
                    <FormLabel>Number</FormLabel>
                    <Input
                        type="tel"
                        name="number"
                        id="number"
                        placeholder="+48 123-456-789"
                        autoComplete="tel"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    borderRadius="md"
                    w="120px"
                    p="2"
                    _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                    }}
                    bgGradient="linear(to-r, blue.500, orange.500)"
                >
                    Add contact
                </Button>
            </form>
        </Box>
    );
};
