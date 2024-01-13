import RegisterForm from "components/RegisterForm/RegisterForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Center, Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Register</title>
                <meta name="description" content="Register" />
            </Helmet>
            <Container maxW="container.lg">
                <Center>
                    <Box w="100%" p={4} my={12} borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Heading as="h1" size="lg" textAlign="center" mb={8}>Register</Heading>
                        <RegisterForm />
                        <Text mt={4} textAlign="center">
                            Already have an account? <NavLink to="/login">Login</NavLink>
                        </Text>
                    </Box>
                </Center>
            </Container>
        </HelmetProvider>
    );
}