import LoginForm from "components/LoginForm/LoginForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Center, Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login" />
            </Helmet>
            <Container maxW="container.lg">
                <Center>
                    <Box w="100%" p={4} my={12} borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Heading as="h1" size="lg" textAlign="center" mb={8}>Login</Heading>
                        <LoginForm />
                        <Text mt={4} textAlign="center">
                            Don't have an account? <NavLink to="/register">Register</NavLink>
                        </Text>
                    </Box>
                </Center>
            </Container>
        </HelmetProvider>
    );
}