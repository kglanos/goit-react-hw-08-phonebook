import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(register({ name, email, password }));
    };

    return (
        <Box maxW="400px" mx="auto">
            <form onSubmit={handleRegistration}>
                <FormControl id="username" mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name="username" />
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" />
                </FormControl>
                <FormControl id="password" mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" autoComplete="off" />
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="100%"
                    borderRadius="md"
                    p="2"
                    _hover={{
                        bgGradient: 'linear(to-r, red.500, yellow.500)',
                    }}
                    bgGradient="linear(to-r, blue.500, orange.500)"
                >
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default RegisterForm;
