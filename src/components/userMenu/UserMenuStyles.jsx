import { NavLink } from 'react-router-dom';
import { Button, Link } from '@chakra-ui/react';

export const HomeLink = ({ children }) => (
  <Link
    as={NavLink}
    to="/"
    _hover={{ transform: 'scale(1.2)' }}
    marginLeft="30px"
    marginRight="40px"
    fontSize="lg"
    fontWeight="bold"
    borderRadius="md"
    p="2"
    color="white"
    bgGradient="linear(to-r, blue.500, orange.500)"
  >
    {children}
  </Link>
);

export const ContactsLink = ({ children }) => (
  <Link
    as={NavLink}
    to="/contacts"
    _hover={{ fontWeight: 'bold', transform: 'scale(1.2)' }}
    fontSize="lg"
    fontWeight="bold"
    borderRadius="md"
    p="2"
    color="white"
    bgGradient="linear(to-r, blue.500, orange.500)"
  >
    {children}
  </Link>
);

export const AuthButton = ({ children, onClick }) => (
  <Button
    color="white"
    fontWeight="bold"
    borderRadius="md"
    bgGradient="linear(to-r, blue.500, orange.500)"
    _hover={{
      bgGradient: 'linear(to-r, red.500, yellow.500)',
    }}
    onClick={onClick}
    marginLeft="30px"
    fontSize="lg"
    p="2"
  >
    {children}
  </Button>
);

export const UnAuthButton = ({ children, to }) => (
  <Button
  color="white"
  fontWeight="bold"
  borderRadius="md"
  bgGradient="linear(to-r, blue.500, orange.500)"
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}
  marginLeft="30px"
  fontSize="lg"
  p="2"
>
    <NavLink to={to} style={{ textDecoration: 'none', color: 'white' }}>
      {children}
    </NavLink>
  </Button>
);
