import { useEffect, useState } from 'react'
import { useSetsContext } from '../../hooks/useSetsContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    Flex,
    Heading,
    Box,
    Spacer,
    Button
  } from "@chakra-ui/react";

const ModeWrite = () => {
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    const { id } = useParams();
    const navigate = useNavigate();
    const [cards, setCards] = useState(null)
    const [current, setCurrent] = useState(0)
    const [title, setTitle] = useState('')
    

    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setCards(json)
                console.log(cards)
            } else {
                navigate('/')
            }
        }

        fetchSet()
        
    }, [dispatch, user, id])

    useEffect(() => {
        if (cards) {
            setTitle(cards.cards[current].term)
        }
    }, [cards, current])

    const handleClick = (e) => {
        //if current is less than cards.length - 1, set current to current + 1
        if (current < cards.cards.length - 1) {
            setCurrent(current + 1)
        } else {
            //END GAME CONDITIONS
        }
        console.log(current)
    }

    


    return (
        <Flex align="center" justify="center">
            {cards && (
                <Box>
                    <h1>{cards.title}</h1>
                    <h1>{title}</h1>
                    <Button onClick = {handleClick}>Test</Button>
                </Box>
            )}
        </Flex>
    )
}

export default ModeWrite
