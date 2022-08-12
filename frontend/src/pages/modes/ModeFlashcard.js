import { useCurrentSetContext } from "../../hooks/useCurrentSetContext"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useParams, Navigate, useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState, useDeepCompareEffect } from 'react'
import FlashcardMode from '../../components/FlashcardMode'
import ModeSelect from "../../components/ModeSelect";
import {
    Flex,
    Heading,
    Box,
    Spacer,
    Switch,
    Stack,
    Text
  } from "@chakra-ui/react";

const ModeFlashcard = () => {
    const { id } = useParams();
    const { sets, dispatch } = useCurrentSetContext()
    const { user } = useAuthContext()
    const [ cards, setCards ] = useState(null)
    const [ modifiedCards, setModifiedCards ] = useState(null)

    const [ set, setSet ] = useState(null)
    const navigate = useNavigate();
    const [random, setRandom] = useState(false);
    const [flipCards, setflipCards] = useState(false);
    const [showUpdated, setShowUpdated] = useState(false);

    useEffect(() => {
        if (!sets) {
            navigate('/')
        } else {
            setCards(sets.map(({term, definition}) => ({ front: {text: term},  back: {text: definition}})))
        }
    }, [])



    return (
        
        <Flex flexDir = "row" alignItems="center" justify = "center" pt = "10">
            <Box w = "75%" flex = "0.8">
                {cards && (<FlashcardMode dataSource = {modifiedCards ? modifiedCards : cards}/>)}
            </Box>
            <Box>
                <Heading>Options (WIP)</Heading>
                <Stack direction='column'>
                    <Text>Shuffle cards:</Text>
                    <Switch isChecked = { random } onChange={e => setRandom(e.target.checked)} colorScheme='teal' size='lg' />
                </Stack>
                <Stack direction='column' mt = "4">
                    <Text>Flip cards:</Text>
                    <Switch isChecked = { flipCards } onChange={e => setflipCards(e.target.checked)} colorScheme='teal' size='lg' />
                </Stack>
            </Box>
        </Flex>
    )
}

export default ModeFlashcard