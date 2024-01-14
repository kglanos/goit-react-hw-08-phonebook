import LoginForm from "components/LoginForm/LoginForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Flex, Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

export default function LoginPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login" />
            </Helmet>
            <Flex minHeight="100vh" alignItems="center" justifyContent="center" mt={-32}>
                <Box p={8} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
                    <Heading as="h1" size="lg" textAlign="center" mb={8}>
                    Login
                    </Heading>
                    <LoginForm />
                    <Text mt={4} textAlign="center">
                    Don't have an account?{' '}
                    <ChakraLink as={ReactRouterLink} to="/register" textDecoration="underline" color="blue.500">
                        Register
                    </ChakraLink>
                    </Text>
                </Box>
            </Flex>
        </HelmetProvider>
    );
}