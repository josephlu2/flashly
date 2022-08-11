import React from "react";
import { Heading } from '@chakra-ui/react';
import { VStack, Flex, Spacer, Divider, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar(props) {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <VStack spacing = "-8">
      <Flex p = {4} w = "100%">
        <Link to="/">
        <Heading
          mb='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
          bgClip='text'
          pr = "8"
        >
          QUIZZLE
        </Heading>
        </Link>
        <Spacer />
        <Flex pr = "5" pt = "1">
          {user && (
            <div>
              <Link to="/create">
                <Button variant="solid" colorScheme = "green">Create Set</Button>
              </Link>
              <Button variant="solid" colorScheme = "pink" ml = "5" onClick = {handleClick}>Log out</Button>
            </div>
            
          )}
          {!user && (
            <div>
              <Link to="/login">
                <Button variant="solid" colorScheme = "pink" mr = "4">Login</Button>
              </Link>

              <Link to="/signup">
                <Button variant="solid" colorScheme = "pink">Signup</Button>
              </Link>
            </div>
          )}
          </Flex>
    </Flex>
    <Divider/>
  </VStack>
  );
}