import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Box, Heading, Image, Center } from '@chakra-ui/react';


const HomePage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container maxW={'2xl'} centerContent>
                <Center>
                <Box padding={'100px'} mt={'10'} textAlign={'center'}>
                    <Image src={'https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-11237.jpg?w=996&t=st=1705185625~exp=1705186225~hmac=e15d3def7a582acb35f3a00ce8f8c9b52485d408f7b1afb2239bdd3b1ec0c943'} alt={'Contact Us Image'} mb={'4'} />
                    <Heading as={'h2'} fontSize={'xl'}>
                    Contacts Book welcome page
                    </Heading>
                </Box>
                </Center>
            </Container>
        </HelmetProvider>
    );
};

    export default HomePage;