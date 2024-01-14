import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice';
import { Box, Input, Heading } from "@chakra-ui/react";


export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Box mt={5}>
      <Heading as="h2" fontSize="xl">
        Find contacts by name
      </Heading>
      <Input
        type="text"
        name="filter"
        onChange={onFilterChange}
        placeholder="Adrian Smith"
        borderWidth={1}
        borderRadius="md"
        mt={5}
      />
    </Box>
  );
};