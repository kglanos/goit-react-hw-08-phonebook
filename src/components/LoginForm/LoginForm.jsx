import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        dispatch(login({ email: email.value, password: password.value }));
        email.value = "";
        password.value = "";
    };

    return (
        <Box maxW="400px" mx="auto">
            <form onSubmit={handleLogin}>
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
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
