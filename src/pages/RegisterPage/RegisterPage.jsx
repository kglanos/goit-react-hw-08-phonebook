import RegisterForm from "components/RegisterForm/RegisterForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, Heading, Text, Flex, Link as ChakraLink } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

export default function RegisterPage() {
    return (
    <HelmetProvider>
        <Helmet>
            <title>Register</title>
            <meta name="description" content="Register" />
        </Helmet>
        <Flex minHeight="100vh" alignItems="center" justifyContent="center" mt={-20}>
            <Box p={8} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="white">
            <Heading as="h1" size="xl" textAlign="center" mb={8}>
                Register
            </Heading>
            <RegisterForm />
            <Text mt={4} textAlign="center"> 
                Already have an account?{' '}
                <ChakraLink as={ReactRouterLink} to="/login" textDecoration="underline" color="blue.500">
                Login
                </ChakraLink>
            </Text>
            </Box>
        </Flex>
    </HelmetProvider>
    );
}