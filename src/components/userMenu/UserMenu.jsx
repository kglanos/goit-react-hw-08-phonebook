import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { HomeLink, ContactsLink, AuthButton, UnAuthButton } from '../../components/userMenu/UserMenuStyles';
import { Flex, Box, Text, ButtonGroup } from '@chakra-ui/react';

const AuthorizedNavigation = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxW="100%"
      padding="10px"
      boxSizing="border-box"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="orange.500"
      opacity="0.5"
      zIndex="1000"
    >
      <Flex>
        <HomeLink>Home</HomeLink>
        <ContactsLink>Contacts</ContactsLink>
      </Flex>
      <Text mt="2" fontSize="lg" fontWeight="semibold">
        Welcome, {userName}
        <AuthButton onClick={handleLogout}>Log Out</AuthButton>
      </Text>
    </Flex>
  );
};

const UnauthorizedNavigation = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      maxW="100%"
      padding="10px"
      boxSizing="border-box"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="orange.500"
      opacity="0.5"
      zIndex="1000"
    >
      <HomeLink>Home</HomeLink>
      <Flex>
        <ButtonGroup gap="1">
          <UnAuthButton to="/register">Sign Up</UnAuthButton>
          <UnAuthButton to="/login">Log In</UnAuthButton>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box p="2" marginTop="50px">
        {isLoggedIn ? <AuthorizedNavigation /> : <UnauthorizedNavigation />}
        <Outlet />
      </Box>
    </>
  );
};
