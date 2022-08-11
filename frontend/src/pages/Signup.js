import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
  } from "@chakra-ui/react";
  
import { FaUserAlt, FaLock } from "react-icons/fa";

const Signup = () => {

    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="90vh"
            justifyContent="center"
            alignItems="center"
            backgroundColor = "gray.100"
        >
            <Box backgroundColor = "white" minW={{ base: "90%", md: "468px" }}>
                <form className = "login" onSubmit = {handleSubmit}>
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                >
                    <Heading as="h1" size="lg" color="gray.500">Quizzle Signup:</Heading>
                    <FormControl>
                        <InputGroup backgroundColor = "white">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input 
                        type = "email" 
                        onChange = {(e) => (setEmail(e.target.value))}
                        value = {email}
                        placeholder = "Email Address"
                    />
                        </InputGroup>
                    </FormControl>

                    <FormControl>
                        <InputGroup backgroundColor = "white">
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            children={<CFaLock color="gray.300" />}
                        />
                        <Input
                            type = "password" 
                            onChange = {(e) => (setPassword(e.target.value))}
                            value = {password}
                            placeholder="Password"
                        />
                        </InputGroup>
                    </FormControl>

                    <button disabled = {isLoading}>Sign up</button>
                    {error && <div className = "error">{error}</div>}
                    </Stack>
                </form>
            </Box>
        </Flex>
    )
}

export default Signup