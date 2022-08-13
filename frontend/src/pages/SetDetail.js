import { useAuthContext } from '../hooks/useAuthContext'
import { useCurrentSetContext } from "../hooks/useCurrentSetContext"
import { useParams, Navigate, useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from 'react'
import Flashcard from '../components/Flashcard'
import ModeSelect from "../components/ModeSelect";
import {
    Flex,
    Heading,
    Box,
    Spacer,
  } from "@chakra-ui/react";

const SetDetail = () => {
    const { id } = useParams();
    const { dispatch } = useCurrentSetContext()
    const { user } = useAuthContext()
    const [ set, setSet ] = useState(null)
    const [ cards, setCards ] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                setSet(json)
                setCards(json.cards.map(({term, definition}) => ({ front: {text: term},  back: {text: definition}})))
                dispatch({type: 'SET_SET', payload: json.cards})
            } else {
                navigate('/')
            }
        }

        fetchSet()

        
    }, [dispatch, user, id])

    return (
        
        <div className="individual-set">
            {set && (

                    <Flex flexDir="column" mb = "50" mt = "2">
                        <Box flex="1" p={4} pl = "8">
                            <Heading as="h3" size="2xl">{set.title}</Heading>
                            <Heading as='h4' size='md' pt = "2">
                                {set.desc}
                            </Heading>
                        </Box>

                        <Flex>
                            <Box flex="2" p="4">
                                <Flashcard dataSource = {cards}/>
                            </Box>
                            <Box flex = "1" p = "4">
                                <ModeSelect />
                            </Box>
                        </Flex>

                        <Heading p = {8}>Terms: </Heading>

                        <Flex flexDir = "column">
                            {set.cards.map(({term, definition}) => (
                                <Box bg = 'gray.200'  borderRadius = "10" p ={4} ml = {8} mr = {8} mb = {2} >
                                    <Flex>
                                        <Box flex="1">
                                            <Heading as="h4" size="md">{term}</Heading>
                                        </Box>

                                        <Spacer />
                                        
                                        <Box flex = "2">
                                            <Heading fontWeight = "450" as="h4" size="md">{definition}</Heading>
                                        </Box>
                                    </Flex>
                                </Box>
                            ))}
                        </Flex>

                    </Flex>

                
            )}
            
        </div>
    )
}

export default SetDetail