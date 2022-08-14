import { useSetsContext } from "../hooks/useSetsContext"
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import React from 'react'
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

const SetDetails = ({ set }) => {
    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('https://quizzleapi.ml/api/sets/' + set._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }) 
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SET', payload: json})
        }
    }

    return (
            <Box
                mx = "5"
                px={8}
                py={4}
                rounded="lg"
                shadow="lg"
                bg="gray.200"
                _dark={{ bg: "gray.800" }}
                maxW="100%"
                mb = {10}
                mt = {10}
            >
                <Flex justifyContent="space-between" alignItems="center">
                <Link
                    px={3}
                    py={1}
                    bg="gray.600"
                    color="gray.100"
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                >
                    {set.category}
                </Link>
                <span className = "material-symbols-outlined" onClick = {handleClick}>delete</span>
                </Flex>

                <Box mt={2}>
                <Link
                    fontSize="2xl"
                    color="gray.700"
                    _dark={{ color: "white" }}
                    fontWeight="700"
                    _hover={{
                    color: "gray.600",
                    _dark: {
                        color: "gray.200",
                    },
                    textDecor: "underline",
                    }}
                >
                    {set.title}
                </Link>
                <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.300" }}>
                    {set.desc}
                </chakra.p>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Link
                    color="brand.600"
                    _dark={{ color: "brand.400" }}
                    _hover={{ textDecor: "underline" }}
                >
                    Created {formatDistanceToNow(new Date(set.createdAt), { addSuffix: true},)}
                </Link>
                </Flex>
            </Box> 
    )
}

export default SetDetails